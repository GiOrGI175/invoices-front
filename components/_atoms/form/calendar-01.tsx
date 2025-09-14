'use client';
import * as React from 'react';
import { Calendar } from '@/components/_ui/calendar';
import { useDarkMode } from '@/store/darkMode';

type Calendar01Props = {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
};

export default function Calendar01({
  selectedDate,
  onDateSelect,
}: Calendar01Props) {
  const [date, setDate] = React.useState<Date | undefined>(selectedDate);

  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  const handleDateSelect = (date?: Date) => {
    if (!date) return;
    setDate(date);
    onDateSelect(date);
  };

  const startOfToday = React.useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    // console.log(date.setHours(0, 0, 0, 0));
    return date;
  }, []);

  return (
    <Calendar
      mode='single'
      defaultMonth={date}
      selected={date}
      onSelect={handleDateSelect}
      disabled={{ before: startOfToday }}
      fromDate={startOfToday}
      className={`rounded-lg border shadow-sm max-w-[240px] w-full ${
        isDarkMode ? 'bg-[#1E2139] text-[#FFFFFF]' : 'bg-white text-[#0C0E16]'
      } transition-colors duration-1000`}
      // required={false}
    />
  );
}
