"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ServiceIconProps {
  className?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "indigo" | "purple" | "teal";
}

export function ServiceIcon({
  className,
  children,
  size = "md",
  variant = "primary",
}: ServiceIconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const variantClasses = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary-foreground",
    indigo: "bg-indigo-500/10 text-indigo-400",
    purple: "bg-purple-500/10 text-purple-400",
    teal: "bg-teal-500/10 text-teal-400",
  };

  return (
    <div
      className={cn(
        "rounded-lg flex items-center justify-center",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </div>
  );
} 