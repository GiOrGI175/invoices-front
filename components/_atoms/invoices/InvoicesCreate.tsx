'use client';

import { useOpen } from '@/store/ui';
import Image from 'next/image';

export default function InvoicesCreate() {
  const toggleisOpen = useOpen((state) => state.toggleisOpen);
  const toggleOverlay = useOpen((state) => state.toggleOverlay);

  return (
    <button
      onClick={() => {
        toggleisOpen();
        toggleOverlay();
      }}
      className='w-[150px] h-[48px] rounded-[48px] bg-[#7C5DFA] flex justify-between items-center hover:bg-[#9277FF] duration-500 cursor-pointer'
    >
      <div className='w-[32px] h-[32px] ml-[8px] rounded-full bg-white flex justify-center items-center'>
        <Image
          src='assets/svg/pluss.svg'
          width={10}
          height={10}
          alt='pluss inon'
        />
      </div>
      <span className='mr-[17px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-white'>
        New Invoice
      </span>
    </button>
  );
}
