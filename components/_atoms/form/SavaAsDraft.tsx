'use client';

type Props = {
  formId: string;
};

export default function SavaAsDraft({ formId }: Props) {
  return (
    <button
      type='submit'
      form={formId}
      data-action='draft'
      className='w-[128px] h-[48px] rounded-[24px] bg-[#373B53] transition-colors hover:bg-[#0C0E16] duration-500 cursor-pointer'
    >
      <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#888EB0]'>
        Save as Draft
      </span>
    </button>
  );
}
