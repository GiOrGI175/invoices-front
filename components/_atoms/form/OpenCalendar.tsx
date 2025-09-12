'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Calendar01 from './calendar-01';
import { useState } from 'react';
import Image from 'next/image';

export default function OpenCalendar() {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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
    <div className='relative flex flex-col items-center max-w-[240px] w-full'>
      <label
        htmlFor='payment-terms'
        className='mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] flex self-start'
      >
        Invoice Date
      </label>

      <input
        onClick={() => setOpen((pv) => !pv)}
        type='text'
        id='payment-terms'
        name='payment-terms'
        placeholder={formatForInput(new Date())}
        value={selectedDate ? formatForInput(selectedDate) : ''}
        readOnly
        className='max-w-[240px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px]
                   font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
      />

      <Image
        src='assets/svg/calendar.svg'
        width={16}
        height={16}
        alt='calendar icon'
        className='absolute right-[16px] top-[57%]'
      />

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.98,
              transform: 'translateY(84px)',
            }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
            className='absolute'
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
