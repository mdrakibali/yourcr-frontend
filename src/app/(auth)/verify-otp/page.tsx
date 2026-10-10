import React from "react";
import VerifyOtpForm from "@/components/auth/verify-otp-form";

export const metadata = {
  title: "Verify OTP - Your CR",
};

const VerifyOtpPage = () => {
  return (
    <section className="w-full flex justify-center items-center min-h-[calc(100vh-70px)] px-6 py-12 lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-lg border border-gray-200 rounded-lg p-6">
        <div className="mb-8 text-center">
          <h1 className="mb-2 text-xl md:text-2xl font-semibold  leading-tight tracking-tight text-gray-900">
            Verify OTP
          </h1>
          <p className="text-xs text-gray-500">
            Enter the 6-digit code sent to your email to verify your identity.
          </p>
        </div>
        <VerifyOtpForm />
      </div>
    </section>
  );
};

export default VerifyOtpPage;
