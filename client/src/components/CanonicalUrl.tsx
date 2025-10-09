'use client';

import { usePathname } from 'next/navigation';
import Head from 'next/head';

export default function CanonicalUrl() {
  const pathname = usePathname();
  const url = `https://kavo.studio${pathname}`;
  
  return (
    <Head>
      <link rel="canonical" href={url} />
    </Head>
  );
}