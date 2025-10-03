'use client';

import BillFrom from '../../_molecules/form/BillFrom';
import BillTo from '../../_molecules/form/BillTo';
import CreateItemList from '../../_molecules/form/CreateItemList';
import Cookies from 'js-cookie';

import {
  FormProvider,
  useForm,
  useFormContext,
  useFieldArray,
} from 'react-hook-form';

type InvoiceItem = {
  name: string;
  quantity: number;
  price: number;
};

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

export default function CreateForm() {
  const methods = useForm<CreateInvoiceT>({
    mode: 'onBlur',
    defaultValues: {
      createdAt: new Date().toISOString(),
      description: '',
      paymentTerms: 30,
      clientName: '',
      clientEmail: '',
      status: 'draft',
      senderAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      clientAddress: {
        street: '',
        city: '',
        postCode: '',
        country: '',
      },
      items: [{ name: '', quantity: 1, price: 0 }],
    },
  });

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

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

    console.log(token, 'token3');

    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(isDraft ? { 'x-status': 'draft' } : {}),
    };

    try {
      const res = await fetch('http://localhost:3005/invoice', {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error('Failed', await res.text());
        return;
      }

      console.log('Success', await res.json());
      methods.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <FormProvider {...methods}>
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
