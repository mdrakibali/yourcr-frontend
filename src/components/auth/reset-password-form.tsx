'use client';
import { Button } from '@/components/ui/button';
import { FormInput } from '@/components/ui/form-input';
import { resetPassword, type AuthActionState } from '@/services/auth.service';
import { Lock } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RESET_PASSWORD_INITIAL_STATE } from '@/constants/auth.constants';
import { useActionState, useEffect } from 'react';

const ResetPasswordForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    resetPassword,
    RESET_PASSWORD_INITIAL_STATE
  );

  useEffect(() => {
    if (state.timestamp) {
      if (state.success) {
        if (state.data?.redirect) router.push(state.data.redirect);
      }
    }
  }, [state, router]);

  return (
    <form action={formAction} noValidate className="space-y-5">
      <div className="flex flex-col gap-4">
        <FormInput
          id="password"
          name="password"
          type="password"
          label="New Password"
          icon={Lock}
          placeholder="••••••••"
          defaultValue={state.inputs?.password}
          error={state.errors?.password}
          className="bg-card border-gray-200"
        />

        <FormInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          icon={Lock}
          placeholder="••••••••"
          defaultValue={state.inputs?.confirmPassword}
          error={state.errors?.confirmPassword}
          className="bg-card border-gray-200"
        />
      </div>

      <Button
        type="submit"
        className="bg-primary hover:bg-primary/90 h-10 w-full cursor-pointer rounded-md text-[13px] font-bold text-white shadow-none transition-all active:scale-[0.98] disabled:opacity-70"
        disabled={isPending}
      >
        {isPending ? 'Resetting...' : 'Reset Password'}
      </Button>
    </form>
  );
};

export default ResetPasswordForm;
