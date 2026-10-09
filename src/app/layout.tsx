import type { Metadata, Viewport } from 'next';
// Bangla o English dutor jonnoi Noto Sans Bengali best
import { Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali', 'latin'], 
  weight: ['300', '400', '500', '600', '700', '800'], 
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Your CR — Organize your semester.',
  description:
    'Classes, exams, assignments, and notices — all in one place. Easy semester management for students and CRs.',
  applicationName: 'Your CR',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
    >
      <body
        suppressHydrationWarning
        className={`${notoSansBengali.variable} font-sans bg-background text-foreground antialiased min-h-screen flex flex-col`}
      >
          {children}
      </body>
    </html>
  );
}