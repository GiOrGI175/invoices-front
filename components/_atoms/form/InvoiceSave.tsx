'use client';

type Props = {
  formId: string;
};

export default function InvoiceSave({ formId }: Props) {
  return (
    <button
      type='submit'
      data-action='send'
      form={formId}
      className='w-[128px] h-[48px] rounded-[24px] bg-[#7C5DFA] hover:bg-[#9277FF] transition-colors duration-500 cursor-pointer'
    >
      <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#FFFFFF]'>
        Save & Send
      </span>
    </button>
  );
}
