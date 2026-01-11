'use client';

import Link from 'next/link';

type HeaderProps = {
  favoritesCount: number;
};

export function Header({ favoritesCount }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          Product Explorer
        </Link>

        <Link
          href="/favorites"
          className="relative text-sm font-medium text-gray-700 hover:text-gray-900"
        >
          Favorites
          {favoritesCount > 0 && (
            <span className="absolute -top-2 -right-3 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-500 px-1 text-xs text-white">
              {favoritesCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
