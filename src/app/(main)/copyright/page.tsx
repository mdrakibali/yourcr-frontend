import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Copyright Notice - Your CR',
};

const CopyrightPage = () => {
  return (
    <div className="mx-auto max-w-4xl px-4 pt-24 pb-12 sm:px-6 lg:px-8">
      <div className="w-full">
        <h1 className="mb-8 text-3xl font-bold text-gray-900">
          Copyright Notice
        </h1>

        <div className="prose prose-sm sm:prose-base space-y-6 text-gray-600">
          <p>© {new Date().getFullYear()} Your CR. All Rights Reserved.</p>
          <p>
            All content on this website, including text, graphics, logos,
            images, audio clips, digital downloads, and software, is the
            property of Your CR or its content suppliers and protected by
            international copyright laws.
          </p>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">
            1. Use of Content
          </h2>
          <p>
            You may not reproduce, duplicate, copy, sell, resell, or exploit any
            portion of the service, use of the service, or access to the service
            without express written permission by us.
          </p>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">
            2. Trademarks
          </h2>
          <p>
            Your CR's trademarks and trade dress may not be used in connection
            with any product or service that is not Your CR's, in any manner
            that is likely to cause confusion among customers, or in any manner
            that disparages or discredits Your CR.
          </p>
          <h2 className="mt-6 text-xl font-semibold text-gray-900">
            3. Copyright Complaints
          </h2>
          <p>
            We respect the intellectual property of others. If you believe that
            your work has been copied in a way that constitutes copyright
            infringement, please contact us immediately.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CopyrightPage;
