'use client';

import { useOpen } from '@/store/ui';
import InvoiceDelete from './InvoiceDelete';
import InvoiceEdit from './InvoiceEdit';
import InvoiceMarkPaid from './InvoiceMarkPaid';

export default function InvoiceBaner() {
  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsDelete = useOpen((state) => state.setIsDelete);

  return (
    <div className='w-full h-[91px] flex justify-between px-[24px] items-center  gap-[8px]'>
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
  );
}
