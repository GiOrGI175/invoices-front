// store/ui.ts
import { create } from 'zustand';

type UIState = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;

  isOverlay: boolean;
  setIsOverlay: (value: boolean) => void;

  isDelete: boolean;
  setIsDelete: (value: boolean) => void;

  isRegLoader: boolean;
  setIsRegLoader: (value: boolean) => void;

  isCreated: boolean;
  setIsCreated: (value: boolean) => void;

  isEdited: boolean;
  setIsEdited: (value: boolean) => void;
};

export const useOpen = create<UIState>((set) => ({
  isOpen: false,
  setIsOpen: (value) => set({ isOpen: value }),

  isOverlay: false,
  setIsOverlay: (value) => set({ isOverlay: value }),

  isDelete: false,
  setIsDelete: (value) => set({ isDelete: value }),

  isRegLoader: false,
  setIsRegLoader: (value) => set({ isRegLoader: value }),

  isCreated: false,
  setIsCreated: (value) => set({ isCreated: value }),

  isEdited: false,
  setIsEdited: (value) => set({ isEdited: value }),
}));
