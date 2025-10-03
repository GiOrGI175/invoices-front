'use client';

import { useDarkMode } from '@/store/darkMode';
import { useInvoiceFilter, type StatusL } from '@/store/filter';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const options: { opt: StatusL }[] = [
  { opt: 'draft' },
  { opt: 'pending' },
  { opt: 'paid' },
];

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export default function InvoicesFilter() {
  const [showPopUp, setShowPopUp] = useState(false);
  const isDarkMode = useDarkMode((s) => s.isDarkMode);

  const selected = useInvoiceFilter((s) => s.selected);
  const toggle = useInvoiceFilter((s) => s.toggle);

  return (
    <div className='relative z-20 w-[71px] sm:w-[192px] flex justify-center'>
      <button
        onClick={() => setShowPopUp((pv) => !pv)}
        className='flex justify-center items-center cursor-pointer'
      >
        <span
          className={`hidden sm:block font-league font-bold text-[15px] ${
            isDarkMode ? 'text-white' : 'text-[#0C0E16]'
          }`}
        >
          Filter by status
        </span>
        <span
          className={`block sm:hidden font-league font-bold text-[15px] ${
            isDarkMode ? 'text-white' : 'text-[#0C0E16]'
          }`}
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
            className={`absolute w-[192px] p-[24px] top-[38px] rounded-[8px] ${
              isDarkMode ? 'bg-[#252945]' : 'bg-white'
            } shadow-2xl`}
          >
            <ul>
              {options.map(({ opt }) => {
                const isChecked = selected.includes(opt);
                return (
                  <li key={opt} className='flex items-center mb-[15px]'>
                    <input
                      type='checkbox'
                      checked={isChecked}
                      onChange={() => toggle(opt)}
                      className='w-[16px] h-[16px] accent-[#7C5DFA]'
                    />
                    <span
                      className={`ml-[13px] font-league font-bold text-[15px] ${
                        isDarkMode ? 'text-white' : 'text-[#1E2139]'
                      }`}
                    >
                      {cap(opt)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
