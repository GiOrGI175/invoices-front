'use client';

import Image from 'next/image';

export default function Header() {
  return (
    <header className='w-[800px] h-[100dvh] flex flex-col justify-between'>
      <div>
        <Image src='assets/svg/Logo.svg' width={40} height={40} alt='Logo' />
        <div />
      </div>

      <div>
        <button>
          <Image
            src='assets/svg/moon.scg'
            width={20}
            height={20}
            alt='dark Mode'
          />
        </button>
        <button>
          <Image
            src='assets/svg/user_light.scg'
            width={20}
            height={20}
            alt='dark Mode'
          />
        </button>
      </div>
    </header>
  );
}
