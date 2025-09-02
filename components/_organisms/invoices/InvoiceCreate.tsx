'use client';

import CreateForm from '@/components/_molecules/invoices/CreateForm';
import { useOpen } from '@/store/ui';
import { AnimatePresence, motion } from 'framer-motion';

export default function InvoiceCreate() {
  const isOpen = useOpen((state) => state.isOpen);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -8, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -8, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
          className='max-w-[719px] w-full h-[100dvh] rounded-[20px] bg-[#FFFFFF] pl-[159px] pt-[59px]  fixed z-30 '
        >
          <div className='max-w-[520px] w-full h-full overflow-y-scroll scrollbar-custom'>
            <h2 className='font-league font-bold text-[24px] leading-[32px] tracking-[-0.5px] text-[#0C0E16]'>
              New Invoice
            </h2>
            <CreateForm />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
