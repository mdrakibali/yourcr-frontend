import React, { forwardRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

import { type FormInputProps } from "@/types/form";

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className, label, error, icon: Icon, id, ...props }, ref) => {
    const errorMsg = Array.isArray(error) ? error[0] : error;

    return (
      <div className="flex flex-col gap-1.5 w-full">
        <Label htmlFor={id} className={cn("text-[13px] font-medium text-gray-700")}>
          {label}
        </Label>
        <div className="relative">
          {Icon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Icon className="w-4 h-4" />
            </div>
          )}
          <Input
            ref={ref}
            id={id}
            className={cn(
              "bg-card",
              Icon && "pl-9",
              className,
              errorMsg && "border-red-500 focus-visible:border-red-500 focus-visible:ring-red-500/20"
            )}
            {...props}
          />
        </div>
        {errorMsg && (
          <p className="text-xs text-red-500 mt-0.5">{errorMsg}</p>
        )}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";

export { FormInput };

