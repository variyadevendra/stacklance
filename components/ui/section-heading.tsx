"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  label?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeading({
  title,
  subtitle,
  label,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "flex flex-col gap-4",
        {
          "text-center": align === "center",
          "text-left": align === "left",
          "text-right": align === "right",
        },
        className
      )}
    >
      {label && (
        <span className="inline-block text-sm font-medium text-blue-500">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg leading-8 text-gray-600">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
} 
 
 
 
 
 
 