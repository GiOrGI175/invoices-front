'use client';

import ItemsList from '@/components/_molecules/invoice/ItemsList';
import { useDarkMode } from '@/store/darkMode';
import { motion } from 'framer-motion';

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

  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 1.2,
        stiffness: 120,
      }}
      className={`lg:max-w-[730px] max-lg:max-w-[688px] w-full rounded-[8px] mt-[16px] sm:mt-[24px] p-[24px] sm:p-[48px] flex flex-col justify-between drop-shadow-xl  ${
        isDarkMode ? 'bg-[#1E2139]' : 'bg-[#FFFFFF]'
      } transition-colors duration-1000`}
    >
      <div className='w-full flex max-sm:flex-col justify-between items-start'>
        <div className='max-sm:mb-[30px] flex flex-col'>
          <span
            className={`font-league font-bold text-[15px] leading-[24px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16] '
            } transition-colors duration-1000 `}
          >
            <span className='text-[#888EB0]'>#</span>
            {item.id}
          </span>
          <p
            className={`mt-[7px] font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px]  ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000  `}
          >
            {item.description}
          </p>
        </div>
        <div className='flex flex-col'>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000 `}
          >
            {item.senderAddress.street}
          </span>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000 `}
          >
            {item.senderAddress.city}
          </span>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000 `}
          >
            {item.senderAddress.postCode}
          </span>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000 `}
          >
            {item.senderAddress.country}
          </span>
        </div>
      </div>
      <div className='flex max-sm:flex-col  mt-[21px] max-sm:gap-[35px] sm:gap-[118px]'>
        <div className='flex max-sm:justify-between sm:gap-[118px]'>
          <div className='flex flex-col gap-[31px]'>
            <div className='flex flex-col'>
              <span
                className={`font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]   ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000 `}
              >
                Invoice Date
              </span>
              <span
                className={`mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px]  ${
                  isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
                } transition-colors duration-1000 `}
              >
                {item.createdAt}
              </span>
            </div>
            <div className='flex flex-col'>
              <span
                className={`font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]   ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000 `}
              >
                Payment Due
              </span>
              <span
                className={`mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px]  ${
                  isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
                } transition-colors duration-1000 `}
              >
                {item.paymentDue}
              </span>
            </div>
          </div>
          <div className='flex flex-col mr-[50px]'>
            <span
              className={`font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]   ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              } transition-colors duration-1000 `}
            >
              Bill To
            </span>
            <span
              className={`mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px]  ${
                isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
              } transition-colors duration-1000 `}
            >
              {item.clientName}
            </span>
            <div className='flex flex-col mt-[7px]'>
              <span
                className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000 `}
              >
                {item.clientAddress.street}
              </span>
              <span
                className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000 `}
              >
                {item.clientAddress.city}
              </span>
              <span
                className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000 `}
              >
                {item.clientAddress.postCode}
              </span>
              <span
                className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px]  ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000 `}
              >
                {item.clientAddress.country}
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <span
            className={`font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]   ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000 `}
          >
            Sent to
          </span>
          <span
            className={`mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px]  ${
              isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
            } transition-colors duration-1000 `}
          >
            {item.clientEmail}
          </span>
        </div>
      </div>
      <ItemsList />
    </motion.div>
  );
}
