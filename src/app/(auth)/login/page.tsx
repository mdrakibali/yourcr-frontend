import React from "react";
import LoginForm from "@/components/auth/login-form";

export const metadata = {
  title: "Sign In - Your CR",
  description: "Sign in to your account",
};

const LoginPage = () => {
  return (
    <section className="w-full flex justify-center items-center min-h-[calc(100vh-70px)] px-6 py-12 lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-lg border border-gray-200 rounded-lg p-6">
        {/* Text Content */}
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-xl leading-tight tracking-tight text-gray-900">
            Login to Your Account
          </h1>
          <p className="text-xs text-gray-500">
            Welcome back! Please enter your credentials to access class
            schedules and announcements.
          </p>
        </div>
        {/* Form */}
        <LoginForm />
      </div>
    </section>
  );
};

export default LoginPage;

