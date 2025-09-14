import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useDarkMode } from '@/store/darkMode';

export default function UserBtn() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <button className='my-[24px] cursor-pointer'>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={isDarkMode ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Image
            src='/assets/svg/user_light.svg'
            width={40}
            height={40}
            alt='user'
          />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
