import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps
>(({ className, children, ...props }, ref) => {
  return (
    <select
      ref={ref}
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
        outline-none
        transition

        focus:border-black
        focus:ring-2
        focus:ring-black/10
        `,
        className
      )}
      {...props}
    >
      {children}
    </select>
  );
});

Select.displayName = "Select";

export { Select };