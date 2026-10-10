'use client';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/ui/form-input';
import { forgotPassword, type AuthActionState } from '@/services/auth.service';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FORGOT_PASSWORD_INITIAL_STATE } from '@/constants/auth.constants';
import { useActionState, useEffect } from 'react';

const ForgotPasswordForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    forgotPassword,
    FORGOT_PASSWORD_INITIAL_STATE
  );

  useEffect(() => {
    if (state.timestamp) {
      if (state.success) {
        if (state.data?.redirect) router.push(state.data.redirect);
      }
    }
  }, [state, router]);

  return (
    <>
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
        </div>

        <Button
          type="submit"
          className="bg-primary hover:bg-primary/90 h-10 w-full cursor-pointer rounded-md text-[13px] font-bold text-white shadow-none transition-all active:scale-[0.98] disabled:opacity-70"
          disabled={isPending}
        >
          {isPending ? 'Sending...' : 'Send Reset Link'}
        </Button>
      </form>

      <p className="mt-8 text-center text-xs text-gray-600">
        Remember your password?{' '}
        <Link href="/login" className="text-primary font-bold hover:underline">
          Sign In
        </Link>
      </p>
    </>
  );
};

export default ForgotPasswordForm;
