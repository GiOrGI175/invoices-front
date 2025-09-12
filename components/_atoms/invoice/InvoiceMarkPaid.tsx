'use client';

export default function InvoiceMarkPaid() {
  return (
    <button className='w-[131px]  h-[48px] rounded-[24px] bg-[#7C5DFA] hover:bg-[#9277FF] transition-colors duration-500  cursor-pointer'>
      <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.25px] text-[#FFFFFF]'>
        Mark as Paid
      </span>
    </button>
  );
}
