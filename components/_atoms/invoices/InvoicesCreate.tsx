'use client';

import { useOpen } from '@/store/ui';
import Image from 'next/image';

export default function InvoicesCreate() {
  const setIsOpen = useOpen((state) => state.setIsOpen);
  const setIsOverlay = useOpen((state) => state.setIsOverlay);

  return (
    <button
      onClick={() => {
        setIsOpen(true);
        setIsOverlay(true);
      }}
      className='w-[90px] sm:w-[150px] h-[44px] sm:h-[48px] rounded-[48px] bg-[#7C5DFA] flex justify-between items-center hover:bg-[#9277FF] duration-500 cursor-pointer'
    >
      <div className='w-[32px] h-[32px] ml-[8px] rounded-full bg-white flex justify-center items-center'>
        <Image
          src='assets/svg/pluss.svg'
          width={10}
          height={10}
          alt='pluss inon'
        />
      </div>
      <span className='hidden sm:block mr-[17px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-white'>
        New Invoice
      </span>

      <span className='block sm:hidden mr-[17px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-white'>
        New
      </span>
    </button>
  );
}
