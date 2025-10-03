'use client';

import DiscardInvoice from '@/components/_atoms/form/DiscardInvoice';
import InvoiceSave from '@/components/_atoms/form/InvoiceSave';
import SavaAsDraft from '@/components/_atoms/form/SavaAsDraft';
import SaveChanges from '@/components/_atoms/form/SaveChanges';
import { useParams, usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function Baner() {
  const params = useParams();
  const pathname = usePathname();

  const invoiceId = useMemo(() => {
    if (params?.id) {
      return params.id as string;
    }

    const match = pathname?.match(/\/invoices\/([^\/]+)/);
    return match?.[1];
  }, [params, pathname]);

  return (
    <div
      className='sm:absolute sm:bottom-0 sm:right-0 max-w-[719px] w-full h-[110px] 
  sm:rounded-[20px] py-[31px] pr-[56px] flex justify-end z-50 
  shadow-[0_-10px_20px_rgba(0,0,0,0.25)]'
    >
      {' '}
      <div className='max-w-[504px] w-full flex justify-between'>
        <div>
          <DiscardInvoice />
        </div>
        {invoiceId ? (
          <SaveChanges formId='invoice-form' />
        ) : (
          <div className='flex gap-[8px]'>
            <SavaAsDraft formId='invoice-form' />
            <InvoiceSave formId='invoice-form' />
          </div>
        )}
      </div>
    </div>
  );
}
