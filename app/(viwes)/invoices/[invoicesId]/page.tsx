'use client';

import ConfrimDelete from '@/components/_atoms/invoice/ConfrimDelete';
import GoBack from '@/components/_atoms/invoice/GoBack';
import InvoiceBaner from '@/components/_atoms/invoice/InvoiceBaner';
import Overlay from '@/components/_atoms/invoices/Overlay';
import Invoice from '@/components/_organisms/invoice/Invoice';
import InvoiceHeader from '@/components/_organisms/invoice/InvoiceHeader';
import { useDarkMode } from '@/store/darkMode';
import React from 'react';

export default function InvoicesId({
  params,
}: {
  params: Promise<{ invoicesId: string }>;
}) {
  const { invoicesId } = React.use(params);

  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <>
      <div
        className={`pt-[65px] pb-[54px] sm:max-lg:px-[40px] max-sm:px-[24px] flex flex-col justify-center items-center w-full min-h-[100dvh]  ${
          isDarkMode ? 'bg-[#141625]' : ' bg-[#F8F8FB]'
        } transition-colors duration-1000 `}
      >
        <GoBack />
        <InvoiceHeader />
        <Invoice />
        <Overlay />
        <ConfrimDelete />
      </div>
      <div className='flex  sm:hidden'>
        <InvoiceBaner />
      </div>
    </>
  );
}
