'use client';

import InvoiceDelete from '@/components/_atoms/invoice/InvoiceDelete';
import InvoiceEdit from '@/components/_atoms/invoice/InvoiceEdit';
import InvoiceMarkPaid from '@/components/_atoms/invoice/InvoiceMarkPaid';
import { useOpen } from '@/store/ui';

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

  const statusBgColors: Record<string, string> = {
    Paid: 'bg-[#33D69F]/20',
    Pending: 'bg-[#FF8F00]/20',
    Draft: 'bg-[#373B53]/20',
  };

  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsDelete = useOpen((state) => state.setIsDelete);

  return (
    <div className='max-w-[730px] w-full h-[88px] rounded-[8px] px-[32px] flex justify-between items-center bg-[#FFFFFF] drop-shadow-xl'>
      <div className='flex items-center'>
        <span className='mr-[20px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#858BB2]'>
          Status
        </span>
        <div
          className={`w-[104px] h-[40px] rounded-[6px] flex items-center justify-center ${
            statusBgColors[item.status]
          } `}
        >
          <div
            className={`w-[8px] h-[8px] mr-[8px] rounded-full 
                  ${statusColors[item.status]} `}
          />
          <span className='font-league   text-center font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]'>
            {item.status}
          </span>
        </div>
      </div>
      <div className='flex gap-[8px]'>
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
    </div>
  );
}
