import { FC, PropsWithChildren } from 'react';

import type { Metadata } from 'next';
import { getLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';

import Providers from '@/app/providers';
import { cn } from '@/lib/utils';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SignUp App',
  description: 'SignUp Test Application',
};

const LayoutMain: FC<PropsWithChildren> = async ({ children }) => {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body className={cn('bg-main-gradient text-main-text antialiased', inter.className)}>
        <main className='min-h-screen bg-main-image bg-repeat lg:bg-auto'>
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
};

export default LayoutMain;
