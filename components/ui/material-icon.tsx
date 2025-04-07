"use client";

interface MaterialIconProps {
  name: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-10 h-10"
};

export const MaterialIcon = ({ name, size = "md", className = "" }: MaterialIconProps) => {
  const sizeClass = sizeClasses[size];
  
  return (
    <span className={`material-symbols-rounded ${sizeClass} ${className}`}>
      {name}
    </span>
  );
}; 