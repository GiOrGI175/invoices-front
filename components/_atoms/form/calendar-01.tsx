'use client';
import * as React from 'react';
import { Calendar } from '@/components/_ui/calendar';

export default function Calendar01({ selectedDate, onDateSelect }) {
  const [date, setDate] = React.useState(selectedDate || new Date());

  // როცა რიცხვს მონიშნავენ
  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    if (onDateSelect) {
      onDateSelect(selectedDate); // parent კომპონენტისთვის უკუძახილი
    }
  };

  return (
    <Calendar
      mode='single'
      defaultMonth={date}
      selected={date}
      onSelect={handleDateSelect}
      className='rounded-lg border shadow-sm'
    />
  );
}
