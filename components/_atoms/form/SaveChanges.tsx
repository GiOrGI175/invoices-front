'use client';

import { useOpen } from '@/store/ui';

type Props = {
  formId: string;
};

export default function SaveChanges({ formId }: Props) {
  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsOpen = useOpen((state) => state.setIsOpen);

  return (
    <button
      onClick={() => {
        setIsOverlay(false);
        setIsOpen(false);
      }}
      type='submit'
      data-action='send'
      form={formId}
      className='w-[128px] h-[48px] rounded-[24px] bg-[#7C5DFA] hover:bg-[#9277FF] transition-colors duration-500 cursor-pointer'
    >
      <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#FFFFFF]'>
        Save Changes
      </span>
    </button>
  );
}
