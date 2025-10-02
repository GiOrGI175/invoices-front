'use client';

import { useDarkMode } from '@/store/darkMode';

type InvoiceItem = {
  name: string;
  quantity: number;
  price: number;
  total: number;
};

export default function ItemsList({
  items,
  total,
  status, // თუ გინდა, შეგიძლია გამოიყენო სადმე ჰედერზე
}: {
  items: InvoiceItem[];
  total: number;
  status?: 'Draft' | 'Pending' | 'Paid';
}) {
  const isDarkMode = useDarkMode((s) => s.isDarkMode);

  const money = (n: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(n);

  return (
    <div
      className={`w-full mt-[44px] rounded-[8px] overflow-hidden ${
        isDarkMode ? 'bg-[#252945]' : 'bg-transparent'
      } transition-colors duration-1000`}
    >
      <div className='p-[32px]'>
        <div className='max-sm:hidden w-full flex justify-between mb-[32px]'>
          <span
            className={`font-league text-[13px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            }`}
          >
            Item Name
          </span>
          <div className='sm:max-w-[282px] sm:w-full w-fit flex justify-between items-center'>
            <span
              className={`font-league text-[13px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              }`}
            >
              QTY.
            </span>
            <span
              className={`font-league text-[13px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              }`}
            >
              Price
            </span>
            <span
              className={`font-league text-[13px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              }`}
            >
              Total
            </span>
          </div>
        </div>

        <div className='w-full flex flex-col gap-[16px] sm:gap-[32px]'>
          {items.map((row, idx) => (
            <div key={idx} className='flex justify-between'>
              <div>
                <span
                  className={`block font-league font-bold text-[15px] sm:text-[13px] ${
                    isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
                  }`}
                >
                  {row.name}
                </span>
                <span
                  className={`block sm:hidden ${
                    isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                  }`}
                >
                  {row.quantity} x {money(row.price)}
                </span>
              </div>

              <div className='sm:max-w-[282px] sm:w-full flex justify-between items-center'>
                <span
                  className={`hidden sm:block font-league font-bold text-[15px] ${
                    isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                  }`}
                >
                  {row.quantity}
                </span>
                <span
                  className={`hidden sm:block font-league text-[13px] ${
                    isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                  }`}
                >
                  {money(row.price)}
                </span>
                <span
                  className={`font-league sm:font-medium text-[13px] ${
                    isDarkMode
                      ? 'text-[#DFE3FA]'
                      : 'text-[#0C0E16] sm:text-[#7E88C3]'
                  }`}
                >
                  {money(row.total)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`${
          isDarkMode ? 'bg-[#0C0E16]' : 'bg-[#373B53]'
        } w-full h-[80px] flex justify-between items-center p-[32px]`}
      >
        <p className='font-league font-medium text-[13px] text-white'>
          Amount Due
        </p>
        <p className='font-league font-bold text-[24px] text-white'>
          {money(total)}
        </p>
      </div>
    </div>
  );
}
