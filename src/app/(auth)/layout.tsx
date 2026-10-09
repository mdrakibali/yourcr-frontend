import { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/10 p-4">
      {/* This layout centers the auth cards (login, register) */}
      <div className="w-full max-w-md">
        {children}
      </div>
    </div>
  );
}
