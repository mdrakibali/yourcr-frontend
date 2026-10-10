import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Terms and Conditions - Your CR',
};

const TermsPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      <div className="w-full">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">
          Terms and Conditions
        </h1>

        <div className="prose prose-sm space-y-4 text-gray-600">
          <p>
            Welcome to Your CR! By accessing or using our platform, you agree to
            comply with and be bound by these Terms and Conditions. Please read
            them carefully.
          </p>
          <h2 className="mt-6 text-lg font-semibold text-gray-900">
            1. Acceptance of Terms
          </h2>
          <p>
            By creating an account, you accept these terms. If you do not agree,
            you may not use the platform.
          </p>
          <h2 className="mt-6 text-lg font-semibold text-gray-900">
            2. User Responsibilities
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account.
          </p>
          <h2 className="mt-6 text-lg font-semibold text-gray-900">
            3. Data Privacy
          </h2>
          <p>
            Your privacy is important to us. We will handle your personal
            information in accordance with our Privacy Policy.
          </p>
          <h2 className="mt-6 text-lg font-semibold text-gray-900">
            4. Modifications
          </h2>
          <p>
            We reserve the right to modify these terms at any time. Changes will
            be effective immediately upon posting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
