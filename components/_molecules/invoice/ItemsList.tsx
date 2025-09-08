'use client';
export default function ItemsList() {
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
    <div className='w-full mt-[44px]  rounded-[8px] overflow-hidden'>
      <div className='p-[32px]'>
        <div className='w-full flex gap-[227px] mb-[32px]'>
          <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
            Item Name
          </span>
          <div className='max-w-[282px] w-full flex justify-between items-center'>
            <span className=' font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
              QTY.
            </span>
            <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
              Price
            </span>
            <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
              Total
            </span>
          </div>
        </div>
        <div className='w-full flex flex-col gap-[32px]'>
          {item.items.map((item) => (
            <div className='flex justify-between'>
              <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#0C0E16]'>
                {item.name}
              </span>
              <div className='max-w-[282px] w-full flex justify-between items-center'>
                <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
                  {item.quantity}
                </span>
                <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
                  {item.price}
                </span>
                <span className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-[#7E88C3]'>
                  {item.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='w-full h-[80px] flex justify-between items-center p-[32px] bg-[#373B53]'>
        <p className='font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] text-white'>
          Amount Due
        </p>
        <p className='font-league font-bold text-[24px] leading-[32px] tracking-[-0.1px] text-white'>
          $ {item.total}
        </p>
      </div>
    </div>
  );
}
