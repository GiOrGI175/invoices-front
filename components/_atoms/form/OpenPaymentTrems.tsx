'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CustomDropdown({ name = 'paymentTerms' }) {
  const [open, setOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState('');
  const options = ['Net 1 Day', 'Net 7 Day', 'Net 14 Day', 'Net 30 Day'];

  return (
    <div className='relative flex flex-col items-center max-w-[240px] w-full'>
      {/* Hidden input რომ React Hook Form-მა იცოდეს ამ ველის შესახებ */}
      <input type='hidden' value={currentValue} />

      <label className='mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] flex self-start'>
        Payment Terms
      </label>

      <button
        type='button'
        onClick={() => setOpen(!open)}
        className='max-w-[240px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] text-left
                 font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]
                 focus:outline-none focus:border-[#7C5DFA] transition-all duration-200'
      >
        {currentValue || <span className='text-[#777F98]'>Select option</span>}
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -10,
              scale: 0.95,
            }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className='absolute top-full mt-2 w-full bg-white  rounded-lg border shadow-sm z-10 overflow-hidden'
          >
            {options.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: index * 0.05,
                    duration: 0.2,
                  },
                }}
                onClick={() => {
                  setOpen(false);
                  setCurrentValue(item);
                }}
                className={`group px-[24px] py-[15px] cursor-pointer transition-all duration-200
                  ${
                    index !== options.length - 1
                      ? 'border-b-[1px] border-b-[#DFE3FA]'
                      : ''
                  }
                  hover:bg-[#F9FAFE]`}
              >
                <span className='font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] group-hover:text-[#7C5DFA] transition-colors duration-200'>
                  {item}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
