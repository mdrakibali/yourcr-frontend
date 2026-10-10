import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-card relative flex h-dvh flex-col overflow-y-auto">
      {/* Auth Navbar */}
      <header className="bg-card sticky top-0 z-50 mx-0.5 w-full pt-4">
        <div className="container mx-auto flex h-14 items-center justify-between gap-3">
          <Link href="/" className="group flex min-w-0 shrink-0 items-center">
            <Image
              src="/assets/yourcr-logo.png"
              alt="Your CR Logo"
              width={150}
              height={40}
              className="w-36 object-contain"
            />
          </Link>
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>
      {/* Auth Content */}
      <main className="flex w-full flex-1 flex-col items-center">
        {children}
      </main>
    </div>
  );
}
