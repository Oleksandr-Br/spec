import { create } from 'zustand';

export type Detail = [
  id: number,
  name: string,
  w: number,
  h: number,
  count: number,
  material: string,
  boxNum: number,
  color: string,
  k1: string,
  k2: string,
  k3: string,
  k4: string,
  rotate: boolean,
];

export interface Datalis {
  details: Detail[];
  addItem: (newItem: Detail) => void;
  addItems: (newItems: Detail[]) => void;
}

export const useDetails = create<Datalis>((set) => ({
  details: [],
  addItem: (newItem: Detail) => set((state) => ({ details: [...state.details, newItem] })),
  addItems: (newItems: Detail[]) => set((state) => ({ details: newItems })),
}));
