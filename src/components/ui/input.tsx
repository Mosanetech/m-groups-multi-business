import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(
          `
          flex
          h-11
          w-full
          rounded-xl
          border
          border-gray-300
          bg-white
          px-4
          text-sm
          text-gray-900
          placeholder:text-gray-400
          outline-none
          transition

          focus:border-black
          focus:ring-2
          focus:ring-black/10

          disabled:cursor-not-allowed
          disabled:opacity-50
          `,
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };