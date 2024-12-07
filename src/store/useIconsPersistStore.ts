import { TIconItem } from 'src/services/icons/icons.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IIconsPerisistState {
  icons: TIconItem[] | [];
  setIcons: (icons: { icons: TIconItem[] }) => void;
}

export const useIconsPersistStore = create(
  persist<IIconsPerisistState>(
    (set) => ({
      icons: [],
      setIcons: ({ icons }) => set({ icons }),
    }),
    { name: 'icons' },
  ),
);
