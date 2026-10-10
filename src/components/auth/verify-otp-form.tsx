'use client';
import { Button } from '@/components/ui/button';
import { OtpInput } from '@/components/ui/otp-input';
import { verifyOtp, type AuthActionState } from '@/services/auth.service';
import { useRouter } from 'next/navigation';
import { VERIFY_OTP_INITIAL_STATE } from '@/constants/auth.constants';
import { useActionState, useEffect } from 'react';

const VerifyOtpForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    verifyOtp,
    VERIFY_OTP_INITIAL_STATE
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
        <OtpInput
          id="otp"
          name="otp"
          label="One Time Password (OTP)"
          length={6}
          defaultValue={state.inputs?.otp}
          error={state.errors?.otp}
        />
      </div>

      <Button
        type="submit"
        className="bg-primary hover:bg-primary/90 h-10 w-full cursor-pointer rounded-md text-[13px] font-bold text-white shadow-none transition-all active:scale-[0.98] disabled:opacity-70"
        disabled={isPending}
      >
        {isPending ? 'Verifying...' : 'Verify OTP'}
      </Button>
    </form>
  );
};

export default VerifyOtpForm;
