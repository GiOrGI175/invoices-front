'use client';

import Overlay from '@/components/_atoms/invoices/Overlay';
import Invoices from '@/components/_organisms/invoices/Invoices';
import InvoicesHeader from '@/components/_organisms/invoices/InvoicesHeader';
import { useDarkMode } from '@/store/darkMode';

export default function invoices() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div
      className={`flex flex-col justify-center items-center w-full h-full ${
        isDarkMode ? 'bg-[#141625]' : 'bg-[#F8F8FB]'
      } transition-colors duration-1000 `}
    >
      <InvoicesHeader />

      <Invoices />

      <Overlay />
    </div>
  );
}
