import React from "react";
import RegisterForm from "@/components/auth/register-form";

export const metadata = {
  title: "Register - Your CR",
  description: "Create your account",
};

const RegisterPage = () => {
  return (
    <section className="w-full flex justify-center items-center min-h-[calc(100vh-70px)] px-6 py-12 lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-lg border border-gray-200 rounded-lg p-6">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-2xl sm:text-3xl leading-tight tracking-tight text-gray-900">
            Create an Account
          </h1>
          <p className="text-sm text-gray-600">
            Join Your CR to manage your classes, schedules, and announcements effectively.
          </p>
        </div>
        <RegisterForm />
      </div>
    </section>
  );
};

export default RegisterPage;
