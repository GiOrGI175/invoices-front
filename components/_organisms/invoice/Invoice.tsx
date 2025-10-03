'use client';

import ItemsList from '@/components/_molecules/invoice/ItemsList';
import { useDarkMode } from '@/store/darkMode';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loader from '../invoices/Loader';
import { useOpen } from '@/store/ui';

type ApiInvoiceStatus = 'draft' | 'pending' | 'paid';

interface Address {
  street: string;
  city: string;
  postCode: string;
  country: string;
}
interface InvoiceItem {
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface ApiInvoice {
  _id: string;
  clientName: string;
  clientEmail: string;
  clientAddress: Address;
  senderAddress: Address;
  createdAt: string; // ISO
  paymentDue: string; // ISO
  paymentTerms: number;
  description: string;
  status: ApiInvoiceStatus;
  items: InvoiceItem[];
  total: number;
  user: string;
  __v: number;
}

const cap = (s: ApiInvoiceStatus) =>
  (s.charAt(0).toUpperCase() + s.slice(1)) as 'Draft' | 'Pending' | 'Paid';

const fmtDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return iso;
  }
};

export default function Invoice() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  const router = useRouter();
  const params = useParams<{ invoicesId?: string; id?: string }>();

  const isEdited = useOpen((s) => s.isEdited);
  const setIsEdited = useOpen((s) => s.setIsEdited);

  const id = params.invoicesId ?? params.id;

  const [invoice, setInvoice] = useState<ApiInvoice | null>(null);
  const [loading, setLoading] = useState(true);

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
    } catch (err: unknown) {
      console.error(err);

      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          router.replace('/sign-in');
        } else {
          console.error(
            'Failed to fetch invoice:',
            err.response?.status,
            err.response?.data
          );
        }
      } else {
        const msg = err instanceof Error ? err.message : 'Unknown error';
        console.error('Unexpected error while fetching invoice:', msg);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoice();
  }, [id, router]);

  useEffect(() => {
    if (isEdited) {
      fetchInvoice();
      setIsEdited(false);
    }
  }, [isEdited]);

  if (loading) {
    return <Loader />;
  }

  if (!invoice) {
    return (
      <div className='flex items-center justify-center h-64'>
        Invoice is deleted
      </div>
    );
  }

  const uiIdShort = invoice._id.slice(-6);
  const statusCap = cap(invoice.status);
  const createdAt = fmtDate(invoice.createdAt);
  const paymentDue = fmtDate(invoice.paymentDue);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', duration: 1.2, stiffness: 120 }}
      className={`lg:max-w-[730px] max-lg:max-w-[688px] w-full rounded-[8px] mt-[16px] sm:mt-[24px] p-[24px] sm:p-[48px] flex flex-col justify-between drop-shadow-xl ${
        isDarkMode ? 'bg-[#1E2139]' : 'bg-[#FFFFFF]'
      } transition-colors duration-1000`}
    >
      <div className='w-full flex max-sm:flex-col justify-between items-start'>
        <div className='max-sm:mb-[30px] flex flex-col'>
          <span
            className={`font-league font-bold text-[15px] leading-[24px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
            } transition-colors duration-1000`}
          >
            <span className='text-[#888EB0]'>#</span>
            {uiIdShort}
          </span>
          <p
            className={`mt-[7px] font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            {invoice.description}
          </p>
        </div>

        <div className='flex flex-col text-right sm:text-left'>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            {invoice.senderAddress.street}
          </span>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            {invoice.senderAddress.city}
          </span>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            {invoice.senderAddress.postCode}
          </span>
          <span
            className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            {invoice.senderAddress.country}
          </span>
        </div>
      </div>

      <div className='flex max-sm:flex-col mt-[21px] max-sm:gap-[35px] sm:gap-[118px]'>
        <div className='flex max-sm:justify-between sm:gap-[118px]'>
          <div className='flex flex-col gap-[31px]'>
            <div className='flex flex-col'>
              <span
                className={`font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000`}
              >
                Invoice Date
              </span>
              <span
                className={`mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px] ${
                  isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
                } transition-colors duration-1000`}
              >
                {createdAt}
              </span>
            </div>

            <div className='flex flex-col'>
              <span
                className={`font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000`}
              >
                Payment Due
              </span>
              <span
                className={`mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px] ${
                  isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
                } transition-colors duration-1000`}
              >
                {paymentDue}
              </span>
            </div>
          </div>

          <div className='flex flex-col mr-[50px]'>
            <span
              className={`font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
                isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
              } transition-colors duration-1000`}
            >
              Bill To
            </span>
            <span
              className={`mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px] ${
                isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
              } transition-colors duration-1000`}
            >
              {invoice.clientName}
            </span>

            <div className='flex flex-col mt-[7px]'>
              <span
                className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000`}
              >
                {invoice.clientAddress.street}
              </span>
              <span
                className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000`}
              >
                {invoice.clientAddress.city}
              </span>
              <span
                className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000`}
              >
                {invoice.clientAddress.postCode}
              </span>
              <span
                className={`font-league font-medium text-[13px] leading-[18px] tracking-[-0.1px] ${
                  isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
                } transition-colors duration-1000`}
              >
                {invoice.clientAddress.country}
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col'>
          <span
            className={`font-league font-medium text-[13px] leading-[15px] tracking-[-0.1px] ${
              isDarkMode ? 'text-[#DFE3FA]' : 'text-[#7E88C3]'
            } transition-colors duration-1000`}
          >
            Sent to
          </span>
          <span
            className={`mt-[13px] font-league font-medium text-[15px] leading-[20px] tracking-[-0.25px] ${
              isDarkMode ? 'text-[#FFFFFF]' : 'text-[#0C0E16]'
            } transition-colors duration-1000`}
          >
            {invoice.clientEmail}
          </span>
        </div>
      </div>

      <ItemsList
        items={invoice.items}
        total={invoice.total}
        status={statusCap}
      />
    </motion.div>
  );
}
