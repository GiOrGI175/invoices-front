'use client';

import RegisterLoader from '@/components/_atoms/auth/RegisterLoader';
import Overlay from '@/components/_atoms/invoices/Overlay';
import SignIn from '@/components/_organisms/auth/SignIn';
import { motion } from 'framer-motion';
export default function page() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: 'spring',
        duration: 1.2,
        stiffness: 120,
      }}
      className='flex items-center w-full h-[100vh] bg-[#F8F8FB]'
    >
      <div className='m-auto sm:w-[74%] md:m-auto'>
        <SignIn />
      </div>

      <RegisterLoader />

      <Overlay />
    </motion.div>
  );
}
