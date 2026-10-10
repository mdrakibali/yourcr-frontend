'use client';
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';

interface OtpInputProps {
  id?: string;
  name: string;
  label?: string;
  length?: number;
  defaultValue?: string;
  error?: string | string[];
}

export const OtpInput: React.FC<OtpInputProps> = ({
  id = 'otp',
  name,
  label,
  length = 6,
  defaultValue = '',
  error,
}) => {
  const [otp, setOtp] = useState<string[]>(
    (defaultValue || '')
      .split('')
      .concat(Array(length).fill(''))
      .slice(0, length)
  );

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const errorMsg = Array.isArray(error) ? error[0] : error;

  useEffect(() => {
    if (defaultValue) {
      setOtp(
        defaultValue.split('').concat(Array(length).fill('')).slice(0, length)
      );
    }
  }, [defaultValue, length]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (/[^0-9]/.test(value)) return; // Only allow numbers

    const newOtp = [...otp];
    // take the last character typed (handles pasting or quick typing slightly better if something gets through)
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    // move to next input if a digit was entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      // move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData('text/plain')
      .replace(/[^0-9]/g, '')
      .slice(0, length);
    if (pastedData) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        newOtp[i] = pastedData[i];
      }
      setOtp(newOtp);
      // focus the next empty box or the last box
      const nextIndex = Math.min(pastedData.length, length - 1);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const otpValue = otp.join('');

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <Label htmlFor={id} className="text-xs font-medium text-gray-700">
          {label}
        </Label>
      )}

      {/* Hidden input for form submission */}
      <input type="hidden" name={name} id={id} value={otpValue} />

      <div className="flex items-center justify-between gap-2">
        {Array.from({ length }).map((_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            value={otp[index] || ''}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
            className={cn(
              'bg-card focus-visible:ring-primary flex h-12 w-10 rounded-md border text-center text-lg font-bold transition-colors focus-visible:ring-1 focus-visible:outline-none sm:h-14 sm:w-12',
              errorMsg
                ? 'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20'
                : 'border-input'
            )}
          />
        ))}
      </div>

      {errorMsg && <p className="mt-0.5 text-xs text-red-500">{errorMsg}</p>}
    </div>
  );
};
