'use client';

import Calendar01 from '@/components/_atoms/form/calendar-01';
import OpenCalendar from '@/components/_atoms/form/OpenCalendar';
import OpenPaymentTrems from '@/components/_atoms/form/OpenPaymentTrems';

export default function BillTo() {
  return (
    <div className='max-w-[504px] mt-[49px] w-full flex flex-col'>
      <span className='mb-[24px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7C5DFA]'>
        Bill To
      </span>
      <div className='flex flex-col'>
        <label
          htmlFor='Clients Name'
          className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
        >
          Client’s Name
        </label>
        <input
          type='text'
          id='Clients Name'
          name='Clients Name'
          placeholder='Enter Client’s Name'
          className='w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
        />
      </div>

      <div className='flex flex-col mt-[25px]'>
        <label
          htmlFor='clients cmail'
          className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
        >
          Client’s Email
        </label>
        <input
          type='text'
          id='clients cmail'
          name='clients cmail'
          placeholder='Enter Client’s Email'
          className='w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
        />
      </div>
      <div className='flex flex-col mt-[25px]'>
        <label
          htmlFor='clientsstreetAddress'
          className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
        >
          Street Address
        </label>
        <input
          type='text'
          id='clientsstreetAddress'
          name='clientsstreetAddress'
          placeholder='Enter street address'
          className='w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
        />
      </div>

      <div className='flex mt-[25px] gap-[24px]'>
        <div className='flex flex-col'>
          <label
            htmlFor='clientscity'
            className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
          >
            City
          </label>
          <input
            type='text'
            id='clientscity'
            name='clientscity'
            placeholder='Enter city'
            className='max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
          />
        </div>

        <div className='flex flex-col'>
          <label
            htmlFor='clients post code'
            className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
          >
            Post Code
          </label>
          <input
            type='text'
            id='clients post code'
            name='clients post code'
            placeholder='Enter Post Code'
            className='max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
          />
        </div>

        <div className='flex flex-col'>
          <label
            htmlFor='clients country'
            className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
          >
            Country
          </label>
          <input
            type='text'
            id='clients country'
            name='clients country'
            placeholder='Enter country'
            className='max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
          />
        </div>
      </div>
      <div className='flex gap-[24px] mt-[25px] w-full'>
        <OpenCalendar />

        {/* <div className='flex flex-col max-w-[240px] w-full'>
          <label
            htmlFor='Invoice Date'
            className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
          >
            Payment Terms
          </label>
          <input
            type='text'
            id='Invoice Date'
            name='Invoice Date'
            placeholder='Enter Invoice Date'
            className='max-w-[240px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
          />
        </div> */}
        <OpenPaymentTrems />
      </div>

      <div className='flex flex-col mt-[25px]'>
        <label
          htmlFor='Project Description'
          className='mb-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
        >
          Project Description
        </label>
        <input
          type='text'
          id='Project Description'
          name='Project Description'
          placeholder='Enter street address'
          className='w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16] focus:outline-none focus:border-[#7C5DFA]'
        />
      </div>
    </div>
  );
}
