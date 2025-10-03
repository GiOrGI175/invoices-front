'use client';

import InvoicesCreate from '@/components/_atoms/invoices/InvoicesCreate';
import InvoicesFilter from '@/components/_atoms/invoices/InvoicesFilter';
import InvoicesTitle from '@/components/_atoms/invoices/InvoicesTitle';
import { motion } from 'framer-motion';

export default function InvoicesHeader() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 1.2,
        stiffness: 120,
      }}
      className='lg:max-w-[730px] max-lg:max-w-[672px] w-full lg:mt-[77px] sm:max-lg:mt-[61px] max-sm:mt-[32px] flex justify-between items-center '
    >
      <InvoicesTitle />

      <div className='flex items-center gap-[3px]'>
        <InvoicesFilter />
        <InvoicesCreate />
      </div>
    </motion.div>
  );
}
