'use client';

export default function InvoicesTitle() {
  return (
    <div className='flex flex-col'>
      <h1 className='mb-[6px] font-league font-bold text-[36px] leading-[100%] tracking-[1.13px] text-[#0C0E16]'>
        Invoices
      </h1>
      <p className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#888EB0]'>
        There are 7 total invoices
      </p>
    </div>
  );
}
