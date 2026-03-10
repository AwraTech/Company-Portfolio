'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({ isDark: false, toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

const lightTheme = {
  '--background': '#30504f',
  '--foreground': '#ffffff',
  '--primary': '#00ffab',
  '--primary-hover': '#00e69a',
  '--secondary': '#e0ffff',
  '--card-bg': '#3a5a59',
  '--section-bg': '#3a5a59',
  '--border-color': '#426363',
};

const darkTheme = {
  '--background': '#0a192f',
  '--foreground': '#ffffff',
  '--primary': '#64ffda',
  '--primary-hover': '#52e6c8',
  '--secondary': '#8892b0',
  '--card-bg': '#112240',
  '--section-bg': '#112240',
  '--border-color': '#1e293b',
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    setIsDark(saved === 'dark');
  }, []);

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement;
    const theme = dark ? darkTheme : lightTheme;
    
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
    
    if (dark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  };

  const toggle = () => {
    setIsDark(prev => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      applyTheme(newValue);
      return newValue;
    });
  };

  return <ThemeContext.Provider value={{ isDark, toggle }}>{children}</ThemeContext.Provider>;
}
