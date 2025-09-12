import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type useDarkModeState = {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

export const useDarkMode = create<useDarkModeState>()(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
    }),
    {
      name: 'dark-mode-storage',
    }
  )
);
