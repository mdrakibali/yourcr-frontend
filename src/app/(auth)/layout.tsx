import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-dvh overflow-y-auto bg-card flex flex-col relative">
      {/* Auth Navbar */}
      <header className="sticky top-0 z-50 w-full pt-4 bg-card mx-0.5">
        <div className="container mx-auto h-14 flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center group min-w-0 shrink-0">
            <Image
              src="/assets/yourcr-logo.png"
              alt="Your CR Logo"
              width={150}
              height={40}
              className="object-contain w-36"
            />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>
      {/* Auth Content */}
      <main className="flex-1 w-full flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
