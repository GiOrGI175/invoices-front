'use client';

import GoBack from '@/components/_atoms/invoice/GoBack';
import InvoiceHeader from '@/components/_organisms/invoice/InvoiceHeader';
import React from 'react';

export default function InvoicesId({
  params,
}: {
  params: Promise<{ invoicesId: string }>;
}) {
  const { invoicesId } = React.use(params);

  return (
    <div className='pt-[65px] pb-[54px] flex flex-col justify-center items-center w-full h-full bg-[#F8F8FB]'>
      <GoBack />
      <InvoiceHeader />
    </div>
  );
}
