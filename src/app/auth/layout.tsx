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
    <div className="h-screen overflow-y-auto bg-gray-50 flex flex-col relative">
      {/* Auth Navbar */}
      <header className="w-full bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-10">
        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <Link href="/">
          <Image
            src="/assets/yourcr-logo.png"
            alt="Your CR Logo"
            width={120}
            height={36}
            className="object-contain"
          />
        </Link>
      </header>

      {/* Auth Content */}
      <main className="flex-1 w-full bg-white flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}
