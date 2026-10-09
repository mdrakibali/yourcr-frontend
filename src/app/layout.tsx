import type { Metadata, Viewport } from 'next';
import {
  Hind_Siliguri,
  Inter,
  Plus_Jakarta_Sans,
  Geist,
} from 'next/font/google';

import './globals.css';
import { cn } from '@/src/lib/utils';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

const hind = Hind_Siliguri({
  subsets: ['bengali', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-bangla',
  display: 'swap',
});
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Your CR — আপনার সেমিস্টার, গুছিয়ে।',
  description:
    'ক্লাস, পরীক্ষা, অ্যাসাইনমেন্ট, নোটিশ — সব এক জায়গায়। বাংলাদেশের শিক্ষার্থী ও CR-দের জন্য সহজ সেমিস্টার ম্যানেজমেন্ট।',
  applicationName: 'Your CR',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn('font-sans', geist.variable)}
    >
      <body
        className={`${hind.variable} ${inter.variable} ${jakarta.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
