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
          <header className="w-full shrink-0 pt-4 pb-2 z-50 bg-card relative">
        <div className="mx-auto w-full transition-all duration-500 ease-in-out h-14 container flex justify-between items-center gap-3">
          <Link href="/" className="flex items-center group min-w-0 shrink-0 justify-self-start">
            <Image
              src="/assets/yourcr-logo.png"
              alt="Your CR Logo"
              width={150}
              height={40}
              className="object-contain transition-all duration-300 w-36"
            />
          </Link>
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors font-medium text-sm shrink-0 justify-self-end col-start-3">
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
