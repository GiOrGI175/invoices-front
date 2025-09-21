'use client';

import { useDarkMode } from '@/store/darkMode';

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

  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div
      className={`w-full mt-[44px]  rounded-[8px] overflow-hidden  ${
        isDarkMode ? 'bg-[#252945]' : 'bg-transparent'
      } transition-colors duration-1000 `}
    >
      <div className='p-[32px]'>
        <div className='max-sm:hidden w-full flex justify-between mb-[32px]'>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000 `}
          >
            Item Name
          </span>
          <div className='sm:max-w-[282px] sm:w-full w-fit flex justify-between items-center'>
            <span
              className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              } transition-colors duration-1000 `}
            >
              QTY.
            </span>
            <span
              className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              } transition-colors duration-1000 `}
            >
              Price
            </span>
            <span
              className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              } transition-colors duration-1000 `}
            >
              Total
            </span>
          </div>
        </div>
        <div className='w-full flex flex-col gap-[32px]'>
          {item.items.map((item, idx) => (
            <div key={idx} className='flex justify-between'>
              <div>
                <span
                  className={`font-league font-bold text-[15px] sm:text-[13px] leading-[18px] tracking-[-0.1px] ${
                    isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
                  } transition-colors duration-1000 `}
                >
                  {item.name}
                </span>
                <span
                  className={`block sm:hidden-[-0.1px] ${
                    isDarkMode ? 'text-[#DFE3FA] ' : 'text-[#7E88C3] '
                  } transition-colors duration-1000 `}
                >
                  {item.quantity} x ${item.price}
                </span>
              </div>
              <div className=' sm:max-w-[282px] sm:w-full flex justify-between items-center'>
                <span
                  className={`hidden sm:block font-league font-bold text-[15px] leading-[18px] tracking-[-0.1px] ${
                    isDarkMode ? 'text-[#DFE3FA] ' : 'text-[#7E88C3] '
                  } transition-colors duration-1000 `}
                >
                  {item.quantity}
                </span>
                <span
                  className={`hidden sm:block font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
                    isDarkMode ? 'text-[#DFE3FA] ' : 'text-[#7E88C3] '
                  } transition-colors duration-1000  `}
                >
                  $ {item.price}
                </span>
                <span
                  className={`font-league font-bold sm:font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
                    isDarkMode
                      ? 'text-[#DFE3FA] '
                      : 'text-[#0C0E16] sm:text-[#7E88C3] '
                  } transition-colors duration-1000 `}
                >
                  $ {item.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={`w-full h-[80px] flex justify-between items-center p-[32px]   ${
          isDarkMode ? 'bg-[#0C0E16]' : 'bg-[#373B53]'
        } transition-colors duration-1000 `}
      >
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
