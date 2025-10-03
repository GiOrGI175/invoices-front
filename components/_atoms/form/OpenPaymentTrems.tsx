'use client';
import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from '@/store/darkMode';
import Image from 'next/image';

type Option = { label: string; value: number };

type CustomDropdownProps = {
  value?: number;
  onChange: (val: number) => void;
  error?: string;
  id?: string;
  label?: string;
  options?: Option[];
};

export default function OpenPaymentTrems({
  value,
  onChange,
  error,
  id = 'paymentTerms',
  label = 'Payment Terms',
  options = [
    { label: 'Net 1 Day', value: 1 },
    { label: 'Net 7 Days', value: 7 },
    { label: 'Net 14 Days', value: 14 },
    { label: 'Net 30 Days', value: 30 },
  ],
}: CustomDropdownProps) {
  const [open, setOpen] = useState(false);
  const isDarkMode = useDarkMode((s) => s.isDarkMode);

  const currentLabel = useMemo(
    () => options.find((o) => o.value === value)?.label ?? '',
    [options, value]
  );

  const handlePick = useCallback(
    (val: number) => {
      onChange(val);
      setOpen(false);
    },
    [onChange]
  );

  const baseInput =
    'relative sm:max-w-[240px] w-full h-[48px] p-[20px] pr-[48px] border rounded-[4px] text-left font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] cursor-pointer transition-all duration-200';
  const tone = isDarkMode
    ? 'bg-[#1E2139] text-white border-[#252945]'
    : 'bg-transparent text-[#0C0E16] border-[#DFE3FA]';
  const labelTone = isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]';
  const errorBorder = error ? 'border-[#EC5757]' : '';
  const describedBy = error ? `${id}-error` : undefined;

  return (
    <div className='relative flex flex-col items-center sm:max-w-[240px] w-full'>
      <label
        htmlFor={id}
        className={`mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] self-start ${labelTone}`}
      >
        {label}
      </label>

      <button
        id={id}
        type='button'
        aria-haspopup='listbox'
        aria-expanded={open}
        aria-describedby={describedBy}
        onClick={() => setOpen((p) => !p)}
        className={`${baseInput} ${tone} ${errorBorder}`}
      >
        {currentLabel || <span className='text-[#777F98]'>Select option</span>}

        <motion.div
          initial={false}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.18 }}
          className='absolute top-[21px] right-[15px]'
        >
          <Image
            src='/assets/svg/arrow_down.svg'
            width={8}
            height={4}
            alt='arrow down'
          />
        </motion.div>
      </button>

      {error && (
        <p
          id={`${id}-error`}
          className='mt-1 text-xs text-[#EC5757] self-start'
        >
          {error}
        </p>
      )}

      <AnimatePresence>
        {open && (
          <motion.ul
            role='listbox'
            aria-labelledby={id}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
            className={`absolute top-full mt-2 w-full rounded-lg border ${
              isDarkMode ? 'border-black' : 'border-[#DFE3FA]'
            } shadow-sm z-10 overflow-hidden ${
              isDarkMode ? 'bg-[#1E2139]' : 'bg-white'
            }`}
          >
            {options.map((opt, index) => (
              <motion.li
                role='option'
                aria-selected={opt.value === value}
                key={opt.value}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.05, duration: 0.2 },
                }}
                onClick={() => handlePick(opt.value)}
                className={`group px-[24px] py-[15px] cursor-pointer transition-all duration-200 ${
                  index !== options.length - 1
                    ? isDarkMode
                      ? 'border-b border-b-black'
                      : 'border-b border-b-[#DFE3FA]'
                    : ''
                }`}
              >
                <span
                  className={`font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] group-hover:text-[#7C5DFA] ${
                    isDarkMode ? 'text-[#DFE3FA]' : 'text-[#0C0E16]'
                  }`}
                >
                  {opt.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
