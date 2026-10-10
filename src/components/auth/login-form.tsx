'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormInput } from '@/components/ui/form-input';
import { Label } from '@/components/ui/label';
import { Modal } from '@/components/ui/modal';
import { GoogleAuthButton } from '@/components/auth/google-auth-button';
import { loginUser, type AuthActionState } from '@/services/auth.service';
import { getDefaultDashboardRoute } from '@/utils/auth-utils';
import { Clock, Lock, Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useActionState, useEffect, useState } from 'react';
import { LOGIN_INITIAL_STATE } from '@/constants/auth.constants';

const LoginForm = () => {
  const [isPendingModalOpen, setIsPendingModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [state, formAction, isPending] = useActionState(
    loginUser,
    LOGIN_INITIAL_STATE
  );
  const [lastActionTimestamp, setLastActionTimestamp] = useState<number>(0);

  useEffect(() => {
    if (state.timestamp && state.timestamp > lastActionTimestamp) {
      setLastActionTimestamp(state.timestamp);
      if (state.success) {
        const loginData = state.data;
        if (loginData?.isCrApproved === false) {
          setIsPendingModalOpen(true);
          return;
        }
        // toast.success(state.message);
        console.log('Success:', state.message);
        const callbackUrl = searchParams?.get('redirect');

        if (loginData?.redirect) {
          router.push(loginData.redirect);
          return;
        }

        if (callbackUrl) {
          router.push(callbackUrl);
          return;
        }

        const userRole = loginData?.user?.role;
        if (userRole) {
          router.push(getDefaultDashboardRoute(userRole));
        } else {
          router.push('/');
        }
      } else if (state.message && !state.errors) {
        // toast.error(state.message);
        console.error('Error:', state.message);
      }
    }
  }, [state, router, searchParams, lastActionTimestamp]);

  return (
    <>
      <Modal
        isOpen={isPendingModalOpen}
        onClose={() => setIsPendingModalOpen(false)}
        title="Account Status"
      >
        <div className="flex flex-col items-center py-2 text-center">
          <div className="mb-6 flex size-16 items-center justify-center rounded-md border border-amber-100 bg-amber-50 text-amber-600">
            <Clock className="size-8" />
          </div>

          <h3 className="mb-3 text-lg font-bold text-gray-900">
            Application Under Review
          </h3>

          <p className="mb-8 px-2 text-xs leading-relaxed text-gray-500">
            Your CR registration has been successfully received. Our team is
            currently verifying your documents. You will receive an email
            confirmation once the review process is complete.
          </p>

          <div className="w-full pt-2">
            <Button
              onClick={() => setIsPendingModalOpen(false)}
              className="bg-primary h-10 w-full cursor-pointer rounded-md text-[13px] font-semibold text-white shadow-none transition-all active:scale-[0.98]"
            >
              Continue
            </Button>
          </div>
        </div>
      </Modal>

      <form action={formAction} noValidate className="space-y-5">
        <div className="flex flex-col gap-4">
          <FormInput
            id="email"
            name="email"
            label="Email Address"
            icon={Mail}
            placeholder="e.g. rahim@example.com"
            defaultValue={state.inputs?.email}
            error={state.errors?.email}
            className="bg-card border-gray-200"
          />

          <FormInput
            id="password"
            name="password"
            type="password"
            label="Password"
            icon={Lock}
            placeholder="••••••••"
            defaultValue={state.inputs?.password}
            error={state.errors?.password}
            className="bg-card border-gray-200"
          />
        </div>

        <div className="flex items-center justify-between py-1">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="remember"
              name="remember"
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary rounded-sm border-gray-300"
            />
            <Label
              htmlFor="remember"
              className="cursor-pointer text-xs font-medium text-gray-600 select-none"
            >
              Keep me signed in
            </Label>
          </div>
          <Link
            href="/forgot-password"
            className="text-primary hover:text-primary/80 text-xs font-medium transition-colors"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          className="bg-primary hover:bg-primary/90 h-10 w-full cursor-pointer rounded-md text-[13px] font-bold text-white shadow-none transition-all active:scale-[0.98] disabled:opacity-70"
          disabled={isPending}
        >
          {isPending ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
              Verifying...
            </span>
          ) : (
            'Sign In to Your Account'
          )}
        </Button>
      </form>

      {/* Social Login Divider */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-gray-200"></div>
        <span className="text-xs font-medium text-gray-400">
          OR CONTINUE WITH
        </span>
        <div className="h-px flex-1 bg-gray-200"></div>
      </div>

      {/* Social Login Buttons (Mock) */}
      <div className="mt-6 flex flex-col gap-3">
        <GoogleAuthButton />
      </div>

      <p className="mt-8 text-center text-xs text-gray-600">
        Don't have an account?{' '}
        <Link
          href="/register"
          className="text-primary font-bold hover:underline"
        >
          Register here
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
