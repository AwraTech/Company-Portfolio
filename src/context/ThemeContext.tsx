'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ isDark: false, toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDarkMode = saved === 'dark';
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    }
  }, []);

  const toggle = () => {
    setIsDark(prev => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      if (newValue) {
        document.documentElement.classList.add('dark');
        document.body.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('dark');
      }
      return newValue;
    });
  };

  return <ThemeContext.Provider value={{ isDark, toggle }}>{children}</ThemeContext.Provider>;
}
