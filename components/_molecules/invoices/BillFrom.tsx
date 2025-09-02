'use client';
export default function BillFrom() {
  return (
    <div className='max-w-[504px] w-full flex flex-col'>
      <span className='mb-[24px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7C5DFA]'>
        Bill From
      </span>
      <div className='flex flex-col'>
        <label
          htmlFor='streetAddress'
          className='mt-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
        >
          Street Address
        </label>
        <input
          type='text'
          id='streetAddress'
          name='streetAddress'
          placeholder='Enter street address'
          className='w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]'
        />
      </div>
      <div className='flex mt-[25px] gap-[24px]'>
        <div>
          <label
            htmlFor='city'
            className='mt-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
          >
            City
          </label>
          <input
            type='text'
            id='city'
            name='city'
            placeholder='Enter city'
            className='max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]'
          />
        </div>

        <div>
          <label
            htmlFor='post code'
            className='mt-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
          >
            Post Code
          </label>
          <input
            type='text'
            id='post code'
            name='post code'
            placeholder='Enter Post Code'
            className='max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]'
          />
        </div>

        <div>
          <label
            htmlFor='country'
            className='mt-[9px]  font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3]'
          >
            Country
          </label>
          <input
            type='text'
            id='country'
            name='country'
            placeholder='Enter country'
            className='max-w-[152px] w-full h-[48px] p-[20px] border border-[#DFE3FA] rounded-[4px] 
            font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#0C0E16]'
          />
        </div>
      </div>
    </div>
  );
}
