'use client';

import InvoiceEdit from '@/components/_atoms/invoice/InvoiceEdit';
import InvoiceMarkPaid from '@/components/_atoms/invoice/InvoiceMarkPaid';
import { useDarkMode } from '@/store/darkMode';
import { useOpen } from '@/store/ui';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import { ApiInvoice } from './Invoice';
import { ApiInvoiceStatus, UIStatus } from '../invoices/Invoices';
import Loader from '../invoices/Loader';
import DeleteBtn from '@/components/_atoms/invoice/DeleteBtn';

export default function InvoiceHeader() {
  const [invoice, setInvoice] = useState<ApiInvoice | null>(null);
  const [loading, setLoading] = useState(true);

  const statusColors: Record<string, string> = {
    Paid: 'bg-[#33D69F]',
    Pending: 'bg-[#FF8F00]',
    Draft: 'bg-[#373B53]',
  };

  const statusDarkColors: Record<string, string> = {
    Paid: 'bg-[#33D69F]',
    Pending: 'bg-[#FF8F00]',
    Draft: 'bg-[#DFE3FA]',
  };

  const statusBgColors: Record<string, string> = {
    Paid: 'bg-[#33D69F]/20',
    Pending: 'bg-[#FF8F00]/20',
    Draft: 'bg-[#373B53]/20',
  };

  const statusTextColors: Record<string, string> = {
    Paid: 'text-[#33D69F]',
    Pending: 'text-[#FF8F00]',
    Draft: 'text-[#DFE3FA]',
  };

  const setIsOverlay = useOpen((state) => state.setIsOverlay);
  const setIsDelete = useOpen((state) => state.setIsDelete);
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  const router = useRouter();

  const params = useParams<{ invoicesId?: string; id?: string }>();

  const id = params.invoicesId ?? params.id;

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        if (!id) return;
        const token = Cookies.get('auth_token');
        if (!token) {
          router.replace('/sign-in');
          return;
        }

        const res = await axios.get<ApiInvoice>(
          `https://invoice-back-sqrj.onrender.com/invoice/${id}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setInvoice(res.data);
        console.log(res.data);
      } catch (err: unknown) {
        console.error(err);
        if (axios.isAxiosError(err)) {
          if (err.response?.status === 401) {
            router.replace('/sign-in');
          }
        } else {
          const msg = err instanceof Error ? err.message : 'Unknown error';
          console.error('Unexpected error while fetching invoice:', msg);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchInvoice();
  }, [id, router]);

  if (loading) {
    return <Loader />;
  }

  if (!invoice) {
    return <div>Status not found</div>;
  }

  const toUI = (s: ApiInvoiceStatus): UIStatus =>
    (s.charAt(0).toUpperCase() + s.slice(1)) as UIStatus;

  const toApi = (s: UIStatus): ApiInvoiceStatus =>
    s.toLowerCase() as ApiInvoiceStatus;

  const uiStatus = toUI(invoice.status);

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 1.2,
        stiffness: 120,
      }}
      className={`lg:max-w-[730px] max-lg:max-w-[688px] w-full h-[88px] rounded-[8px] px-[24px] sm:px-[32px] flex justify-between items-center drop-shadow-xl ${
        isDarkMode ? 'bg-[#1E2139]' : 'bg-[#FFFFFF]'
      } transition-colors duration-1000`}
    >
      <div className='max-sm:w-full  flex items-center max-sm:justify-between'>
        {loading ? (
          <span className='inline-flex items-center gap-2'>
            <span className='inline-block h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin' />
          </span>
        ) : (
          <span
            className={`mr-[20px] font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px]    ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#858BB2]'
            } transition-colors duration-1000`}
          >
            Status
          </span>
        )}
        <div
          className={`w-[104px] h-[40px] rounded-[6px] flex items-center justify-center ${statusBgColors[uiStatus]} `}
        >
          <div
            className={`w-[8px] h-[8px] mr-[8px] rounded-full 
                  ${
                    isDarkMode
                      ? ` ${statusDarkColors[uiStatus]}`
                      : `${statusColors[uiStatus]}`
                  } transition-colors duration-1000`}
          />
          <span
            className={`font-league   text-center font-bold text-[15px] leading-[15px] tracking-[-0.25px]  ${
              isDarkMode ? `${statusTextColors[uiStatus]}` : 'text-[#0C0E16]'
            } transition-colors duration-1000`}
          >
            {uiStatus}
          </span>
        </div>
      </div>
      <div className='hidden sm:flex gap-[8px]'>
        {uiStatus === 'Draft' && <InvoiceEdit />}
        <div
          onClick={(e) => {
            e.stopPropagation();
            setIsOverlay(true);
            setIsDelete(true);
          }}
        >
          <DeleteBtn />
        </div>
        <InvoiceMarkPaid
          uiStatus={uiStatus}
          onStatusChange={(s) =>
            setInvoice((prev) => (prev ? { ...prev, status: toApi(s) } : prev))
          }
        />
      </div>
    </motion.div>
  );
}
