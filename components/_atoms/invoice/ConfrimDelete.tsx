'use client';

import { useParams } from 'next/navigation';
import InvoiceDelete from './InvoiceDelete';
import { useOpen } from '@/store/ui';
import { AnimatePresence, motion } from 'framer-motion';

export default function ConfrimDelete() {
  const params = useParams();
  const invoicesId = params?.invoicesId;

  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsDelete = useOpen((state) => state.setIsDelete);
  const isDelete = useOpen((state) => state.isDelete);

  return (
    <AnimatePresence>
      {isDelete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
          className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  items-center justify-center max-w-[480px] w-full p-[50px] bg-white shadow-2xl z-30'
        >
          <span className='mb-[12px] font-league font-bold text-[24px] leading-[32px] tracking-[-0.5px] text-[#0C0E16]'>
            Confirm Deletion
          </span>
          <p className='mb-[14px] font-league font-medium text-[13px] leading-[22px] tracking-[-0.1px] text-[#888EB0]'>
            Are you sure you want to delete invoice {invoicesId}? This action
            cannot be undone.
          </p>
          <div className='flex gap-[8px]'>
            <button
              onClick={() => {
                setIsOverlay(false);
                setIsDelete(false);
              }}
              className='w-[91px] h-[48px] rounded-[24px] bg-[#F9FAFE] cursor-pointer'
            >
              <span className='mb-[14px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]'>
                Cancel
              </span>
            </button>
            <InvoiceDelete />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
