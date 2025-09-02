// store/ui.ts
import { create } from 'zustand';

type UIState = {
  isOpen: boolean;
  toggleisOpen: () => void;
  setOpen: (v: boolean) => void;
};

export const useUI = create<UIState>((set) => ({
  isOpen: false,
  toggleisOpen: () => set((s) => ({ isOpen: !s.isOpen })),
  setOpen: (v) => set({ isOpen: v }),
}));
