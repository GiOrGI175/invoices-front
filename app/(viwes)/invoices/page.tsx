'use client';

import Overlay from '@/components/_atoms/invoices/Overlay';
import Invoices from '@/components/_organisms/invoices/Invoices';
import InvoicesHeader from '@/components/_organisms/invoices/InvoicesHeader';
import { useDarkMode } from '@/store/darkMode';

export default function Invoicess() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div
      className={`w-full  h-full flex flex-col lg:justify-center items-center max-lg:px-[48px] max-sm:px-[24px] ${
        isDarkMode ? 'bg-[#141625]' : 'bg-[#F8F8FB]'
      } transition-colors duration-1000 `}
    >
      <InvoicesHeader />

      <Invoices />

      <Overlay />
    </div>
  );
}
