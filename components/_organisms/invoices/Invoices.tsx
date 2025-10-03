'use client';

import InvoicesEmpty from '@/components/_molecules/invoices/InvoicesEmpty';
import { useDarkMode } from '@/store/darkMode';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { useRouter } from 'next/navigation';
import StatusIcon from '@/components/_atoms/invoices/StatusIcon';
import axios from 'axios';
import Cookies from 'js-cookie';
import Loader from './Loader';
import { useInvoiceFilter } from '@/store/filter';
import { useOpen } from '@/store/ui';

export type ApiInvoiceStatus = 'draft' | 'pending' | 'paid';

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
interface ApiInvoice {
  _id: string;
  clientName: string;
  clientEmail: string;
  clientAddress: Address;
  senderAddress: Address;
  createdAt: string;
  paymentDue: string;
  paymentTerms: number;
  description: string;
  status: ApiInvoiceStatus;
  items: InvoiceItem[];
  total: number;
  user: string;
  __v: number;
}

export type UIStatus = 'Draft' | 'Pending' | 'Paid';
interface UIInvoice {
  id: string;
  dueDate: string;
  clientName: string;
  amount: number;
  status: UIStatus;
}

const cap = (s: ApiInvoiceStatus): UIStatus =>
  (s.charAt(0).toUpperCase() + s.slice(1)) as UIStatus;

const fmtDue = (iso: string) => {
  try {
    const d = new Date(iso);
    return `Due ${d.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })}`;
  } catch {
    return `Due ${iso}`;
  }
};

export default function Invoices() {
  const router = useRouter();
  const isDarkMode = useDarkMode((s) => s.isDarkMode);

  const setIsCreated = useOpen((s) => s.setIsCreated);
  const isCreated = useOpen((s) => s.isCreated);

  const [invoices, setInvoices] = useState<UIInvoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [itemLoading, setItemLoading] = useState(false);

  const fetchInvoices = async () => {
    try {
      const token = Cookies.get('auth_token');
      if (!token) {
        router.replace('/sign-in');
        return;
      }

      const res = await axios.get<ApiInvoice[]>(
        'https://invoice-back-sqrj.onrender.com/invoice',
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const ui: UIInvoice[] = res.data.map((inv) => ({
        id: inv._id,
        dueDate: fmtDue(inv.paymentDue),
        clientName: inv.clientName,
        amount: inv.total,
        status: cap(inv.status),
      }));

      setInvoices(ui);
    } catch (err: unknown) {
      console.error(err);

      if (axios.isAxiosError(err)) {
        if (err.response?.status === 401) {
          router.replace('/sign-in');
        } else {
          console.error(
            'Failed to fetch invoices:',
            err.response?.status,
            err.response?.data
          );
        }
      } else {
        const msg = err instanceof Error ? err.message : 'Unknown error';
        console.error('Unexpected error while fetching invoices:', msg);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [router]);

  useEffect(() => {
    if (isCreated) {
      fetchInvoices();
      setIsCreated(false);
    }
  }, [isCreated]);

  const selected = useInvoiceFilter((s) => s.selected);

  const visibleInvoices = invoices.filter((inv) => {
    if (selected.length === 0) return true;
    return selected.includes(
      inv.status.toLowerCase() as 'draft' | 'pending' | 'paid'
    );
  });

  const handleInvoiceClick = (e: React.MouseEvent, invoiceId: string) => {
    e.preventDefault();
    setItemLoading(true);
    // აბსოლუტური ბილდი — ყოველთვის იმუშავებს სწორად
    router.push(`/invoices/${invoiceId}`);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
    exit: {
      opacity: 0,
      x: 24,
      marginBottom: 0,
      transition: { duration: 0.35 },
    },
  };

  return (
    <div className='relative z-10 lg:max-w-[730px] max-lg:max-w-[672px] w-full lg:mt-[64px] max-lg:mt-[55px]'>
      {loading ? (
        <Loader />
      ) : visibleInvoices.length === 0 ? (
        <InvoicesEmpty />
      ) : (
        <motion.div
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <AnimatePresence>
            {visibleInvoices.map((item) => (
              <motion.div
                key={item.id}
                layout
                variants={itemVariants}
                style={{ overflow: 'hidden' }}
                onClick={(e) => handleInvoiceClick(e, item.id)}
                className={`relative w-full h-[327px] sm:h-[72px] mb-[16px] max-sm:py-[25px] sm:pt-[30px] max-sm:px-[24px] sm:pb-[27px] lg:pr-[24px] sm:max-lg:px-[24px] lg:pl-[32px] rounded-[8px] flex max-sm:flex-col items-center justify-between
                  ${isDarkMode ? 'bg-[#1E2139]' : 'bg-white'}
                  ${item.status === 'Draft' ? '' : 'drop-shadow-xl'}
                  border-[1px] border-transparent hover:border-[#7C5DFA] transition-colors duration-500 cursor-pointer`}
              >
                <div className='max-sm:w-full max-sm:justify-between flex sm:items-center max-sm:mb-[9px] gap-[51px]'>
                  <div className='flex max-sm:flex-col sm:items-center max-sm:gap-[24px] sm:gap-[28px]'>
                    <span
                      className={`font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] ${
                        isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                      } transition-colors duration-1000`}
                    >
                      <span className='font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] text-[#888EB0]'>
                        #
                      </span>
                      {item.id.slice(-6)}
                    </span>
                    <span
                      className={`max-lg:min-w-[55px] max-lg:text-center font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] ${
                        isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                      } transition-colors duration-1000`}
                    >
                      {item.dueDate}
                    </span>
                  </div>
                  <span
                    className={`max-lg:text-center font-league font-medium text-[15px] leading-[15px] tracking-[-0.1px] ${
                      isDarkMode ? 'text-[#DFE3FA]' : 'text-[#888EB0]'
                    } transition-colors duration-1000`}
                  >
                    {item.clientName}
                  </span>
                </div>

                <div className='max-sm:w-full max-sm:justify-between flex items-center gap-[40px]'>
                  <span
                    className={`max-lg:min-w-[71px] font-league font-bold text-[15px] leading-[15px] tracking-[-0.25px] ${
                      isDarkMode ? 'text-white' : 'text-[#0C0E16]'
                    } transition-colors duration-1000`}
                  >
                    $ {item.amount}
                  </span>
                  <div className='flex items-center gap-[20px]'>
                    <div className='hidden sm:block'>
                      <StatusIcon item={item} />
                    </div>
                    <Image
                      src='/assets/svg/arrow_right.svg'
                      width={8}
                      height={4}
                      alt='arrow to open'
                      className='max-sm:hidden'
                    />
                  </div>
                </div>
                <div className='block sm:hidden absolute bottom-[28px] right-[24px]'>
                  <StatusIcon item={item} />
                </div>
              </motion.div>
            ))}

            {itemLoading && (
              <div className='fixed inset-0 z-40 flex items-center justify-center p-4 sm:p-6'>
                <Loader />
              </div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
}
