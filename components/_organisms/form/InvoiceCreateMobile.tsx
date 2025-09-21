'use client';

import GoBack from '@/components/_atoms/invoice/GoBack';
import Baner from '@/components/_molecules/form/Baner';
import CreateForm from '@/components/_organisms/form/CreateForm';
import { useDarkMode } from '@/store/darkMode';
import { useOpen } from '@/store/ui';
import { AnimatePresence, motion } from 'framer-motion';

export default function InvoiceCreateMobile() {
  const isOpen = useOpen((state) => state.isOpen);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  const setIsOpen = useOpen((state) => state.setIsOpen);
  const setIsOverlay = useOpen((state) => state.setIsOverlay);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={`flex flex-col sm:hidden fixed w-full h-[calc(100dvh-72px)] sm:pb-[170px] max-sm:pr-[8px]   ${
            isDarkMode ? 'bg-[#141625]' : 'bg-white'
          } transition-colors duration-1000 z-30 `}
        >
          <div className='w-full h-full lg:ml-[159px] sm:mt-[59px] max-sm:mt-[26px] sm:mb-[70px]  pl-[24px] pr-[16px] flex flex-col items-center  overflow-y-scroll scrollbar-custom '>
            <div
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                setIsOverlay(false);
              }}
              className='w-full flex justify-start'
            >
              <GoBack />
            </div>
            <h2
              className={`sm:mb-[46px] mb-[22px] font-league font-bold text-[24px] leading-[32px] tracking-[-0.5px]  ${
                isDarkMode ? 'text-white' : 'text-[#0C0E16]'
              } transition-colors duration-1000`}
            >
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
