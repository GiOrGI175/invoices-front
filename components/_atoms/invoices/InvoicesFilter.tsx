'use client';

import { useDarkMode } from '@/store/darkMode';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const options = [
  {
    opt: 'Draft',
  },
  {
    opt: 'Pending',
  },
  {
    opt: 'Paid',
  },
];

export default function InvoicesFilter() {
  const [showPopUp, setShowPopUp] = useState(false);

  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div className='relative z-20 w-[71px] sm:w-[192px] flex justify-center'>
      <button
        onClick={() => setShowPopUp((pv) => !pv)}
        className='flex justify-center items-center cursor-pointer'
      >
        <span
          className={`hidden sm:block font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] ${
            isDarkMode ? 'text-white' : 'text-[#0C0E16]'
          } `}
        >
          Filter by status
        </span>

        <span
          className={`block sm:hidden font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] ${
            isDarkMode ? 'text-white' : 'text-[#0C0E16]'
          } `}
        >
          Filter
        </span>
        <motion.div
          initial={false}
          animate={{ rotate: showPopUp ? 180 : 0 }}
          transition={{ duration: 0.18 }}
          className='ml-[14px]'
        >
          <Image src='/assets/svg/arrow.svg' width={8} height={4} alt='arrow' />
        </motion.div>
      </button>

      <AnimatePresence>
        {showPopUp && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
            className={`absolute w-[192px] h-[128px] p-[24px] top-[38px] rounded-[8px] ${
              isDarkMode ? 'bg-[#252945]' : 'bg-white'
            } transition-colors duration-1000  shadow-2xl `}
          >
            <ul>
              {options.map((option) => (
                <li key={option.opt} className='flex mb-[15px] '>
                  <input
                    type='checkbox'
                    className='w-[16px] h-[16px] accent-[#7C5DFA] '
                  />
                  <span
                    className={`ml-[13px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px]  ${
                      isDarkMode ? 'text-white' : 'text-[#1E2139]'
                    } transition-colors duration-1000 `}
                  >
                    {option.opt}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
