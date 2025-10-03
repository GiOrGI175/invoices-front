import { create } from 'zustand';

export type StatusL = 'draft' | 'pending' | 'paid';

type FilterState = {
  selected: StatusL[];
  toggle: (s: StatusL) => void;
};

export const useInvoiceFilter = create<FilterState>((set, get) => ({
  selected: [],
  toggle: (s) => {
    const cur = get().selected;
    set({
      selected: cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s],
    });
  },
}));
