import { useDarkMode } from '@/store/darkMode';
import React from 'react';

type InvoiceStatus = 'Paid' | 'Pending' | 'Draft';

type StatusIconPropsT = {
  item: {
    id: string;
    dueDate: string;
    clientName: string;
    amount: number;
    status: InvoiceStatus;
  };
};

export default function StatusIcon({ item }: StatusIconPropsT) {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

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

  return (
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
  );
}
