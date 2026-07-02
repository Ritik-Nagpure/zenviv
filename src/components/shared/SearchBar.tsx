// src/components/shared/SearchBar.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/cn';
import { useDebounce } from '@/hooks/useDebounce';

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onSearch?: (query: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  variant?: 'default' | 'minimal' | 'expanded';
}

export const SearchBar: React.FC<SearchBarProps> = ({
  className = '',
  placeholder = 'Search...',
  onSearch,
  onFocus,
  onBlur,
  autoFocus = false,
  variant = 'default',
}) => {
  const [query, setQuery] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    if (onSearch && debouncedQuery) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, onSearch]);

  const handleClear = () => {
    setQuery('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
    if (onSearch) {
      onSearch('');
    }
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
    if (variant === 'expanded') {
      setIsExpanded(true);
    }
  };

  const handleBlur = () => {
    if (onBlur) onBlur();
    if (variant === 'expanded') {
      setIsExpanded(false);
    }
  };

  return (
    <div
      className={cn(
        'relative flex items-center rounded-lg border border-gray-300 bg-white transition-all dark:border-gray-700 dark:bg-gray-800',
        isExpanded ? 'w-full sm:w-80' : 'w-48 sm:w-56',
        className
      )}
    >
      <MagnifyingGlassIcon className="absolute left-3 h-5 w-5 text-gray-400 dark:text-gray-500" />
      
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        autoFocus={autoFocus}
        className={cn(
          'w-full bg-transparent py-2 pl-10 pr-8 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none dark:text-white dark:placeholder:text-gray-500',
          variant === 'minimal' && 'pl-8'
        )}
      />
      
      {query && (
        <button
          onClick={handleClear}
          className="absolute right-2 rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <XMarkIcon className="h-4 w-4 text-gray-400 dark:text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;