'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Calendar01 from './calendar-01';
import { useState } from 'react';
import Image from 'next/image';
import { useDarkMode } from '@/store/darkMode';

export default function OpenCalendar() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  const formatForInput = (date: Date) =>
    date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  const handleDateSelect = (date?: Date) => {
    if (!date) return;
    setSelectedDate(date);
    console.log(date);
    setOpen(false);
  };

  return (
    <div className='relative flex flex-col items-center max-sm:items-end sm:max-w-[240px] w-full'>
      <label
        htmlFor='payment-terms'
        className={`mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] flex self-start ${
          isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
        } transition-colors duration-1000`}
      >
        Invoice Date
      </label>

      <div className='relative w-full'>
        <input
          onClick={() => setOpen((pv) => !pv)}
          type='text'
          id='payment-terms'
          name='payment-terms'
          placeholder={formatForInput(new Date())}
          value={selectedDate ? formatForInput(selectedDate) : ''}
          readOnly
          className={`sm:max-w-[240px] w-full h-[48px] p-[20px] pr-[48px] border border-[#DFE3FA] rounded-[4px]
                     font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] 
                     focus:outline-none focus:border-[#7C5DFA] cursor-pointer transition-all duration-200 ${
                       isDarkMode
                         ? 'bg-[#1E2139] text-[#FFFFFF]'
                         : 'bg-transparent text-[#0C0E16]'
                     } transition-colors duration-1000`}
        />

        <Image
          src='assets/svg/calendar.svg'
          width={16}
          height={16}
          alt='calendar icon'
          className='absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none'
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
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
            className='absolute top-full mt-2 z-50'
          >
            <Calendar01
              selectedDate={selectedDate ?? new Date()}
              onDateSelect={handleDateSelect}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
