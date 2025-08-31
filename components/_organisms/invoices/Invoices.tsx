'use client';

import Image from 'next/image';

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

  //!   თუ რმაის სტატუსი არის დრაფტი ჩრდილი აღარ უნდა
  return (
    <div className='relative z-10 max-w-[730px] w-full mt-[64px]'>
      {invoicesArr.map((item) => (
        <div
          key={item.id}
          className={`w-full h-[72px] mb-[16px] pt-[30px] pb-[27px] pr-[24px] pl-[32px] rounded-[8px] flex items-center justify-between bg-white  ${
            item.status === 'Draft' ? '' : 'drop-shadow-xl'
          }`}
        >
          <div className='flex items-center gap-[51px]'>
            <div className='flex items-center gap-[28px]'>
              <span className='font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]'>
                <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] text-[#888EB0]'>
                  #
                </span>
                {item.id}
              </span>

              <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] text-[#888EB0]'>
                {item.dueDate}
              </span>
            </div>
            <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] text-[#888EB0]'>
              {item.clientName}
            </span>
          </div>

          <div className='flex items-center gap-[40px]'>
            <span className='font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]'>
              ${item.amount}
            </span>

            <div className='flex items-center gap-[20px]'>
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
              <Image
                src='assets/svg/arrow_right.svg'
                width={8}
                height={4}
                alt='arrow to open'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
