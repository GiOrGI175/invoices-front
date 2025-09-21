'use client';

import { useDarkMode } from '@/store/darkMode';

export default function InvoicesTitle() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div className='flex flex-col'>
      <h1
        className={`mb-[6px] font-league font-bold lg:text-[36px] max-sm:text-[24px] leading-[100%] lg:tracking-[1.13px]  ${
          isDarkMode ? 'text-white' : 'text-[#0C0E16]'
        } transition-colors duration-1000`}
      >
        Invoices
      </h1>
      <p
        className={`hidden sm:block font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]  ${
          isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
        } transition-colors duration-1000  `}
      >
        There are 7 total invoices
      </p>

      <p
        className={`hidden max-sm:block font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]  ${
          isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
        } transition-colors duration-1000  `}
      >
        7 invoices
      </p>
    </div>
  );
}
