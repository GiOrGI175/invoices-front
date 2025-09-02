// store/ui.ts
import { create } from 'zustand';

type UIState = {
  isOpen: boolean;
  toggleisOpen: () => void;

  isOverlay: boolean;
  toggleOverlay: () => void;
};

export const useOpen = create<UIState>((set) => ({
  isOpen: false,
  toggleisOpen: () => set((s) => ({ isOpen: !s.isOpen })),

  isOverlay: false,
  toggleOverlay: () => set((s) => ({ isOverlay: !s.isOverlay })),
}));
