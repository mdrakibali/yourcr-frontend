import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Terms and Conditions - Your CR",
};

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <Link href="/register" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Register
        </Link>
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Terms and Conditions</h1>
        
        <div className="prose prose-sm text-gray-600 space-y-4">
          <p>
            Welcome to Your CR! By accessing or using our platform, you agree to comply with and be bound by these Terms and Conditions. Please read them carefully.
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-6">1. Acceptance of Terms</h2>
          <p>
            By creating an account, you accept these terms. If you do not agree, you may not use the platform.
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-6">2. User Responsibilities</h2>
          <p>
            You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-6">3. Data Privacy</h2>
          <p>
            Your privacy is important to us. We will handle your personal information in accordance with our Privacy Policy.
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-6">4. Modifications</h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;

