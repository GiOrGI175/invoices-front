// store/ui.ts
import { create } from 'zustand';

type UIState = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;

  isOverlay: boolean;
  setIsOverlay: (value: boolean) => void;

  isDelete: boolean;
  setIsDelete: (value: boolean) => void;
};

export const useOpen = create<UIState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),

  isOverlay: false,
  setIsOverlay: (value) => set({ isOverlay: value }),

  isDelete: false,
  setIsDelete: (value) => set({ isDelete: value }),
}));
