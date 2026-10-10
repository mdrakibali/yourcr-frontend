import * as React from 'react';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(
          'border-primary ring-offset-background relative flex h-4 w-4 shrink-0 items-center justify-center overflow-hidden rounded-lg border focus-within:outline-none',
          className
        )}
      >
        <input
          type="checkbox"
          className="peer absolute inset-0 m-0 h-full w-full cursor-pointer opacity-0"
          ref={ref}
          {...props}
        />
        <div className="bg-primary text-primary-foreground pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity peer-checked:opacity-100">
          <Check className="h-3 w-3 stroke-3" />
        </div>
      </div>
    );
  }
);
Checkbox.displayName = 'Checkbox';

export { Checkbox };
