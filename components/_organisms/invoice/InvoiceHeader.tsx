'use client';

import InvoiceDelete from '@/components/_atoms/invoice/InvoiceDelete';
import InvoiceEdit from '@/components/_atoms/invoice/InvoiceEdit';
import InvoiceMarkPaid from '@/components/_atoms/invoice/InvoiceMarkPaid';
import { useDarkMode } from '@/store/darkMode';
import { useOpen } from '@/store/ui';
import { motion } from 'framer-motion';

export default function InvoiceHeader() {
  const item = {
    id: 'RT3080',
    dueDate: 'Due  19 Aug 2021',
    clientName: 'Jensen Huang',
    amount: 1800.9,
    status: 'Paid',
  };

  const statusColors: Record<string, string> = {
    Paid: 'bg-[#33D69F]',
    Pending: 'bg-[#FF8F00]',
    Draft: 'bg-[#373B53]',
  };

  const statusDarkColors: Record<string, string> = {
    Paid: 'bg-[#33D69F]',
    Pending: 'bg-[#FF8F00]',
    Draft: 'bg-[#DFE3FA]',
  };

  const statusBgColors: Record<string, string> = {
    Paid: 'bg-[#33D69F]/20',
    Pending: 'bg-[#FF8F00]/20',
    Draft: 'bg-[#373B53]/20',
  };

  const statusTextColors: Record<string, string> = {
    Paid: 'text-[#33D69F]',
    Pending: 'text-[#FF8F00]',
    Draft: 'text-[#DFE3FA]',
  };

  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsDelete = useOpen((state) => state.setIsDelete);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 1.2,
        stiffness: 120,
      }}
      className={`lg:max-w-[730px] max-lg:max-w-[688px] w-full h-[88px] rounded-[8px] px-[24px] sm:px-[32px] flex justify-between items-center drop-shadow-xl ${
        isDarkMode ? 'bg-[#1E2139]' : 'bg-[#FFFFFF]'
      } transition-colors duration-1000`}
    >
      <div className='max-sm:w-full  flex items-center max-sm:justify-between'>
        <span
          className={`mr-[20px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]    ${
            isDarkMode ? 'text-[#DFE3FA]' : 'text-[#858BB2]'
          } transition-colors duration-1000`}
        >
          Status
        </span>
        <div
          className={`w-[104px] h-[40px] rounded-[6px] flex items-center justify-center ${
            statusBgColors[item.status]
          } `}
        >
          <div
            className={`w-[8px] h-[8px] mr-[8px] rounded-full 
                  ${
                    isDarkMode
                      ? ` ${statusDarkColors[item.status]}`
                      : `${statusColors[item.status]}`
                  } transition-colors duration-1000`}
          />
          <span
            className={`font-league   text-center font-bold text-[15px] leading-[15px] tracking-[-0.25px]  ${
              isDarkMode ? `${statusTextColors[item.status]}` : 'text-[#0C0E16]'
            } transition-colors duration-1000`}
          >
            {item.status}
          </span>
        </div>
      </div>
      <div className='hidden sm:flex gap-[8px]'>
        <InvoiceEdit />
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsOverlay(true);
            setIsDelete(true);
          }}
        >
          <InvoiceDelete />
        </div>
        <InvoiceMarkPaid />
      </div>
    </motion.div>
  );
}
