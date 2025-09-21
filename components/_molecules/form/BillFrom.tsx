'use client';

import { useDarkMode } from '@/store/darkMode';

export default function BillFrom() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div className='sm:max-w-[504px] w-full flex flex-col'>
      <span className='mb-[24px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7C5DFA]'>
        Bill From
      </span>
      <div className='flex flex-col'>
        <label
          htmlFor='streetAddress'
          className={`mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]  ${
            isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
          } transition-colors duration-1000`}
        >
          Street Address
        </label>
        <input
          type='text'
          id='streetAddress'
          name='streetAddress'
          placeholder='Enter street address'
          className={`w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] ${
              isDarkMode
                ? 'bg-[#1E2139] text-[#FFFFFF]'
                : 'bg-transparent text-[#0C0E16]'
            } transition-colors duration-1000`}
        />
      </div>
      <div className='flex max-sm:flex-col mt-[25px] gap-[24px] h-fit'>
        <div className='flex  gap-[24px]'>
          <div className='max-sm:w-full flex flex-col'>
            <label
              htmlFor='city'
              className={`mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              } transition-colors duration-1000`}
            >
              City
            </label>
            <input
              type='text'
              id='city'
              name='city'
              placeholder='Enter city'
              className={`sm:max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px]  focus:outline-none focus:border-[#7C5DFA] ${
              isDarkMode
                ? 'bg-[#1E2139] text-[#FFFFFF]'
                : 'bg-transparent text-[#0C0E16]'
            } transition-colors duration-1000`}
            />
          </div>

          <div className='max-sm:w-full flex flex-col'>
            <label
              htmlFor='post code'
              className={`mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              } transition-colors duration-1000`}
            >
              Post Code
            </label>
            <input
              type='text'
              id='post code'
              name='post code'
              placeholder='Enter Post Code'
              className={`sm:max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px]  focus:outline-none focus:border-[#7C5DFA] ${
              isDarkMode
                ? 'bg-[#1E2139] text-[#FFFFFF]'
                : 'bg-transparent text-[#0C0E16]'
            } transition-colors duration-1000`}
            />
          </div>
        </div>

        <div className='max-sm:w-full flex flex-col'>
          <label
            htmlFor='country'
            className={`mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            Country
          </label>
          <input
            type='text'
            id='country'
            name='country'
            placeholder='Enter country'
            className={`sm:max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px]  focus:outline-none focus:border-[#7C5DFA] ${
              isDarkMode
                ? 'bg-[#1E2139] text-[#FFFFFF]'
                : 'bg-transparent text-[#0C0E16]'
            } transition-colors duration-1000`}
          />
        </div>
      </div>
    </div>
  );
}
