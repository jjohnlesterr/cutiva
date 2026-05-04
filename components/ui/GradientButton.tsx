import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type GradientButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean;
};

export function GradientButton({
  className,
  children,
  asChild = false,
  ...props
}: GradientButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-pink-400 font-semibold text-white transition-all duration-300",
        "shadow-[0_10px_25px_rgba(236,72,153,0.25)] hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(236,72,153,0.35)] active:scale-95",
        "focus:outline-none focus:ring-2 focus:ring-pink-200/70",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}