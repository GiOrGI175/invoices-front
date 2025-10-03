'use client';

import { useEffect, useMemo, useState } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Cookies from 'js-cookie';
import { FormProvider, useForm } from 'react-hook-form';

import BillFrom from '../../_molecules/form/BillFrom';
import BillTo from '../../_molecules/form/BillTo';
import CreateItemList from '../../_molecules/form/CreateItemList';

type InvoiceItem = { name: string; quantity: number; price: number };
type Address = {
  street: string;
  city: string;
  postCode: string;
  country: string;
};

export type CreateInvoiceT = {
  createdAt: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: 'draft' | 'pending' | 'paid';
  senderAddress: Address;
  clientAddress: Address;
  items: InvoiceItem[];
};

const DEFAULTS: CreateInvoiceT = {
  createdAt: new Date().toISOString(),
  description: '',
  paymentTerms: 30,
  clientName: '',
  clientEmail: '',
  status: 'draft',
  senderAddress: { street: '', city: '', postCode: '', country: '' },
  clientAddress: { street: '', city: '', postCode: '', country: '' },
  items: [{ name: '', quantity: 1, price: 0 }],
};

export default function CreateForm() {
  const params = useParams();
  const pathname = usePathname();

  const invoiceId = useMemo(() => {
    if (params?.id) {
      return params.id as string;
    }

    const match = pathname?.match(/\/invoices\/([^\/]+)/);
    return match?.[1];
  }, [params, pathname]);

  const isEdit = useMemo(() => Boolean(invoiceId), [invoiceId]);

  console.log(invoiceId, 'invoiceId');
  console.log(pathname, 'pathname');
  console.log(params, 'params');

  const methods = useForm<CreateInvoiceT>({
    mode: 'onBlur',
    defaultValues: DEFAULTS,
  });
  const { handleSubmit, reset } = methods;

  const [loading, setLoading] = useState(false);
  const [loadErr, setLoadErr] = useState<string | null>(null);

  useEffect(() => {
    if (!isEdit || !invoiceId) {
      reset(DEFAULTS);
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        setLoading(true);
        setLoadErr(null);

        const token = Cookies.get('auth_token');
        const res = await fetch(
          `https://invoice-back-sqrj.onrender.com/invoice/${invoiceId}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          }
        );

        if (!res.ok) throw new Error(await res.text());
        const raw = await res.json();

        const initialValues: CreateInvoiceT = {
          createdAt: raw.createdAt ?? new Date().toISOString(),
          description: raw.description ?? '',
          paymentTerms: Number(raw.paymentTerms ?? 30),
          clientName: raw.clientName ?? raw.client?.name ?? '',
          clientEmail: raw.clientEmail ?? raw.client?.email ?? '',
          status: (raw.status as CreateInvoiceT['status']) ?? 'draft',
          senderAddress: {
            street: raw.senderAddress?.street ?? '',
            city: raw.senderAddress?.city ?? '',
            postCode: raw.senderAddress?.postCode ?? '',
            country: raw.senderAddress?.country ?? '',
          },
          clientAddress: {
            street: raw.clientAddress?.street ?? '',
            city: raw.clientAddress?.city ?? '',
            postCode: raw.clientAddress?.postCode ?? '',
            country: raw.clientAddress?.country ?? '',
          },
          items: (raw.items ?? []).map((i: InvoiceItem) => ({
            name: i.name ?? '',
            quantity: Number(i.quantity ?? 0),
            price: Number(i.price ?? 0),
          })),
        };

        if (!cancelled) reset(initialValues);
      } catch (err: unknown) {
        const msg =
          err instanceof Error ? err.message : 'Failed to load invoice';
        if (!cancelled) setLoadErr(msg);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [isEdit, invoiceId, reset]);

  const onSubmit = async (
    data: CreateInvoiceT,
    e?: React.BaseSyntheticEvent
  ) => {
    const submitter = (e?.nativeEvent as SubmitEvent)
      ?.submitter as HTMLButtonElement | null;
    const action = submitter?.dataset?.action;
    const isDraft = action === 'draft';

    const payload: CreateInvoiceT = {
      ...data,
      status: isDraft ? 'draft' : 'pending',
    };

    const token = Cookies.get('auth_token');
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(isDraft ? { 'x-status': 'draft' } : {}),
    };

    const url =
      isEdit && invoiceId
        ? `http://localhost:3005/invoice/${invoiceId}`
        : `http://localhost:3005/invoice`;
    const method = isEdit ? 'PATCH' : 'POST';

    const res = await fetch(url, {
      method,
      headers,
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      console.error('Failed', await res.text());
      return;
    }

    console.log('Success', await res.json());
    if (!isEdit) reset(DEFAULTS);
  };

  return (
    <FormProvider {...methods}>
      {loading && (
        <div className='mb-3 text-sm text-[#7E88C3]'>Loading invoice…</div>
      )}
      {loadErr && (
        <div className='mb-3 text-sm text-[#EC5757]'>Error: {loadErr}</div>
      )}

      <form
        id='invoice-form'
        onSubmit={handleSubmit(onSubmit)}
        className='max-sm:flex max-sm:flex-col max-sm:w-full'
      >
        <BillFrom />
        <BillTo />
        <CreateItemList />
      </form>
    </FormProvider>
  );
}
