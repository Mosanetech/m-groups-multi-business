import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        `
        flex
        min-h-[140px]
        w-full
        rounded-xl
        border
        border-gray-300
        bg-white
        px-4
        py-3
        text-sm
        text-gray-900
        placeholder:text-gray-400
        outline-none
        transition

        focus:border-black
        focus:ring-2
        focus:ring-black/10
        `,
        className
      )}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };