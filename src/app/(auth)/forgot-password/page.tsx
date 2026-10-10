import React from 'react';
import ForgotPasswordForm from '@/components/auth/forgot-password-form';

export const metadata = {
  title: 'Forgot Password - Your CR',
};

const ForgotPasswordPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-70px)] w-full items-center justify-center px-6 py-12 lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-lg rounded-lg border border-gray-200 p-6">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-xl leading-tight tracking-tight text-gray-900">
            Forgot Password
          </h1>
          <p className="text-xs text-gray-500">
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        </div>
        <ForgotPasswordForm />
      </div>
    </section>
  );
};

export default ForgotPasswordPage;
