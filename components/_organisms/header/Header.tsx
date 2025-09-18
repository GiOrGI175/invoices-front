'use client';

import Image from 'next/image';
import InvoiceCreate from '../form/InvoiceCreate';
import DarkMode from '@/components/_atoms/header/DarkMode';
import UserBtn from '@/components/_atoms/header/UserBtn';
import { useDarkMode } from '@/store/darkMode';
import { motion } from 'framer-motion';

export default function Header() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div>
      <motion.header
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          duration: 1.2,
          stiffness: 120,
        }}
        className={`lg:fixed max-lg:relative w-[103px] h-[100dvh] max-lg:w-[100dvw] sm:max-lg:h-[80px] max-sm:h-[72px] flex flex-col max-lg:flex-row justify-between items-center lg:rounded-br-[20px] lg:rounded-tr-[20px] ${
          isDarkMode ? 'bg-[#1E2139]' : 'bg-[#373B53]'
        }  transition-colors duration-1000  z-50`}
      >
        <div className='hidden relative w-[103px] h-[103px] lg:flex justify-center items-center bg-[#7C5DFA] rounded-br-[20px] rounded-tr-[20px] overflow-hidden '>
          <Image
            src='/assets/svg/Logo.svg'
            width={40}
            height={40}
            alt='Logo'
            className='relative z-20'
          />
          <div className='absolute w-[103px] h-[103px] top-[50%] rounded-tl-[20px] bg-[#9277FF] z-10' />
        </div>

        <div className='relative w-[80px] h-[80px] sm:max-lg:flex hidden justify-center items-center bg-[#7C5DFA] rounded-br-[20px] rounded-tr-[20px] overflow-hidden '>
          <Image
            src='/assets/svg/Logo.svg'
            width={30}
            height={30}
            alt='Logo'
            className='relative z-20'
          />
          <div className='absolute w-[80px] h-[80px] top-[50%] rounded-tl-[20px] bg-[#9277FF] z-10' />
        </div>

        <div className='relative w-[72px] h-[72px] flex sm:hidden justify-center items-center bg-[#7C5DFA] rounded-br-[20px] rounded-tr-[20px] overflow-hidden '>
          <Image
            src='/assets/svg/Logo.svg'
            width={28}
            height={28}
            alt='Logo'
            className='relative z-20'
          />
          <div className='absolute w-[72px] h-[72px] top-[50%] rounded-tl-[20px] bg-[#9277FF] z-10' />
        </div>

        <div className='flex lg:flex-col max-lg:flex-row justify-between items-center'>
          <DarkMode />
          <UserBtn />
        </div>
      </motion.header>
      <InvoiceCreate />
    </div>
  );
}
