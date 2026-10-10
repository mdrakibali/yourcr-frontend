import * as React from "react"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("relative flex items-center justify-center h-4 w-4 shrink-0 rounded border border-primary ring-offset-background focus-within:outline-none overflow-hidden", className)}>
        <input
          type="checkbox"
          className="peer absolute inset-0 opacity-0 w-full h-full cursor-pointer m-0"
          ref={ref}
          {...props}
        />
        <div className="absolute inset-0 bg-primary text-primary-foreground opacity-0 peer-checked:opacity-100 flex items-center justify-center pointer-events-none transition-opacity">
          <Check className="h-3 w-3 stroke-2" />
        </div>
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
