'use client';

import { Inter } from 'next/font/google';
import { useState } from 'react';

import { ThemeSwitch } from './ThemeSwitch';

const inter = Inter({ subsets: ['latin'] });

export const Html = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <html lang="en" data-theme={theme}>
      <body className={`${inter.className}`}>
        {/* <ThemeSwitch theme={theme} setTheme={setTheme} /> */}
        {children}
      </body>
    </html>
  );
};
