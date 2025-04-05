"use client";

import * as React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import Link from "next/link";

// SVG Icons for each service
const ServiceIcons = {
  psychology: (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16.01C14.2091 16.01 16 14.2191 16 12.01C16 9.80087 14.2091 8.01001 12 8.01001C9.79086 8.01001 8 9.80087 8 12.01C8 14.2191 9.79086 16.01 12 16.01Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 21.01C17.5228 21.01 22 16.5329 22 11.01C22 5.48716 17.5228 1.01001 12 1.01001C6.47715 1.01001 2 5.48716 2 11.01C2 16.5329 6.47715 21.01 12 21.01Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M12 16.01V21.01M12 1.01001V8.01001M1.99994 11.01H7.99994M16 11.01H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  code: (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  palette: (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12C2 17.5228 6.47715 22 12 22C13.6569 22 15 20.6569 15 19V18.5C15 17.6716 15.6716 17 16.5 17C17.3284 17 18 16.3284 18 15.5V15C18 13.3431 19.3431 12 21 12C21.5523 12 22 11.5523 22 11C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z" fill="currentColor"/>
      <path d="M16 9C16.5523 9 17 8.55228 17 8C17 7.44772 16.5523 7 16 7C15.4477 7 15 7.44772 15 8C15 8.55228 15.4477 9 16 9Z" fill="currentColor"/>
      <path d="M10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="currentColor"/>
    </svg>
  ),
  cloud: (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.5 19C4.01472 19 2 16.9853 2 14.5C2 12.1564 3.79151 10.2313 6.07974 10.0194C6.54781 7.17213 9.02024 5 12 5C14.9798 5 17.4522 7.17213 17.9203 10.0194C20.2085 10.2313 22 12.1564 22 14.5C22 16.9853 19.9853 19 17.5 19H6.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  rocket_launch: (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 15L9 12M12 15L15 12M12 15V9M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  groups: (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.1931 15.4468 16.6438 16.1429M17 20H7M17 20V18C17 17.3438 16.8736 16.717 16.6438 16.1429M7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80686 15.4468 7.35625 16.1429M7 20V18C7 17.3438 7.12642 16.717 7.35625 16.1429M7.35625 16.1429C8.0935 14.301 9.89482 13 12 13C14.1052 13 15.9065 14.301 16.6438 16.1429M15 7C15 8.65685 13.6569 10 12 10C10.3431 10 9 8.65685 9 7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7ZM21 10C21 11.1046 20.1046 12 19 12C17.8954 12 17 11.1046 17 10C17 8.89543 17.8954 8 19 8C20.1046 8 21 8.89543 21 10ZM7 10C7 11.1046 6.10457 12 5 12C3.89543 12 3 11.1046 3 10C3 8.89543 3.89543 8 5 8C6.10457 8 7 8.89543 7 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  security: (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 8L10.01 14L8 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  trending_up: (
    <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 7L14.1314 14.8686C13.7354 15.2646 13.5373 15.4627 13.309 15.5368C13.1082 15.6021 12.8918 15.6021 12.691 15.5368C12.4627 15.4627 12.2646 15.2646 11.8686 14.8686L9.13137 12.1314C8.73535 11.7354 8.53735 11.5373 8.30902 11.4632C8.10817 11.3979 7.89183 11.3979 7.69098 11.4632C7.46265 11.5373 7.26465 11.7354 6.86863 12.1314L2 17M22 7H15M22 7V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
};

interface ServiceProps {
  title: string;
  description: string;
  icon: keyof typeof ServiceIcons;
  color: string;
  index: number;
}

export const Service: React.FC<ServiceProps> = ({ title, description, icon, color, index }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;

  React.useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0, 
          x: isEven ? -50 : 50,
          y: 20
        },
        visible: { 
          opacity: 1, 
          x: 0,
          y: 0,
          transition: { 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.1
          }
        }
      }}
      className="mb-12 last:mb-0"
    >
      <Card 
        className={cn(
          "relative overflow-hidden border-border/40 group",
          "hover:shadow-lg hover:border-primary/20 transition-all duration-500",
          "transform hover:-translate-y-1"
        )}
      >
        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-5 gap-8 p-8 md:p-12",
            "bg-background relative"
          )}
        >
          {/* Background Pattern */}
          <div 
            className={cn(
              "absolute inset-0 opacity-[0.02] transition-opacity duration-500 group-hover:opacity-[0.04]",
              `bg-${color}`
            )}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.8 8.544l1.414 1.414 9.9-9.9h-2.77zm22.628 0L53.8 8.828l-1.415 1.415L41.456 0h3.515zM32.657 0L26.2 6.485 27.616 7.9l7.9-7.9h-2.86zM15.343 0L6.8 8.544l1.414 1.414 9.9-9.9h-2.77zm17.657 0L26.2 6.485 27.616 7.9l7.9-7.9h-2.86zM38.657 0L29.8 8.828l1.414 1.414L41.456 0h-2.8zM53.8 0L43.373 10.428l1.415 1.414L53.8 2.828V0zM0 0L0 3.828 2.828 6.657 3.828 6.657 0 2.828V0zm0 5.373L0 8.2l2.828 2.828L3.828 8.2 0 5.374zm10.657 0L2.828 13.2 3.828 13.2 13.2 3.828 10.657 5.373zm6 0L9.828 13.2 10.828 13.2 17.2 6.828 16.657 5.373zm6 0L15.828 13.2 16.828 13.2 23.2 6.828 22.657 5.373zm6 0L21.828 13.2 22.828 13.2 29.2 6.828 28.657 5.373zm6 0L27.828 13.2 28.828 13.2 35.2 6.828 34.657 5.373zm6 0L33.828 13.2 34.828 13.2 41.2 6.828 40.657 5.373zm6 0L39.828 13.2 40.828 13.2 47.2 6.828 46.657 5.373zm6 0L45.828 13.2 46.828 13.2 53.2 6.828 52.657 5.373zm-6 6L39.828 19.2 40.828 19.2 47.2 12.828 46.657 11.373zm6 0L45.828 19.2 46.828 19.2 53.2 12.828 52.657 11.373z' fill='currentColor' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}
          />

          <div className={cn(
            "flex flex-col justify-center",
            isEven ? "md:col-span-3 md:order-1" : "md:col-span-3 md:order-2"
          )}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground tracking-tight">{title}</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">{description}</p>
            <Link 
              href={`/services/${title.toLowerCase().replace(/\s+/g, '-')}`}
              className={cn(
                "inline-flex items-center text-sm font-medium space-x-1 group transition-all duration-300",
                `text-${color}-600 dark:text-${color}-400 hover:text-${color}-700 dark:hover:text-${color}-300`
              )}
            >
              <span>Learn more</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          <div className={cn(
            "flex items-center justify-center md:col-span-2",
            isEven ? "md:order-2" : "md:order-1"
          )}>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div className={cn(
                "absolute inset-0 rounded-full animate-pulse-slow",
                `bg-${color}-500/10`
              )} />
              <div className={cn(
                "absolute inset-2 bg-background rounded-full flex items-center justify-center",
                "backdrop-blur-sm",
                `text-${color}-500`
              )}>
                {ServiceIcons[icon]}
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}; 