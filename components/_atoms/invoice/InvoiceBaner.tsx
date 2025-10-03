'use client';

import { useOpen } from '@/store/ui';
import InvoiceDelete from './InvoiceDelete';
import InvoiceEdit from './InvoiceEdit';
import InvoiceMarkPaid from './InvoiceMarkPaid';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';

// ApiInvoice ტიპი – მოიტანე იქიდან, სადაც გაბდება (თუ სხვაგან გაქვს, შეცვალე იმპორტი)
import { ApiInvoice } from '@/components/_organisms/invoice/Invoice';

type UIStatus = 'Draft' | 'Pending' | 'Paid';
const toUI = (s: ApiInvoice['status']): UIStatus =>
  (s.charAt(0).toUpperCase() + s.slice(1)) as UIStatus;
const toApi = (s: UIStatus): ApiInvoice['status'] =>
  s.toLowerCase() as ApiInvoice['status'];

export default function InvoiceBaner() {
  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsDelete = useOpen((state) => state.setIsDelete);

  const router = useRouter();
  const params = useParams<{ invoicesId?: string; id?: string }>();
  const id = params.invoicesId ?? params.id;

  const [invoice, setInvoice] = useState<ApiInvoice | null>(null);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        if (!id) return;
        const token = Cookies.get('auth_token');
        if (!token) {
          router.replace('/sign-in');
          return;
        }

        const res = await axios.get<ApiInvoice>(
          `https://invoice-back-sqrj.onrender.com/invoice/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setInvoice(res.data);
      } catch (err: unknown) {
        console.error(err);

        if (axios.isAxiosError(err)) {
          if (err.response?.status === 401) {
            router.replace('/sign-in');
          }
        } else {
          // სხვა ტიპის error
          const msg = err instanceof Error ? err.message : 'Unknown error';
          console.error('Unexpected error while fetching invoice:', msg);
        }
      }
    };
    fetchInvoice();
  }, [id, router]);

  if (!invoice) {
    // თუ გინდა, აქ Loader/სქელეტონი ჩასვი
    return (
      <div className='w-full h-[91px] flex justify-end items-center px-[24px] gap-[8px]'>
        <InvoiceEdit />
        <InvoiceDelete />
        <button className='w-[131px] h-[48px] rounded-[24px] bg-[#9277FF] opacity-80 cursor-not-allowed' />
      </div>
    );
  }

  const uiStatus = toUI(invoice.status);

  return (
    <div className='w-full h-[91px] flex justify-between px-[24px] items-center gap-[8px]'>
      <InvoiceEdit />

      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsOverlay(true);
          setIsDelete(true);
        }}
      >
        <InvoiceDelete />
      </div>

      <InvoiceMarkPaid
        uiStatus={uiStatus}
        onStatusChange={(newStatus) => {
          setInvoice((prev) =>
            prev ? { ...prev, status: toApi(newStatus) } : prev
          );
        }}
      />
    </div>
  );
}
