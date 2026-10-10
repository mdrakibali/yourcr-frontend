'use client';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { FormInput } from '@/components/ui/form-input';
import { Label } from '@/components/ui/label';
import { GoogleAuthButton } from '@/components/auth/google-auth-button';
import { registerUser, type AuthActionState } from '@/services/auth.service';
import { Lock, Mail, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { REGISTER_INITIAL_STATE } from '@/constants/auth.constants';
// import { toast } from "sonner";

const RegisterForm = () => {
  const router = useRouter();
  const [state, formAction, isPending] = useActionState(
    registerUser,
    REGISTER_INITIAL_STATE
  );

  useEffect(() => {
    if (state.timestamp) {
      if (state.success) {
        // toast.success(state.message);
        if (state.data?.redirect) {
          router.push(state.data.redirect);
        }
      } else if (state.message && !state.errors) {
        // toast.error(state.message);
      }
    }
  }, [state, router]);

  return (
    <>
      <form action={formAction} noValidate className="space-y-5">
        <div className="flex flex-col gap-4">
          <FormInput
            id="name"
            name="name"
            label="Full Name"
            icon={User}
            placeholder="e.g. Rahim Uddin"
            defaultValue={state.inputs?.name}
            error={state.errors?.name}
            className="bg-card border-gray-200"
          />

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

        <div className="flex flex-col gap-1.5 py-1">
          <div className="flex items-start space-x-2">
            <Checkbox
              id="acceptTerms"
              name="acceptTerms"
              defaultChecked={state.inputs?.acceptTerms === 'on'}
              className="data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5 border-gray-300"
            />
            <Label
              htmlFor="acceptTerms"
              className="cursor-pointer text-xs leading-relaxed font-medium text-gray-600 select-none"
            >
              I accept the{' '}
              <Link
                href="/terms"
                className="text-primary font-bold hover:underline"
              >
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link
                href="/privacy"
                className="text-primary font-bold hover:underline"
              >
                Privacy Policy
              </Link>
            </Label>
          </div>
          {state.errors?.acceptTerms && (
            <p className="mt-0.5 text-xs text-red-500">
              {state.errors.acceptTerms[0]}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="bg-primary hover:bg-primary/90 h-10 w-full cursor-pointer rounded-md text-[13px] font-bold text-white shadow-none transition-all active:scale-[0.98] disabled:opacity-70"
          disabled={isPending}
        >
          {isPending ? 'Creating Account...' : 'Create Account'}
        </Button>
      </form>

      <div className="mt-8 flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-gray-200"></div>
        <span className="text-xs font-medium text-gray-400">
          OR CONTINUE WITH
        </span>
        <div className="h-px flex-1 bg-gray-200"></div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <GoogleAuthButton />
      </div>

      <p className="mt-8 text-center text-xs text-gray-600">
        Already have an account?{' '}
        <Link href="/login" className="text-primary font-bold hover:underline">
          Sign In here
        </Link>
      </p>
    </>
  );
};

export default RegisterForm;
