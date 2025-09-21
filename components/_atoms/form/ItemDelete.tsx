'use client';

import Image from 'next/image';

export default function ItemDelete() {
  return (
    <button className='max-sm:w-[50px] flex items-center justify-center cursor-pointer'>
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
