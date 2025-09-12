'use client';

import DiscardInvoice from '@/components/_atoms/form/DiscardInvoice';
import InvoiceSave from '@/components/_atoms/form/InvoiceSave';
import SavaAsDraft from '@/components/_atoms/form/SavaAsDraft';

export default function Baner() {
  return (
    <div
      className='absolute bottom-0 right-0 max-w-[719px] w-full h-[110px] 
  rounded-[20px] py-[31px] pr-[56px] flex justify-end z-50 
  shadow-[0_-10px_20px_rgba(0,0,0,0.25)]'
    >
      {' '}
      <div className='max-w-[504px] w-full flex justify-between'>
        <div>{true && <DiscardInvoice />}</div>
        {true && (
          <div className='flex gap-[8px]'>
            <SavaAsDraft />
            <InvoiceSave />
          </div>
        )}
      </div>
    </div>
  );
}
