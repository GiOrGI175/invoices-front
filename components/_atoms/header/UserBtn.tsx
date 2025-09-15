import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useDarkMode } from '@/store/darkMode';

export default function UserBtn() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);

  return (
    <button className=' max-lg:w-[96px] max-lg:flex max-lg:justify-center  lg:my-[24px] cursor-pointer'>
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={isDarkMode ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className='hidden lg:block'
        >
          <Image
            src='/assets/svg/user_light.svg'
            width={40}
            height={40}
            alt='user'
          />
        </motion.div>

        <motion.div
          key={isDarkMode ? 'sun2' : 'moon2'}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className='block lg:hidden'
        >
          <Image
            src='/assets/svg/user_light.svg'
            width={32}
            height={32}
            alt='user'
          />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
