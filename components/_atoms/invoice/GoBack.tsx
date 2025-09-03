'use client';

import { div } from 'motion/react-m';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function GoBack() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div className='max-w-[730px] w-full mb-[31px] flex justify-start'>
      <button onClick={handleGoBack} className='flex cursor-pointer'>
        <Image
          src='/assets/svg/arrow_left.svg'
          width={8}
          height={4}
          alt='arrow'
        />
        <span className='font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] text-[#7E88C3] ml-[23px]'>
          Go back
        </span>
      </button>
    </div>
  );
}
