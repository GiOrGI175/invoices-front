'use client';

import AddNewItem from '@/components/_atoms/form/AddNewItem';
import ItemDelete from '@/components/_atoms/form/ItemDelete';
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

  return (
    <div className='mt-[35px]'>
      <span className='font-league font-bold text-[18px] leading-[32px] tracking-[-0.1px] text-[#777F98]'>
        Item List
      </span>

      <div>
        <div className='w-full flex gap-[16px]'>
          <span className='max-w-[214px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
            Item Name
          </span>

          <span className='max-w-[46px] w-full mb-[15px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
            Qty.
          </span>

          <span className='max-w-[100px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
            Price
          </span>

          <span className='max-w-[100px] w-full mb-[15px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'>
            Total
          </span>
        </div>
        {items.map((item, idx) => (
          <div key={idx} className='flex gap-[16px]'>
            <div className='flex flex-col'>
              <input
                type='text'
                id='Item Name'
                name='Item Name'
                className='max-w-[214px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
              />
            </div>

            <div className='flex flex-col'>
              <input
                type='number'
                id='Qty.'
                name='Qty.'
                className='max-w-[46px] w-full h-[48px] p-[10px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA] appearance-none [-moz-appearance:textfield]'
              />
            </div>

            <div className='flex flex-col'>
              <input
                type='number'
                id='Price'
                name='Price'
                className='max-w-[100px] w-full h-[48px] p-[20px]  border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA] appearance-none [-moz-appearance:textfield]'
              />
            </div>

            <div className='flex flex-col'>
              <div className='max-w-[100px] w-full h-[48px] flex items-center'>
                <span className=' font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#888EB0]'>
                  {item.Total}
                </span>
              </div>
            </div>

            <ItemDelete />
          </div>
        ))}
      </div>
      {/* ესეგი აქედან როცა შეიქმნება მერე ემატებაა მანმდე სულ ცარილი უნდა იყოს ესდა არ უნდა ჩანდეს ინფუთის ველები */}
      <AddNewItem />
    </div>
  );
}
