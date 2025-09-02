'use client';

import Image from 'next/image';
import InvoiceCreate from '../invoices/InvoiceCreate';

export default function Header() {
  return (
    <div>
      <header className='fixed w-[103px] h-[100dvh] flex flex-col justify-between items-center rounded-br-[20px] rounded-tr-[20px] bg-[#373B53] z-30'>
        <div className='relative w-[103px] h-[103px] flex justify-center items-center bg-[#7C5DFA] rounded-br-[20px] rounded-tr-[20px] overflow-hidden '>
          <Image
            src='/assets/svg/Logo.svg'
            width={40}
            height={40}
            alt='Logo'
            className='relative z-20'
          />
          <div className='absolute w-[103px] h-[103px] top-[50%] rounded-tl-[20px] bg-[#9277FF] z-10' />
        </div>

        <div className='flex flex-col justify-between items-center'>
          <button className='pb-[32px] w-[103px] flex justify-center border-b-[1px] border-[#494E6E]  cursor-pointer'>
            <Image
              src='/assets/svg/moon.svg'
              width={20}
              height={20}
              alt='dark Mode'
            />
          </button>
          <button className='my-[24px] cursor-pointer'>
            <Image
              src='/assets/svg/user_light.svg'
              width={40}
              height={40}
              alt='user'
            />
          </button>
        </div>
      </header>
      <InvoiceCreate />
    </div>
  );
}
