'use client';
import { appConfig } from '@/config';
import { ThemePalette } from '@/themes/types';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type UseThemeToggle = {
  palette: ThemePalette;
  themeToggle: (palette: ThemePalette) => void;
};

export const useThemeToggle = create(
  persist<UseThemeToggle>(
    (set) => ({
      palette: appConfig.theme.defaultTheme,
      themeToggle: (palette: ThemePalette) => {
        set({ palette });
      },
    }),
    {
      name: `${appConfig.name}-theme`,
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
