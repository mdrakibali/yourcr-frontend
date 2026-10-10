import React, { Suspense } from 'react';
import LoginForm from '@/components/auth/login-form';

export const metadata = {
  title: 'Sign In - Your CR',
  description: 'Sign in to your account',
};

const LoginPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-70px)] w-full items-center justify-center px-6 py-12 lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-lg rounded-lg border border-gray-200 p-6">
        {/* Text Content */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-xl leading-tight font-semibold tracking-tight text-gray-900 md:text-2xl">
            Login to Your Account
          </h1>
          <p className="text-xs text-gray-500">
            Welcome back! Please enter your credentials to access class
            schedules and announcements.
          </p>
        </div>
        {/* Form */}
        <Suspense
          fallback={
            <div className="flex justify-center p-8">
              <div className="border-primary h-6 w-6 animate-spin rounded-full border-2 border-t-transparent"></div>
            </div>
          }
        >
          <LoginForm />
        </Suspense>
      </div>
    </section>
  );
};

export default LoginPage;
