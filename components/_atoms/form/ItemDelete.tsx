'use client';

import Image from 'next/image';

export default function ItemDelete() {
  return (
    <button className='flex items-center justify-center cursor-pointer'>
      <Image
        src='/assets/svg/trash_delete.svg'
        width={12}
        height={16}
        alt='delete icon'
        className='mb-[5px]'
      />
    </button>
  );
}
