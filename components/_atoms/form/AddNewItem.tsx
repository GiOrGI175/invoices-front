'use client';

import { useDarkMode } from '@/store/darkMode';

export default function AddNewItem() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div className='w-full h-[48px] mt-[18px] mb-[48px] flex justify-center items-center'>
      <button
        className={`max-w-[350px] w-full h-full rounded-[24px] cursor-pointer bg-transparent ${
          isDarkMode ? ' hover:bg-[#1E2139] ' : ' hover:bg-[#DFE3FA] '
        } transition-colors duration-500`}
      >
        <span
          className={`font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px]  ${
            isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
          } transition-colors duration-1000`}
        >
          + Add New Item
        </span>
      </button>
    </div>
  );
}
