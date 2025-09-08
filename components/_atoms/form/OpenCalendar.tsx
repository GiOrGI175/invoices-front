'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Calendar01 from './calendar-01';
import { useState } from 'react';

export default function OpenCalendar() {
  const [Open, setOpen] = useState(false);

  return (
    <div className='relative flex flex-col items-center max-w-[240px] w-full'>
      <label
        htmlFor='Payment Terms'
        className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
      >
        Payment Terms
      </label>
      <input
        onClick={() => setOpen((pv) => !pv)}
        type='text'
        id='Payment Terms'
        name='Payment Terms'
        placeholder='Enter Invoice Date'
        className='max-w-[240px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
                font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]'
      />
      <AnimatePresence>
        {Open && (
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
            <Calendar01 />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
