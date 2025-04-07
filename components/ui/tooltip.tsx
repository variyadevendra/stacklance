"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "@/lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-xl bg-white/95 px-4 py-3 text-base text-slate-900 shadow-lg backdrop-blur-sm",
      "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }; 
interface TooltipProps {
  content: string | React.ReactNode;
  children: React.ReactNode;
  position?: "top" | "right";
  width?: string;
  className?: string;
}

export const Tooltip = ({
  content,
  children,
  position = "top",
  width = "max-w-[280px]",
  className,
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="inline-block"
      >
        {children}
      </div>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: position === "top" ? 8 : 0, x: position === "right" ? -8 : 0 }}
            animate={{ opacity: 1, y: position === "top" ? 0 : 0, x: position === "right" ? 0 : 0 }}
            exit={{ opacity: 0, y: position === "top" ? 8 : 0, x: position === "right" ? -8 : 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "absolute z-50",
              position === "top" && "bottom-full left-1/2 -translate-x-1/2 pb-2",
              position === "right" && "left-full top-1/2 -translate-y-1/2 pl-2",
              className
            )}
          >
            <div
              className={cn(
                "relative rounded-lg bg-background/80 p-3 text-sm text-foreground shadow-lg backdrop-blur-sm",
                "border border-border/50",
                width
              )}
            >
              <div className="relative z-10">{content}</div>
              {/* Subtle gradient background */}
              <div className="absolute inset-0 -z-10 rounded-lg bg-gradient-to-tr from-primary/5 via-primary/10 to-transparent opacity-50" />
              {/* Arrow */}
              {position === "top" && (
                <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rotate-45 bg-background/80 border-r border-b border-border/50" />
              )}
              {position === "right" && (
                <div className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-background/80 border-l border-b border-border/50" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );