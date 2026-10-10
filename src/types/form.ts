import { InputProps } from '@/components/ui/input';
import { LucideIcon } from 'lucide-react';

export interface FormInputProps extends InputProps {
  label: string;
  error?: string[] | string;
  icon?: LucideIcon;
}
