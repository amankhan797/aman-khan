import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

type GlassCardProps = HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode;
};

export default function GlassCard({
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass glass-hover rounded-sm p-6 transition-colors",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
