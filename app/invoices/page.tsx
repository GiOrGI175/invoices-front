'use client';

import Overlay from '@/components/_atoms/invoices/Overlay';
import Invoices from '@/components/_organisms/invoices/Invoices';
import InvoicesHeader from '@/components/_organisms/invoices/InvoicesHeader';

export default function invoices() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <InvoicesHeader />

      <Invoices />

      <Overlay />
    </div>
  );
}
