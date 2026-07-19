import * as React from "react";
import { cn } from "@/lib/utils";

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Checkbox({
  className,
  ...props
}: CheckboxProps) {
  return (
    <input
      type="checkbox"
      className={cn(
        `
        h-5
        w-5
        cursor-pointer
        rounded
        border
        border-gray-300
        bg-white
        text-black
        accent-black
        transition
        focus:outline-none
        focus:ring-2
        focus:ring-black/20
        disabled:cursor-not-allowed
        disabled:opacity-50
        `,
        className
      )}
      {...props}
    />
  );
}