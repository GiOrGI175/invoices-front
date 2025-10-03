'use client';

import { useOpen } from '@/store/ui';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export default function InvoiceDelete() {
  const setIsDelete = useOpen((state) => state.setIsDelete);
  const setIsOverlay = useOpen((state) => state.setIsOverlay);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const params = useParams<{ invoicesId?: string; id?: string }>();

  const id = params.invoicesId ?? params.id;

  const handleMarkPaid = async (id: string | undefined) => {
    try {
      setLoading(true);

      const token = Cookies.get('auth_token');
      if (!token) {
        router.replace('/sign-in');
        return;
      }

      await axios.delete(`http://localhost:3005/invoice/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log('succes delete');

      router.replace('/');
    } catch (error) {
      console.error('Failed to update status', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={() => {
        setIsDelete(false);
        setIsOverlay(false);
        handleMarkPaid(id);
      }}
      className='w-[89px]  h-[48px] rounded-[24px] bg-[#EC5757] hover:bg-[#FF9797] transition-colors duration-500 cursor-pointer'
    >
      {loading ? (
        <span className='inline-flex items-center gap-2'>
          <span className='inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin' />
        </span>
      ) : (
        <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.25px] text-[#FFFFFF]'>
          Delete
        </span>
      )}
    </button>
  );
}
