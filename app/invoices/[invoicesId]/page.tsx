'use client';

import ConfrimDelete from '@/components/_atoms/invoice/ConfrimDelete';
import GoBack from '@/components/_atoms/invoice/GoBack';
import Overlay from '@/components/_atoms/invoices/Overlay';
import Invoice from '@/components/_organisms/invoice/Invoice';
import InvoiceHeader from '@/components/_organisms/invoice/InvoiceHeader';
import React from 'react';

export default function InvoicesId({
  params,
}: {
  params: Promise<{ invoicesId: string }>;
}) {
  const { invoicesId } = React.use(params);

  return (
    <div className='pt-[65px] pb-[54px] flex flex-col justify-center items-center w-full min-h-[100dvh] bg-[#F8F8FB]'>
      <GoBack />
      <InvoiceHeader />
      <Invoice />
      <Overlay />
      <ConfrimDelete />
    </div>
  );
}
