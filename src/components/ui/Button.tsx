import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const buttonVariants = (variant: string, size: string) =>
  cn(
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-steel/30 focus:ring-offset-2 disabled:opacity-50",
    {
      "bg-charcoal text-bone hover:bg-charcoal/90 active:scale-[0.98]":
        variant === "primary",
      "bg-transparent text-charcoal border border-border hover:bg-surface/50 hover:border-slate/40":
        variant === "secondary",
      "bg-transparent text-charcoal hover:bg-surface/50": variant === "ghost",
      "bg-transparent text-steel border border-steel/40 hover:bg-steel/5":
        variant === "outline",
      "px-4 py-2 text-sm": size === "sm",
      "px-6 py-3 text-base": size === "md",
      "px-8 py-4 text-lg": size === "lg",
    }
  );

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, children, ...props }, ref) => {
    const classes = cn(buttonVariants(variant, size), className);
    if (asChild && typeof children === "object" && React.isValidElement(children)) {
      return React.cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: cn(classes, (children as React.ReactElement<{ className?: string }>).props?.className),
      });
    }
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
