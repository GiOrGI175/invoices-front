'use client';

import AddNewItem from '@/components/_atoms/form/AddNewItem';
import ItemDelete from '@/components/_atoms/form/ItemDelete';
import { useDarkMode } from '@/store/darkMode';
import { useState } from 'react';

export default function CreateItemList() {
  const [items, setItems] = useState([
    {
      ItemName: '',
      Qty: 0,
      Price: 0,
      Total: 156,
    },
  ]);

  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <div className='mt-[35px] max-sm:mb-[22px] sm:mb-[12px]'>
      <span className='font-league font-bold text-[18px] leading-[32px] tracking-[-0.1px] text-[#777F98]'>
        Item List
      </span>

      <div>
        <div className='w-full hidden sm:flex gap-[16px]'>
          <span
            className={`max-w-[214px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            Item Name
          </span>

          <span
            className={`max-w-[46px] w-full mb-[15px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]  ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            Qty.
          </span>

          <span
            className={`max-w-[100px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]  ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            Price
          </span>

          <span
            className={`max-w-[100px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            Total
          </span>
        </div>
        {items.map((item, idx) => (
          <div key={idx} className='flex max-sm:flex-col gap-[16px]'>
            <div className='flex flex-col'>
              <label
                className={`flex sm:hidden max-w-[214px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000`}
              >
                Item Name
              </label>
              <input
                type='text'
                id='Item Name'
                name='Item Name'
                className={`sm:max-w-[214px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] ${
              isDarkMode
                ? 'bg-[#1E2139] text-[#FFFFFF]'
                : 'bg-transparent text-[#0C0E16]'
            } transition-colors duration-1000`}
              />
            </div>
            <div className='max-sm:w-full flex max-sm:justify-between gap-[16px]'>
              <div className='flex flex-col'>
                <label
                  className={`flex sm:hidden max-w-[214px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                    isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                  } transition-colors duration-1000`}
                >
                  Qty.
                </label>
                <input
                  type='number'
                  id='Qty.'
                  name='Qty.'
                  className={`sm:max-w-[46px] max-sm:min-w-[64px] w-full h-[48px] p-[10px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] appearance-none [-moz-appearance:textfield] ${
              isDarkMode
                ? 'bg-[#1E2139] text-[#FFFFFF]'
                : 'bg-transparent text-[#0C0E16]'
            } transition-colors duration-1000`}
                />
              </div>

              <div className='flex flex-col'>
                <label
                  className={`flex sm:hidden max-w-[214px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                    isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                  } transition-colors duration-1000`}
                >
                  Price
                </label>
                <input
                  type='number'
                  id='Price'
                  name='Price'
                  className={`sm:max-w-[100px] max-sm:min-w-[80px] w-full h-[48px] p-[20px]  border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] focus:outline-none focus:border-[#7C5DFA] appearance-none [-moz-appearance:textfield] ${
              isDarkMode
                ? 'bg-[#1E2139] text-[#FFFFFF]'
                : 'bg-transparent text-[#0C0E16]'
            } transition-colors duration-1000`}
                />
              </div>

              <div className='flex flex-col'>
                <div className='max-w-[100px] w-full sm:h-[48px] max-sm:h-[78px] flex max-sm:flex-col items-center'>
                  <label
                    className={`flex sm:hidden max-w-[214px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                      isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                    } transition-colors duration-1000`}
                  >
                    Total
                  </label>
                  <span
                    className={`h-full max-sm:min-w-[80px] flex items-center font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] ${
                      isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                    } transition-colors duration-1000`}
                  >
                    {item.Total}
                  </span>
                </div>
              </div>

              <ItemDelete />
            </div>
          </div>
        ))}
      </div>
      {/* ესეგი აქედან როცა შეიქმნება მერე ემატებაა მანმდე სულ ცარილი უნდა იყოს ესდა არ უნდა ჩანდეს ინფუთის ველები */}
      <AddNewItem />
    </div>
  );
}
