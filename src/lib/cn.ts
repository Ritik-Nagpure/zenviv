// src/lib/cn.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names with Tailwind CSS merging
 * Usage: cn('bg-red-500', 'text-white', { 'hidden': isHidden })
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Also export as default for convenience
export default cn;