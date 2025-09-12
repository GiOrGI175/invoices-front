'use client';

import { useOpen } from '@/store/ui';

export default function InvoiceDelete() {
  const setIsDelete = useOpen((state) => state.setIsDelete);
  const setIsOverlay = useOpen((state) => state.setIsOverlay);

  return (
    <button
      onClick={() => {
        setIsDelete(false);
        setIsOverlay(false);
      }}
      className='w-[89px]  h-[48px] rounded-[24px] bg-[#EC5757] hover:bg-[#FF9797] transition-colors duration-500 cursor-pointer'
    >
      <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.25px] text-[#FFFFFF]'>
        Delete
      </span>
    </button>
  );
}
