'use client';

import Baner from '@/components/_molecules/form/Baner';
import CreateForm from '@/components/_organisms/form/CreateForm';
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
          className='fixed max-w-[719px] w-full h-[100dvh] rounded-[20px] pb-[170px] bg-[#FFFFFF] z-30 '
        >
          <div className=' max-w-[520px] w-full h-full ml-[159px] mt-[59px] mb-[70px]  overflow-y-scroll scrollbar-custom'>
            <h2 className='font-league font-bold text-[24px] leading-[32px] tracking-[-0.5px] text-[#0C0E16]'>
              New Invoice
            </h2>
            <CreateForm />
          </div>
          <Baner />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
