'use client';

import Image from 'next/image';
import InvoiceCreate from '../form/InvoiceCreate';
import DarkMode from '@/components/_atoms/header/DarkMode';
import UserBtn from '@/components/_atoms/header/UserBtn';
import { useDarkMode } from '@/store/darkMode';

export default function Header() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div>
      <header
        className={`fixed w-[103px] h-[100dvh] flex flex-col justify-between items-center rounded-br-[20px] rounded-tr-[20px] ${
          isDarkMode ? 'bg-[#1E2139]' : 'bg-[#373B53]'
        }  transition-colors duration-1000  z-50`}
      >
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
          <DarkMode />
          <UserBtn />
        </div>
      </header>
      <InvoiceCreate />
    </div>
  );
}
