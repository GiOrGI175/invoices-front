'use client';

import { useDarkMode } from '@/store/darkMode';

export default function InvoiceEdit() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <button
      className={`w-[73px]  h-[48px]  rounded-[24px] cursor-pointer  transition-colors duration-500 ${
        isDarkMode
          ? 'bg-[#252945] hover:bg-[#141625]'
          : 'bg-transparent hover:bg-[#DFE3FA] '
      }`}
    >
      <span
        className={`font-league font-medium text-[15px] leading-[15px] tracking-[-0.25px] ${
          isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
        }  transition-colors duration-1000 `}
      >
        Edit
      </span>
    </button>
  );
}
