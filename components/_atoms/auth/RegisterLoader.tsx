'use client';

import { useOpen } from '@/store/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';

export default function RegisterLoader() {
  const isRegLoader = useOpen((state) => state.isRegLoader);

  return (
    <AnimatePresence>
      {isRegLoader && (
        <motion.div
          key='confirm-delete-wrapper'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
          className='fixed inset-0 flex items-center justify-center p-4 sm:p-6 z-40'
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
            className='relative max-w-[480px] w-full rounded-[8px] shadow-2xl
              p-6 sm:p-8 max-h-[90dvh] overflow-auto
              transition-colors duration-1000 bg-white
              '
          >
            <div className='flex flex-col justify-center items-center'>
              <p className='mb-6 font-league font-medium text-[13px] leading-[22px] tracking-[-0.1px]'>
                Please wait. Registration/login takes up to 1 minute.
              </p>
            </div>
            <div className='w-full flex justify-center'>
              <Loader2 className='w-7 h-7 animate-spin' />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
