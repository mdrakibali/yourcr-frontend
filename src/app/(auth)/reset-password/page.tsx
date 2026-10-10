import React from 'react';
import ResetPasswordForm from '@/components/auth/reset-password-form';

export const metadata = {
  title: 'Reset Password - Your CR',
};

const ResetPasswordPage = () => {
  return (
    <section className="flex min-h-[calc(100vh-70px)] w-full items-center justify-center px-6 py-12 lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-lg rounded-lg border border-gray-200 p-6">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-xl leading-tight font-semibold tracking-tight text-gray-900 md:text-2xl">
            Create New Password
          </h1>
          <p className="text-xs text-gray-500">
            Please enter your new password to access your account.
          </p>
        </div>
        <ResetPasswordForm />
      </div>
    </section>
  );
};

export default ResetPasswordPage;
