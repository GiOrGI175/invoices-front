'use client';

import CreateForm from '@/components/_molecules/invoices/CreateForm';

export default function InvoiceCreate() {
  return (
    <div className='max-w-[719px] w-full h-[100dvh] rounded-[20px] bg-[#FFFFFF] pl-[159px] pt-[59px] border fixed z-20'>
      <h2 className='font-league font-bold text-[24px] leading-[32px] tracking-[-0.5px] text-[#0C0E16]'>
        New Invoice
      </h2>
      <CreateForm />
    </div>
  );
}
