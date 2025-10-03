'use client';

import Baner from '@/components/_molecules/form/Baner';
import CreateForm from '@/components/_organisms/form/CreateForm';
import { useDarkMode } from '@/store/darkMode';
import { useOpen } from '@/store/ui';
import { AnimatePresence, motion } from 'framer-motion';
import { h2 } from 'motion/react-m';
import { useParams, usePathname } from 'next/navigation';
import { useMemo } from 'react';

export default function InvoiceCreate() {
  const isOpen = useOpen((state) => state.isOpen);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  const params = useParams();
  const pathname = usePathname();

  const invoiceId = useMemo(() => {
    if (params?.id) {
      return params.id as string;
    }

    const match = pathname?.match(/\/invoices\/([^\/]+)/);
    return match?.[1];
  }, [params, pathname]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -8, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -8, scale: 0.98 }}
          transition={{ duration: 0.18, ease: [0.22, 0.28, 0, 1] }}
          className={`hidden sm:block fixed lg:max-w-[719px] max-lg:max-w-[616px] w-full lg:h-[100dvh] max-lg:h-[calc(100dvh-80px)]  lg:rounded-[20px] max-lg:rounded-tr-[20px] max-lg:rounded-br-[20px] pb-[170px] max-lg:px-[45px] ${
            isDarkMode ? 'bg-[#141625]' : 'bg-white'
          } transition-colors duration-1000 z-30 `}
        >
          <div className='lg:max-w-[520px] max-lg:max-w-[528px] w-full h-full lg:ml-[159px] mt-[59px] mb-[70px]  overflow-y-scroll scrollbar-custom'>
            {invoiceId ? (
              <h2
                className={`mb-[46px] font-league font-bold text-[24px] leading-[32px] tracking-[-0.5px]  ${
                  isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                } transition-colors duration-1000`}
              >
                Edit Invoice
              </h2>
            ) : (
              <h2
                className={`mb-[46px] font-league font-bold text-[24px] leading-[32px] tracking-[-0.5px]  ${
                  isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                } transition-colors duration-1000`}
              >
                New Invoice
              </h2>
            )}
            <CreateForm />
          </div>
          <Baner />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
