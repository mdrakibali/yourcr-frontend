import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy - Your CR",
};

const PrivacyPage = () => {
  return (
   <div className="max-w-4xl mx-auto pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
        
        <div className="prose prose-sm text-gray-600 space-y-4">
          <p>
            At Your CR, we take your privacy seriously. This Privacy Policy outlines the types of information we collect, how it is used, and how it is protected.
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-6">1. Information We Collect</h2>
          <p>
            We collect personal information such as your name, email address, and role (student or class representative) when you register for an account. We may also collect usage data to improve our services.
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-6">2. How We Use Your Information</h2>
          <p>
            Your information is used to provide, maintain, and improve the platform, authenticate users, and send necessary notifications regarding classes and schedules.
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-6">3. Data Security</h2>
          <p>
            We implement standard security measures to protect your personal data. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
          </p>
          <h2 className="text-lg font-semibold text-gray-900 mt-6">4. Contact Us</h2>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;

