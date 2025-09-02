import Overlay from '@/components/_atoms/invoices/Overlay';
import Baner from '@/components/_molecules/form/Baner';
import Invoices from '@/components/_organisms/invoices/Invoices';
import InvoicesHeader from '@/components/_organisms/invoices/InvoicesHeader';
import { div } from 'motion/react-client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <InvoicesHeader />

      <Invoices />

      <Overlay />
    </div>
  );
}
