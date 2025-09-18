'use client';

import { useParams } from 'next/navigation';
import InvoiceDelete from './InvoiceDelete';
import { useOpen } from '@/store/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { useDarkMode } from '@/store/darkMode';

export default function ConfrimDelete() {
  const params = useParams();
  const invoicesId = params?.invoicesId;

  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsDelete = useOpen((state) => state.setIsDelete);
  const isDelete = useOpen((state) => state.isDelete);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <AnimatePresence>
      {isDelete && (
        <motion.div
          key='confirm-delete-wrapper'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
          className='fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6'
          role='dialog'
          aria-modal='true'
          aria-labelledby='confirm-delete-title'
        >
          <motion.div
            key='confirm-delete-card'
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
            className={`relative max-w-[480px] w-full rounded-[8px] shadow-2xl
              p-6 sm:p-8 max-h-[90dvh] overflow-auto
              transition-colors duration-1000
              ${isDarkMode ? 'bg-[#1E2139]' : 'bg-white'}`}
          >
            <span
              id='confirm-delete-title'
              className={`pb-3 block font-league font-bold text-[22px] sm:text-[24px] leading-[28px] sm:leading-[32px] tracking-[-0.5px]
                ${
                  isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                } transition-colors duration-1000`}
            >
              Confirm Deletion
            </span>

            <p
              className={`mb-4 font-league font-medium text-[13px] leading-[22px] tracking-[-0.1px]
                ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                } transition-colors duration-1000`}
            >
              Are you sure you want to delete invoice {invoicesId}? This action
              cannot be undone.
            </p>

            <div className='flex justify-end gap-2'>
              <button
                onClick={() => {
                  setIsOverlay(false);
                  setIsDelete(false);
                }}
                className={`h-[48px] rounded-[24px] px-5 cursor-pointer
                  ${
                    isDarkMode ? 'bg-[#252945]' : 'bg-[#F9FAFE]'
                  } transition-colors duration-1000`}
              >
                <span
                  className={`font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px]
                    ${
                      isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                    } transition-colors duration-1000`}
                >
                  Cancel
                </span>
              </button>

              <InvoiceDelete />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
