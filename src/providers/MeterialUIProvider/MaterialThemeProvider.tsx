'use client';
import { theme } from '@/themes';
import { useThemeToggle } from '@/themes/store/useThemeToggle';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { PropsWithChildren } from 'react';
import NextAppDirEmotionCacheProvider from './EmotionCache/EmotionCache';

function MaterialThemeProvider({ children }: PropsWithChildren) {
  const { palette } = useThemeToggle();

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeProvider theme={theme(palette, 'ltr')}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}

export default MaterialThemeProvider;
