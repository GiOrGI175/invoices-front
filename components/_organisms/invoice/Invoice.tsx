'use client';

import ItemsList from '@/components/_molecules/invoice/ItemsList';

export default function Invoice() {
  const item = {
    id: 'XM9141',
    createdAt: '2021-08-21',
    paymentDue: '2021-09-20',
    description: 'Graphic Design',
    paymentTerms: 30,
    clientName: 'Alex Grim',
    clientEmail: 'alexgrim@mail.com',
    status: 'pending',
    senderAddress: {
      street: '19 Union Terrace',
      city: 'London',
      postCode: 'E1 3EZ',
      country: 'United Kingdom',
    },
    clientAddress: {
      street: '84 Church Way',
      city: 'Bradford',
      postCode: 'BD1 9PB',
      country: 'United Kingdom',
    },
    items: [
      {
        name: 'Banner Design',
        quantity: 1,
        price: 156.0,
        total: 156.0,
      },
      {
        name: 'Email Design',
        quantity: 2,
        price: 200.0,
        total: 400.0,
      },
    ],
    total: 556.0,
  };
  return (
    <div className='max-w-[730px] w-full rounded-[8px] mt-[24px] p-[48px] flex flex-col justify-between  bg-[#FFFFFF] drop-shadow-xl'>
      <div className='w-full flex justify-between items-start'>
        <div className='flex flex-col'>
          <span className='font-league font-bold text-[15px] leading-[24px] tracking-[-0.1px] text-[#0C0E16] '>
            <span className='text-[#888EB0]'>#</span>
            {item.id}
          </span>
          <p className='mt-[7px] font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
            {item.description}
          </p>
        </div>
        <div className='flex flex-col'>
          <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
            {item.senderAddress.street}
          </span>
          <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
            {item.senderAddress.city}
          </span>
          <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
            {item.senderAddress.postCode}
          </span>
          <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
            {item.senderAddress.country}
          </span>
        </div>
      </div>
      <div className='flex mt-[21px] gap-[118px]'>
        <div className='flex flex-col gap-[31px]'>
          <div className='flex flex-col'>
            <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
              Invoice Date
            </span>
            <span className='mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px] text-[#0C0E16]'>
              {item.createdAt}
            </span>
          </div>
          <div className='flex flex-col'>
            <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
              Payment Due
            </span>
            <span className='mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px] text-[#0C0E16]'>
              {item.paymentDue}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
            Bill To
          </span>
          <span className='mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px] text-[#0C0E16]'>
            {item.clientName}
          </span>
          <div className='flex flex-col mt-[7px]'>
            <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
              {item.clientAddress.street}
            </span>
            <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
              {item.clientAddress.city}
            </span>
            <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
              {item.clientAddress.postCode}
            </span>
            <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
              {item.clientAddress.country}
            </span>
          </div>
        </div>
        <div className='flex flex-col'>
          <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
            Sent to
          </span>
          <span className='mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px] text-[#0C0E16]'>
            {item.clientEmail}
          </span>
        </div>
      </div>
      <ItemsList />
    </div>
  );
}
