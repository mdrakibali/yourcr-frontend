"use client";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { verifyOtp, type AuthActionState } from "@/services/auth.service";
import { KeyRound } from "lucide-react";
import { useRouter } from "next/navigation";
import { VERIFY_OTP_INITIAL_STATE } from "@/constants/auth.constants";
import { useActionState, useEffect } from "react";

const VerifyOtpForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(verifyOtp, VERIFY_OTP_INITIAL_STATE);

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
            id="otp"
            name="otp"
            label="One Time Password (OTP)"
            icon={KeyRound}
            placeholder="123456"
            defaultValue={state.inputs?.otp}
            error={state.errors?.otp}
            className="bg-card border-gray-200"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-10 text-[13px] font-bold bg-primary hover:bg-primary/90 text-white rounded-md transition-all active:scale-[0.98] cursor-pointer disabled:opacity-70"
          disabled={isPending}
        >
          {isPending ? "Verifying..." : "Verify OTP"}
        </Button>
      </form>
  );
};

export default VerifyOtpForm;

