import React, { forwardRef } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

import { type FormInputProps } from '@/types/form';

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, icon: Icon, id, ...props }, ref) => {
    const errorMsg = Array.isArray(error) ? error[0] : error;

    return (
      <div className="flex w-full flex-col gap-1.5">
        <Label htmlFor={id} className={cn('text-xs text-gray-700')}>
          {label}
        </Label>
        <div className="relative">
          {Icon && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              <Icon className="h-4 w-4" />
            </div>
          )}
          <Input
            ref={ref}
            id={id}
            className={cn(
              'bg-card',
              Icon && 'pl-9',
              className,
              errorMsg &&
                'border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20'
            )}
            {...props}
          />
        </div>
        {errorMsg && <p className="mt-0.5 text-xs text-red-500">{errorMsg}</p>}
      </div>
    );
  }
);
FormInput.displayName = 'FormInput';

export { FormInput };
