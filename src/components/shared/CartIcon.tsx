// src/components/shared/CartIcon.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/cn';

interface CartIconProps {
  className?: string;
  itemCount?: number;
  onClick?: () => void;
}

export const CartIcon: React.FC<CartIconProps> = ({
  className = '',
  itemCount = 0,
  onClick,
}) => {
  return (
    <Link
      href="/cart"
      onClick={onClick}
      className={cn(
        'relative rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200',
        className
      )}
    >
      <ShoppingBagIcon className="h-5 w-5" />
      {itemCount > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-purple-600 text-[10px] font-medium text-white">
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;