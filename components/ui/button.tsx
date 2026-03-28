import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-[10px] text-base font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50 min-h-11 px-5 py-2.5",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-md hover:bg-primary-hover",
        secondary:
          "bg-white text-primary border-2 border-primary shadow-md hover:bg-mint-soft",
        outline:
          "border-2 border-white/80 bg-white/10 text-white hover:bg-white/20",
        ghost: "bg-transparent text-foreground hover:bg-mint-soft",
        footerOutline:
          "border border-white/40 bg-transparent text-white hover:bg-white/10",
        footerPrimary: "bg-primary text-primary-foreground hover:bg-primary-hover",
      },
      size: {
        default: "min-h-11 px-5",
        lg: "min-h-[60px] px-8 text-lg",
        sm: "min-h-9 px-3 text-sm",
        icon: "size-11 p-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
  };

export function Button({
  className,
  variant,
  size,
  href,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as Omit<React.ComponentProps<typeof Link>, "href" | "className" | "children">)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
