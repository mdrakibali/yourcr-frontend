"use client";
import { Button } from "@/components/ui/button";
import { FormInput } from "@/components/ui/form-input";
import { resetPassword, type AuthActionState } from "@/services/auth.service";
import { Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { RESET_PASSWORD_INITIAL_STATE } from "@/constants/auth.constants";
import { useActionState, useEffect } from "react";

const ResetPasswordForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(resetPassword, RESET_PASSWORD_INITIAL_STATE);

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
        </div>

        <Button
          type="submit"
          className="w-full h-10 text-sm font-bold bg-primary hover:bg-primary/90 text-white rounded-md transition-all active:scale-[0.98] cursor-pointer disabled:opacity-70"
          disabled={isPending}
        >
          {isPending ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
  );
};

export default ResetPasswordForm;

