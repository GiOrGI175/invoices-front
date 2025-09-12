'use client';

import { useOpen } from '@/store/ui';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function Overlay() {
  const isOverlay = useOpen((state) => state.isOverlay);
  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsOpen = useOpen((state) => state.setIsOpen);
  const setIsDelete = useOpen((state) => state.setIsDelete);

  useEffect(() => {
    if (isOverlay) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isOverlay]);

  return (
    <AnimatePresence>
      {isOverlay && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
          onClick={() => {
            setIsOverlay(false);
            setIsOpen(false);
            setIsDelete(false);
          }}
          className='fixed top-0 left-0 w-screen h-screen bg-black/50  z-20 block'
        />
      )}
    </AnimatePresence>
  );
}
