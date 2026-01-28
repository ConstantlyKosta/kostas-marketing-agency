import './globals.css';
import type { ReactNode } from 'react';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  subsets: ['latin', 'cyrillic', 'hebrew'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-body'
});

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={rubik.variable}>{children}</body>
    </html>
  );
}
