'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const token = Cookies.get('auth_token');

    if (!token) {
      router.replace('/sign-in');
    } else {
      setMounted(true);
    }
  }, [router]);

  // არ აჩვენო არაფერი სანამ შემოწმება არ დასრულდება
  if (!mounted) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#7c5dfa] mx-auto'></div>
          <p className='mt-4 text-gray-600'>Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
