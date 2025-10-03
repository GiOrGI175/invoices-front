'use client';

import axios from 'axios';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useParams, useRouter } from 'next/navigation';
import { UIStatus } from '@/components/_organisms/invoices/Invoices';

type InvoiceMarkPaidPrpsT = {
  uiStatus: string;
  onStatusChange?: (newStatus: UIStatus) => void;
};

export default function InvoiceMarkPaid({
  uiStatus,
  onStatusChange,
}: InvoiceMarkPaidPrpsT) {
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

      await axios.patch(
        `http://localhost:3005/invoice/${id}`,
        { status: 'paid' },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      onStatusChange?.('Paid');

      console.log('succes update');
    } catch (error) {
      console.error('Failed to update status', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={() => handleMarkPaid(id)}
      disabled={uiStatus === 'Paid'}
      className={`w-[131px]  h-[48px] rounded-[24px] ${
        uiStatus === 'Paid' ? 'bg-[#9277FF]' : 'bg-[#7C5DFA]'
      }  hover:bg-[#9277FF] transition-colors duration-500  cursor-pointer `}
    >
      {loading ? (
        <span className='inline-flex items-center gap-2'>
          <span className='inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin' />
        </span>
      ) : (
        <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.25px] text-white'>
          Mark as Paid
        </span>
      )}
    </button>
  );
}
