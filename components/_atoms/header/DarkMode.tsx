import { useOpen } from '@/store/ui';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { useDarkMode } from '@/store/darkMode';

export default function DarkMode() {
  const isDarkMode = useDarkMode((state) => state.isDarkMode);
  const toggleDarkMode = useDarkMode((state) => state.toggleDarkMode);

  return (
    <button
      onClick={() => toggleDarkMode()}
      className='lg:pb-[32px] lg:w-[103px] max-lg:w-[96px] max-sm:w-[72px]  max-lg:h-[80px]  max-sm:h-[72px] flex justify-center max-lg:items-center lg:border-b-[1px] max-lg:border-r-[1px] border-[#494E6E]  cursor-pointer'
    >
      <AnimatePresence mode='wait' initial={false}>
        <motion.div
          key={isDarkMode ? 'sun' : 'moon'}
          initial={{ opacity: 0, rotate: -180 }}
          animate={{ opacity: 1, rotate: 0 }}
          exit={{ opacity: 0, rotate: 180 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          <Image
            src={isDarkMode ? '/assets/svg/sun.svg' : '/assets/svg/moon.svg'}
            width={20}
            height={20}
            alt='dark Mode'
            className='transition-all duration-300 ease-in-out'
          />
        </motion.div>
      </AnimatePresence>
    </button>
  );
}
