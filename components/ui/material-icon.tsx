"use client";

interface MaterialIconProps {
  name: string;
  className?: string;
}

export const MaterialIcon = ({ name, className = "w-6 h-6" }: MaterialIconProps) => {
  return (
    <span className={`material-symbols-rounded ${className}`}>
      {name}
    </span>
  );
}; 