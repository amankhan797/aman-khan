import { cn } from "@/lib/utils";
import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";

type Variant = "default" | "green";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type AsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type GlassButtonProps = AsLink | AsButton;

const variantStyles: Record<Variant, string> = {
  default: "glass glass-hover text-foreground",
  green: "glass-green glass-green-hover text-[#3fb950]",
};

export default function GlassButton({
  variant = "default",
  className,
  children,
  ...props
}: GlassButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium uppercase transition-colors",
    variantStyles[variant],
    className
  );

  if ("href" in props && props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
