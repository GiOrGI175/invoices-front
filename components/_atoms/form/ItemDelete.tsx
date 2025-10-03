'use client';

import Image from 'next/image';

type ItemDeleteProps = {
  onClick?: () => void;
};

export default function ItemDelete({ onClick }: ItemDeleteProps) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='max-sm:w-[50px] flex items-center justify-center cursor-pointer'
      aria-label='Remove item'
      title='Remove item'
    >
      <Image
        src='/assets/svg/trash_delete.svg'
        width={12}
        height={16}
        alt='delete icon'
        className='sm:mb-[5px] max-sm:mt-[25px]'
      />
    </button>
  );
}
