'use client';

import InvoicesCreate from '@/components/_atoms/invoices/InvoicesCreate';
import InvoicesFilter from '@/components/_atoms/invoices/InvoicesFilter';
import InvoicesTitle from '@/components/_atoms/invoices/InvoicesTitle';

export default function InvoicesHeader() {
  return (
    <div className='max-w-[730px] w-full mt-[77px] flex justify-between items-center'>
      <InvoicesTitle />

      <div className='flex items-center gap-[3px]'>
        <InvoicesFilter />
        <InvoicesCreate />
      </div>
    </div>
  );
}
