import { type AuthActionState } from "@/types/auth";

export const LOGIN_INITIAL_STATE: AuthActionState = {
  success: false,
  message: "",
  errors: undefined,
  inputs: {
    email: "",
    password: "",
  },
  timestamp: 0,
};

export const REGISTER_INITIAL_STATE: AuthActionState = {
  success: false,
  message: "",
  errors: undefined,
  inputs: {
    name: "",
    email: "",
    password: "",
  },
  timestamp: 0,
};

export const FORGOT_PASSWORD_INITIAL_STATE: AuthActionState = {
  success: false,
  message: "",
  errors: undefined,
  inputs: {
    email: "",
  },
  timestamp: 0,
};

export const RESET_PASSWORD_INITIAL_STATE: AuthActionState = {
  success: false,
  message: "",
  errors: undefined,
  inputs: {
    password: "",
  },
  timestamp: 0,
};

export const VERIFY_OTP_INITIAL_STATE: AuthActionState = {
  success: false,
  message: "",
  errors: undefined,
  inputs: {
    otp: "",
  },
  timestamp: 0,
};

