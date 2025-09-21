'use client';

import InvoicesEmpty from '@/components/_molecules/invoices/InvoicesEmpty';
import { useDarkMode } from '@/store/darkMode';
import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import StatusIcon from '@/components/_atoms/invoices/StatusIcon';

export default function Invoices() {
  type InvoiceStatus = 'Paid' | 'Pending' | 'Draft';
  interface Invoice {
    id: string;
    dueDate: string;
    clientName: string;
    amount: number;
    status: InvoiceStatus;
  }

  const seed: Invoice[] = [
    {
      id: 'RT3080',
      dueDate: 'Due  19 Aug 2021',
      clientName: 'Jensen Huang',
      amount: 1800.9,
      status: 'Paid',
    },
    {
      id: 'XM9141',
      dueDate: 'Due  19 Aug 2021',
      clientName: 'Alex Grim',
      amount: 556.0,
      status: 'Pending',
    },
    {
      id: 'RG0314',
      dueDate: 'Due  19 Aug 2021',
      clientName: 'John Morrison',
      amount: 14002.33,
      status: 'Draft',
    },
    {
      id: 'RT2080',
      dueDate: 'Due  19 Aug 2021',
      clientName: 'Alysa Werner',
      amount: 102.04,
      status: 'Pending',
    },
    {
      id: 'AA1449',
      dueDate: 'Due  19 Aug 2021',
      clientName: 'Mellisa Clarke',
      amount: 4032.33,
      status: 'Pending',
    },
    {
      id: 'TY9141',
      dueDate: 'Due  19 Aug 2021',
      clientName: 'Thomas Wayne',
      amount: 6155.91,
      status: 'Pending',
    },
    {
      id: 'FV2353',
      dueDate: 'Due  19 Aug 2021',
      clientName: 'Anita Wainwright',
      amount: 3102.04,
      status: 'Draft',
    },
  ];

  const isDarkMode = useDarkMode((s) => s.isDarkMode);
  const router = useRouter();

  const [invoices, setInvoices] = useState<Invoice[]>(seed);
  const [removingId, setRemovingId] = useState<string | null>(null);

  const handleInvoiceClick = (e: React.MouseEvent, invoiceId: string) => {
    e.preventDefault();
    setRemovingId(invoiceId);
    setInvoices((prev) => prev.filter((i) => i.id !== invoiceId));
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      x: 24,
      marginBottom: 0,
      transition: { duration: 0.9 },
    },
  };

  return (
    <div className='relative z-10 lg:max-w-[730px] max-lg:max-w-[672px] w-full lg:mt-[64px] max-lg:mt-[55px]'>
      {invoices.length === 0 ? (
        <InvoicesEmpty />
      ) : (
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <AnimatePresence
            onExitComplete={() => {
              if (removingId) {
                router.push(`invoices/${removingId}`);
                setRemovingId(null);
              }
            }}
          >
            {invoices.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                style={{ overflow: 'hidden' }}
                onClick={(e) => handleInvoiceClick(e, item.id)}
                className={`relative w-full h-[327x] sm:h-[72px] mb-[16px] max-sm:py-[25px] sm:pt-[30px]  max-sm:px-[24px] sm:pb-[27px] lg:pr-[24px] sm:max-lg:px-[24px] lg:pl-[32px] rounded-[8px] flex max-sm:flex-col items-center justify-between
                  ${isDarkMode ? 'bg-[#1E2139]' : 'bg-white'}
                  ${item.status === 'Draft' ? '' : 'drop-shadow-xl'}
                  border-[1px] border-transparent hover:border-[#7C5DFA] transition-colors duration-500 cursor-pointer `}
              >
                <div className='max-sm:w-full max-sm:justify-between flex  sm:items-center max-sm:mb-[9px] gap-[51px]'>
                  <div className='flex max-sm:flex-col sm:items-center max-sm:gap-[24px] sm:gap-[28px]'>
                    <span
                      className={`font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] ${
                        isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                      } transition-colors duration-1000`}
                    >
                      <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] text-[#888EB0]'>
                        #
                      </span>
                      {item.id}
                    </span>
                    <span
                      className={`max-lg:min-w-[55px] max-lg:text-center font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] ${
                        isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                      } transition-colors duration-1000`}
                    >
                      {item.dueDate}
                    </span>
                  </div>
                  <span
                    className={`max-lg:text-center font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] ${
                      isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                    } transition-colors duration-1000`}
                  >
                    {item.clientName}
                  </span>
                </div>

                <div className='max-sm:w-full max-sm:justify-between flex items-center gap-[40px]'>
                  <span
                    className={`max-lg:min-w-[71px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] ${
                      isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                    } transition-colors duration-1000`}
                  >
                    $ {item.amount}
                  </span>
                  <div className='flex items-center gap-[20px]'>
                    <div className='hidden sm:block'>
                      <StatusIcon item={item} />
                    </div>
                    <Image
                      src='assets/svg/arrow_right.svg'
                      width={8}
                      height={4}
                      alt='arrow to open'
                      className='max-sm:hidden '
                    />
                  </div>
                </div>
                <div className='block sm:hidden absolute bottom-[28px] right-[24px]'>
                  <StatusIcon item={item} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
