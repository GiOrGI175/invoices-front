'use client';
import { AnimatePresence, motion } from 'framer-motion';
import Calendar01 from './calendar-01';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { useDarkMode } from '@/store/darkMode';

type OpenCalendarProps = {
  value?: string;
  onChange: (isoString: string) => void;
  error?: string;
  tone?: {
    inputClass?: string;
    labelClass?: string;
  };
  label?: string;
  id?: string;
};

export default function OpenCalendar({
  value,
  onChange,
  error,
  tone,
  label = 'Invoice Date',
  id = 'createdAt',
}: OpenCalendarProps) {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  useEffect(() => {
    if (!value) {
      setSelectedDate(null);
      return;
    }
    const d = new Date(value);
    if (!Number.isNaN(d.getTime())) setSelectedDate(d);
  }, [value]);

  const formatForInput = (date: Date) =>
    date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });

  const baseInput =
    'sm:max-w-[240px] w-full h-[48px] p-[20px] pr-[48px] border rounded-[4px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] cursor-pointer transition-all duration-200';
  const toneInput = useMemo(
    () =>
      tone?.inputClass ??
      (isDarkMode
        ? 'bg-[#1E2139] text-[#FFFFFF] border-[#252945]'
        : 'bg-transparent text-[#0C0E16] border-[#DFE3FA]'),
    [isDarkMode, tone?.inputClass]
  );
  const toneLabel =
    tone?.labelClass ?? (isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]');
  const errorBorder = error ? 'border-[#EC5757]' : '';
  const describedBy = error ? `${id}-error` : undefined;

  const handleDateSelect = (date?: Date) => {
    if (!date) return;
    setSelectedDate(date);
    onChange(date.toISOString());
    setOpen(false);
  };

  return (
    <div className='relative flex flex-col items-center max-sm:items-end sm:max-w-[240px] w-full'>
      <label
        htmlFor={id}
        className={`mb-[9px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] self-start ${toneLabel} transition-colors duration-1000`}
      >
        {label}
      </label>

      <div className='relative w-full'>
        <input
          onClick={() => setOpen((pv) => !pv)}
          type='text'
          id={id}
          name={id}
          placeholder={formatForInput(new Date())}
          value={selectedDate ? formatForInput(selectedDate) : ''}
          readOnly
          aria-invalid={!!error}
          aria-describedby={describedBy}
          className={`${baseInput} ${toneInput} ${errorBorder}`}
        />

        <Image
          src='assets/svg/calendar.svg'
          width={16}
          height={16}
          alt='calendar icon'
          className='absolute right-[16px] top-1/2 -translate-y-1/2 pointer-events-none'
        />
      </div>

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
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.4, 0.0, 0.2, 1] }}
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
