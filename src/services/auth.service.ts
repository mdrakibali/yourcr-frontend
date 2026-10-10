"use server";

import { type AuthActionState } from "@/types/auth";
export type { AuthActionState };
import {
  loginSchema,
  registerSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
  verifyOtpSchema,
} from "@/validations/auth.schema";
import { getDefaultDashboardRoute } from "@/utils/auth-utils";

export async function loginUser(
  prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const values = Object.fromEntries(formData.entries());
  const parsed = loginSchema.safeParse(values);
  
  if (!parsed.success) {
    return {
      success: false,
      message: "Invalid fields",
      errors: parsed.error.flatten().fieldErrors,
      inputs: values,
      timestamp: Date.now(),
    };
  }

  try {
    const isMockError = false; 
    if (isMockError) {
      return { success: false, message: "Failed to login", inputs: values, timestamp: Date.now() };
    }

    const loginData = {
      user: { role: "student" },
    };
    
    const userRole = loginData?.user?.role;
    
    return {
      success: true,
      message: "Logged in successfully",
      data: { ...loginData, redirect: userRole ? getDefaultDashboardRoute(userRole) : "/dashboard" },
      timestamp: Date.now(),
    };
  } catch (error: any) {
    return { success: false, message: error.message || "Failed to login", inputs: values, timestamp: Date.now() };
  }
}

export async function registerUser(
  prevState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  const values = Object.fromEntries(formData.entries());
  const parsed = registerSchema.safeParse(values);
  
  if (!parsed.success) {
    return { success: false, message: "Invalid fields", errors: parsed.error.flatten().fieldErrors, inputs: values, timestamp: Date.now() };
  }
  
  return { success: true, message: "Registration successful. Please verify OTP.", data: { redirect: "/auth/verify-otp" }, timestamp: Date.now() };
}

export async function forgotPassword(prevState: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const values = Object.fromEntries(formData.entries());
  const parsed = forgotPasswordSchema.safeParse(values);
  if (!parsed.success) return { success: false, message: "Invalid fields", errors: parsed.error.flatten().fieldErrors, inputs: values, timestamp: Date.now() };
  return { success: true, message: "Reset link sent to email.", data: { redirect: "/auth/reset-password" }, timestamp: Date.now() };
}

export async function resetPassword(prevState: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const values = Object.fromEntries(formData.entries());
  const parsed = resetPasswordSchema.safeParse(values);
  if (!parsed.success) return { success: false, message: "Invalid fields", errors: parsed.error.flatten().fieldErrors, inputs: values, timestamp: Date.now() };
  return { success: true, message: "Password reset successfully.", data: { redirect: "/auth/login" }, timestamp: Date.now() };
}

export async function verifyOtp(prevState: AuthActionState, formData: FormData): Promise<AuthActionState> {
  const values = Object.fromEntries(formData.entries());
  const parsed = verifyOtpSchema.safeParse(values);
  if (!parsed.success) return { success: false, message: "Invalid fields", errors: parsed.error.flatten().fieldErrors, inputs: values, timestamp: Date.now() };
  return { success: true, message: "OTP verified.", data: { redirect: "/auth/login" }, timestamp: Date.now() };
}
