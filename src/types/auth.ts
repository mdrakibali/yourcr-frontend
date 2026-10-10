export interface AuthActionState {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  inputs?: Record<string, any>;
  data?: any;
  timestamp?: number;
}

