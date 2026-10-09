import Link from 'next/link';

export const metadata = {
  title: 'Login - Your CR',
  description: 'Log in to your Your CR account.',
};

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 p-4 dark:bg-slate-900">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-teal-700 dark:text-teal-400">
            লগইন
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            আপনার অ্যাকাউন্টে প্রবেশ করুন
          </p>
        </div>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              ইমেইল
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@edu.bd"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              id="password"
              placeholder="********"
              className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-teal-500 focus:ring-teal-500 dark:border-slate-600 dark:bg-slate-700 dark:text-white"
            />
          </div>

          <button
            type="button"
            className="w-full rounded-lg bg-teal-600 px-4 py-3 font-semibold text-white transition hover:bg-teal-700 focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:outline-none"
          >
            লগইন করুন
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          অ্যাকাউন্ট নেই?{' '}
          <Link href="/signup" className="text-teal-600 hover:underline">
            নতুন অ্যাকাউন্ট খুলুন
          </Link>
        </p>
        <p className="mt-4 text-center">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            হোমে ফিরে যান
          </Link>
        </p>
      </div>
    </main>
  );
}
