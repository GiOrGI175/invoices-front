'use client';

import InvoicesEmpty from '@/components/_molecules/invoices/InvoicesEmpty';
import { useDarkMode } from '@/store/darkMode';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useAnimate } from 'framer-motion';
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

  const invoicesArr: Invoice[] = [
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

  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  const router = useRouter();
  const [animatingId, setAnimatingId] = useState<string | null>(null);
  const [scope, animate] = useAnimate();

  const handleInvoiceClick = async (e: React.MouseEvent, invoiceId: string) => {
    e.preventDefault();

    if (animatingId) return;

    setAnimatingId(invoiceId);

    const exitAnimation = async () => {
      await animate(
        `[data-invoice-id="${invoiceId}"]`,
        {
          borderColor: '#6ee7b7',
        },
        {
          ease: 'easeIn',
          duration: 0.125,
        }
      );

      await animate(
        `[data-invoice-id="${invoiceId}"]`,
        {
          scale: 1.025,
        },
        {
          ease: 'easeIn',
          duration: 0.125,
        }
      );

      await animate(
        `[data-invoice-id="${invoiceId}"]`,
        {
          opacity: 0,
          x: 24,
        },
        {
          duration: 0.3,
        }
      );

      router.push(`invoices/${invoiceId}`);
    };

    exitAnimation();
  };

  return (
    <div ref={scope} className='relative z-10 max-w-[730px] w-full mt-[64px]'>
      {false ? (
        <InvoicesEmpty />
      ) : (
        invoicesArr.map((item) => (
          <div
            key={item.id}
            data-invoice-id={item.id}
            onClick={(e) => handleInvoiceClick(e, item.id)}
            className={`w-full h-[72px] mb-[16px] pt-[30px] pb-[27px] pr-[24px] pl-[32px] rounded-[8px] flex items-center justify-between  ${
              isDarkMode ? 'bg-[#1E2139]' : 'bg-white'
            } transition-colors duration-1000 ${
              item.status === 'Draft' ? '' : 'drop-shadow-xl'
            } border-[1px] border-transparent hover:border-[#7C5DFA] duration-500 cursor-pointer`}
          >
            <div className='flex items-center gap-[51px]'>
              <div className='flex items-center gap-[28px]'>
                <span
                  className={`font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px]  ${
                    isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                  } transition-colors duration-1000`}
                >
                  <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] text-[#888EB0]'>
                    #
                  </span>
                  {item.id}
                </span>

                <span
                  className={`font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px]  ${
                    isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                  } transition-colors duration-1000`}
                >
                  {item.dueDate}
                </span>
              </div>
              <span
                className={`font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                } transition-colors duration-1000`}
              >
                {item.clientName}
              </span>
            </div>

            <div className='flex items-center gap-[40px]'>
              <span
                className={`font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px]  ${
                  isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                } transition-colors duration-1000`}
              >
                $ {item.amount}
              </span>

              <div className='flex items-center gap-[20px]'>
                <StatusIcon item={item} />
                <Image
                  src='assets/svg/arrow_right.svg'
                  width={8}
                  height={4}
                  alt='arrow to open'
                />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
