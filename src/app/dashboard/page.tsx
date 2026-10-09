import Link from 'next/link';
import { CalendarDays, ClipboardList, Bell } from 'lucide-react';

export const metadata = {
  title: 'Dashboard - Your CR',
  description: 'Your CR Student Dashboard',
};

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Sidebar */}
      <aside className="hidden w-64 flex-col border-r border-gray-200 bg-white md:flex dark:border-slate-800 dark:bg-slate-900">
        <div className="flex h-16 items-center border-b border-gray-200 px-6 dark:border-slate-800">
          <Link
            href="/"
            className="text-xl font-bold text-teal-600 dark:text-teal-400"
          >
            Your CR
          </Link>
        </div>
        <nav className="flex-1 space-y-1 p-4" aria-label="Sidebar">
          <Link
            href="/dashboard"
            className="flex items-center gap-3 rounded-lg bg-teal-50 px-4 py-3 text-sm font-medium text-teal-700 dark:bg-teal-900/30 dark:text-teal-400"
          >
            <CalendarDays size={20} />
            ড্যাশবোর্ড
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
          >
            <ClipboardList size={20} />
            অ্যাসাইনমেন্ট
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-800"
          >
            <Bell size={20} />
            নোটিশ বোর্ড
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-white px-8 dark:border-slate-800 dark:bg-slate-900">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
            ওভারভিউ
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              স্বাগতম, রাকিব!
            </span>
            <div className="h-8 w-8 rounded-full bg-teal-600"></div>
          </div>
        </header>

        <div className="p-8">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Cards */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                আজকের ক্লাস
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                ৩টি
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                পেন্ডিং অ্যাসাইনমেন্ট
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                ২টি
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800">
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">
                নতুন নোটিশ
              </h3>
              <p className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">
                ১টি
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-800">
            <h2 className="mb-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              আজকের রুটিন
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-gray-100 p-4 dark:border-slate-700">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Software Engineering
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    রুম: ৩০২
                  </p>
                </div>
                <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900/50 dark:text-teal-300">
                  ১০:০০ AM
                </span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-gray-100 p-4 dark:border-slate-700">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">
                    Database Systems
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ল্যাব: ২
                  </p>
                </div>
                <span className="rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900/50 dark:text-teal-300">
                  ১২:৩০ PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
