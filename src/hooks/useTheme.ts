// src/hooks/useTheme.ts
'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/providers/ThemeProvider';

interface UseThemeReturn {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
  isDark: boolean;
  isLight: boolean;
}

export const useTheme = (): UseThemeReturn => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

export default useTheme;