'use client';

import Link from 'next/link';
import { Suspense } from 'react';

// This is a client component, so we can't export metadata directly
// Instead, use a server component for the page and move client functionality here

const NotFoundContent = () => {
  return (
    <div className="min-h-screen bg-[#080D10] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center">
        <h1 className="text-5xl md:text-7xl font-black text-yellow-400 mb-6">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Stranica nije pronađena</h2>
        <p className="text-gray-400 mb-8">Tražena stranica ne postoji ili je promijenjena.</p>
        <Link 
          href="/"
          className="inline-block px-8 py-3 bg-yellow-400 text-[#080D10] font-medium rounded-lg hover:bg-yellow-300 transition-colors duration-300"
        >
          Povratak na naslovnicu
        </Link>
      </div>
    </div>
  );
};

export default function NotFound() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#080D10] flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Učitavanje...</div>
      </div>
    }>
      <NotFoundContent />
    </Suspense>
  );
}