'use client';

import Image from 'next/image';

export default function InvoicesEmpty() {
  return (
    <div className='w-full h-full pt-[40px] flex justify-center items-center '>
      <div>
        <Image
          src='/assets/img/no_invoices.webp'
          width={240}
          height={200}
          alt='no invoices img indicator'
        />
        <div className='flex flex-col  items-center'>
          <h3 className='mt-[66px] font-league font-bold text-[24px] leading-[100%] tracking-[-0.75px] text-[#0C0E16]'>
            There is nothing here
          </h3>
          <p className='max-w-[193px] w-full mt-[23px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#0C0E16] text-center'>
            Create an invoice by clicking the New Invoice button and get started
          </p>
        </div>
      </div>
    </div>
  );
}
