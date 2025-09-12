'use client';
export default function AddNewItem() {
  return (
    <div className='w-full h-[48px] mt-[18px] mb-[48px] flex justify-center items-center'>
      <button className='max-w-[350px] w-full h-full rounded-[24px] cursor-pointer bg-transparent hover:bg-[#DFE3FA] transition-colors duration-500'>
        <span className='font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] text-[#7E88C3]'>
          + Add New Item
        </span>
      </button>
    </div>
  );
}
