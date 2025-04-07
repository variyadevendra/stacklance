"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {  Circle, Zap, X, AlertCircle, CheckCircle, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hooks/use-click-outside";

interface FloatingElementProps {
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  className?: string;
}

function FloatingElement({
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  className,
}: FloatingElementProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -50,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
          )}
        />
      </motion.div>
    </motion.div>
  );
}

interface SolutionItemProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  index: number;
  onClick: () => void;
}

function SolutionItem({ icon, title, isActive = false, index, onClick }: SolutionItemProps) {
  // Array of hover colors from our palette
  const hoverColors = [
    'hover:bg-[#C6E7FF]',   // Light Blue
    'hover:bg-[#D4F6FF]',   // Very Light Blue
    'hover:bg-[#FFDDAE]',   // Light Peach
  ];
  
  // Get a random color based on the index (using modulo to ensure it stays in range)
  const randomHoverColor = hoverColors[index % hoverColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      whileHover={{ 
        scale: 1.05, 
        y: -8,
        rotate: 1,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 15,
          duration: 0.3 
        } 
      }}
      className={`
        group relative flex flex-col items-center justify-center gap-4 
        rounded-2xl p-8 transition-all duration-300 
        border border-gray-200 cursor-pointer
        before:absolute before:inset-0 before:rounded-2xl before:z-0 
        before:transition-opacity before:opacity-0 before:duration-500
        before:bg-gradient-to-tr before:from-[#C6E7FF] before:via-[#D4F6FF] before:to-[#FFDDAE]
        hover:before:opacity-30
        hover:border-transparent
        ${isActive 
          ? 'bg-[#C6E7FF]' 
          : `bg-white ${randomHoverColor}`
        }
      `}
      onClick={onClick}
    >
      <motion.div 
        className="relative z-10 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div 
          className={`
            flex h-16 w-16 items-center justify-center 
            transition-colors duration-300 rounded-full
            ${isActive 
              ? 'text-gray-800 group-hover:text-gray-900' 
              : 'text-gray-500 group-hover:text-gray-700'
            }
          `}
          whileHover={{ 
            scale: 1.1,
            transition: { 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 0.7 
            } 
          }}
        >
          {icon}
        </motion.div>
      </motion.div>

      <motion.h3 
        className={`
          relative z-10 text-xl font-semibold 
          transition-colors duration-300
          ${isActive 
            ? 'text-gray-800 group-hover:text-gray-900' 
            : 'text-gray-700 group-hover:text-gray-900'
          }
        `}
        whileHover={{ y: -2 }}
      >
        {title}
      </motion.h3>
    </motion.div>
  );
}

interface IndustryPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  challenges: string[];
  solutions: string[];
}

function IndustryPopup({
  isOpen,
  onClose,
  title,
  description,
  icon,
  benefits,
  challenges,
  solutions,
}: IndustryPopupProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Array of background colors for different sections
  const sectionColors = [
    'bg-[#C6E7FF]',  // Light Blue
    'bg-[#D4F6FF]',  // Very Light Blue
    'bg-[#FFDDAE]',  // Light Peach
  ];

  useClickOutside(containerRef, onClose);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm p-4"
    >
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-white p-6 shadow-xl md:p-8"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col gap-6">
          <div className={`flex items-center gap-4 rounded-xl ${sectionColors[0]} p-4`}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-gray-800">
              {icon}
            </div>
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          </div>

          <div className="text-gray-700">{description}</div>

          <div className="grid gap-6 md:grid-cols-3">
            {challenges && (
              <div className={`rounded-xl ${sectionColors[1]} p-5`}>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Challenges</h3>
                <ul className="flex flex-col gap-2">
                  {challenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-gray-700">
                        <AlertCircle size={16} />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {solutions && (
              <div className={`rounded-xl ${sectionColors[2]} p-5`}>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Solutions</h3>
                <ul className="flex flex-col gap-2">
                  {solutions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-gray-700">
                        <CheckCircle size={16} />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {benefits && (
              <div className={`rounded-xl ${sectionColors[0]} p-5`}>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">Benefits</h3>
                <ul className="flex flex-col gap-2">
                  {benefits.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-0.5 text-gray-700">
                        <Zap size={16} />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

interface IndustrySolutionsProps {
  title?: string;
  subtitle?: string;
}

export function IndustrySolutions({
  title = "Industry Solutions",
  subtitle = "Transforming businesses across sectors with innovative technology solutions",
}: IndustrySolutionsProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);

  const industryDetails = [
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20H16M12 16V20M20 12V14C20 15.1046 19.1046 16 18 16H6C4.89543 16 4 15.1046 4 14V12M4 12V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V12M4 12H20M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Healthcare",
      description: "Our healthcare technology solutions empower providers to deliver better patient care through integrated systems, secure data management, and innovative patient engagement tools.",
      bulletPoints: [
        "Electronic Health Records (EHR) system development and integration",
        "Telehealth and remote patient monitoring platforms",
        "Healthcare data analytics and predictive modeling",
        "Patient engagement and portal development",
        "Medical billing and practice management solutions"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11M5 9H19L20 21H4L5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Retail",
      description: "Transform your retail business with our cutting-edge digital solutions designed to enhance customer experience, streamline operations, and increase sales across all channels.",
      bulletPoints: [
        "E-commerce platform development and integration",
        "POS and inventory management systems",
        "Customer loyalty and engagement programs",
        "Omnichannel retail solutions",
        "Retail analytics and business intelligence"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 6H21M3 18H21M12 6V18M8 6V10M8 14V18M16 6V10M16 14V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Finance",
      description: "Our financial technology solutions help banks, investment firms, and fintech startups deliver secure, compliant, and user-friendly digital financial services.",
      bulletPoints: [
        "Digital banking and mobile payment solutions",
        "Wealth management and investment platforms",
        "Regulatory compliance and fraud detection systems",
        "Financial data analytics and reporting",
        "Blockchain and cryptocurrency integration"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V16M12 16L9 13M12 16L15 13M20 16.7428C21.2215 15.734 22 14.2079 22 12.5C22 9.46243 19.5376 7 16.5 7C16.2815 7 16.0771 6.886 15.9661 6.69774C14.6621 4.48484 12.2544 3 9.5 3C5.35786 3 2 6.35786 2 10.5C2 12.5661 2.83545 14.4371 4.18695 15.7935" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Education",
      description: "Empower educators and students with our innovative educational technology solutions that enhance learning experiences and streamline administrative processes.",
      bulletPoints: [
        "Learning Management Systems (LMS) and virtual classrooms",
        "Student information and administrative systems",
        "Interactive educational content development",
        "Assessment and analytics platforms",
        "Campus management and resource planning solutions"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 21H21M3 7V5H21V7M5 21V7M19 21V7M9 11V15M15 11V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Real-Estate",
      description: "Transform property management and real estate transactions with our digital solutions designed to streamline operations and enhance client experiences.",
      bulletPoints: [
        "Property management platforms and tenant portals",
        "Virtual tour and property showcase technologies",
        "Real estate CRM and client engagement tools",
        "Property analytics and market intelligence dashboards",
        "Smart building and IoT integration for property management"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 21H17M10 9L14 13M14 9L10 13M12 21V3M5 3H19V15C19 16.1046 18.1046 17 17 17H7C5.89543 17 5 16.1046 5 15V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Manufacturing",
      description: "Optimize your manufacturing processes with our Industry 4.0 solutions that integrate IoT, data analytics, and automation to improve efficiency and quality.",
      bulletPoints: [
        "IoT-enabled production monitoring and control systems",
        "Predictive maintenance and equipment optimization",
        "Supply chain management and optimization platforms",
        "Quality control and compliance management systems",
        "Digital twin technology for manufacturing processes"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17L6 20L3 17M16 16L19 13L22 16M22 5H2M19 5V13M5 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Transportation",
      description: "Revolutionize logistics and transportation with our digital solutions that optimize routes, enhance tracking, and improve overall operational efficiency.",
      bulletPoints: [
        "Fleet management and vehicle tracking systems",
        "Route optimization and planning tools",
        "Logistics and supply chain management platforms",
        "Real-time shipment tracking and management",
        "Transportation analytics and performance dashboards"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M9 14L11 16L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Entertainment",
      description: "Create immersive digital experiences for the entertainment industry with our solutions tailored for content delivery, audience engagement, and revenue optimization.",
      bulletPoints: [
        "Content streaming platforms and distribution systems",
        "Digital rights management and licensing solutions",
        "Audience analytics and engagement metrics",
        "Virtual and augmented reality experiences",
        "Ticketing and event management systems"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 10C21 6.13401 17.866 3 14 3M14 3C10.134 3 7 6.13401 7 10C7 15 14 21 14 21C14 21 21 15 21 10C21 9.27495 20.8854 8.57823 20.6707 7.92368M14 3C15.0646 3 16.0668 3.24496 16.9587 3.68935" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Hospitality",
      description: "Enhance guest experiences and streamline operations with our digital solutions designed specifically for hotels, restaurants, and hospitality services.",
      bulletPoints: [
        "Hotel management and property systems",
        "Guest experience and loyalty platforms",
        "Restaurant management and POS solutions",
        "Booking and reservation management systems",
        "Hospitality analytics and revenue optimization"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Travel",
      description: "Transform the travel experience with our digital solutions that streamline booking, enhance customer engagement, and optimize operations for travel agencies and services.",
      bulletPoints: [
        "Travel booking and reservation platforms",
        "Itinerary management and travel planning tools",
        "Customer engagement and loyalty programs",
        "Travel analytics and business intelligence",
        "Mobile travel companion applications"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "Sports",
      description: "Elevate sports management and fan engagement with our digital solutions designed for teams, leagues, and sporting venues.",
      bulletPoints: [
        "Team and league management platforms",
        "Fan engagement and loyalty applications",
        "Sports analytics and performance tracking",
        "Stadium and venue management systems",
        "Digital ticketing and event management"
      ]
    },
    {
      icon: <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 12H18.5C19.3284 12 20 12.6716 20 13.5C20 14.3284 19.3284 15 18.5 15H15M15 12V15M15 12V9M4 9H7.5C8.32843 9 9 9.67157 9 10.5C9 11.3284 8.32843 12 7.5 12H4M4 9V12M4 9V6M4 12V15M4 15V18M4 15H8M20 15V18M20 15H16M12 3V6M12 3H9M12 3H15M12 6V9M12 6H9M12 6H15M12 18V21M12 18H9M12 18H15M12 21H9M12 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
      title: "eCommerce",
      description: "Build powerful online stores and digital marketplaces with our comprehensive eCommerce solutions designed to drive sales and enhance customer experiences.",
      bulletPoints: [
        "Custom eCommerce platform development",
        "Product catalog and inventory management",
        "Payment gateway integration and security",
        "Customer journey optimization",
        "eCommerce analytics and performance tracking"
      ]
    }
  ];

const industries = [
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 13H12M7 17H16M8 22H16C18.2091 22 20 20.2091 20 18V9.5M4 18C4 20.2091 5.79086 22 8 22M4 18C4 15.7909 5.79086 14 8 14M4 18V9C4 7.89543 4.89543 7 6 7H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>,
    title: "Healthcare",
      isActive: false
  },
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.5 9H8.5M8.5 9L11 12M8.5 9L11 6M15.5 15H8.5M8.5 15L11 18M8.5 15L11 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Retail",
      isActive: false
  },
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10H22M2 14H22M2 18H22M2 22H22M16 6L12 2L8 6M12 2V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Finance",
      isActive: false
  },
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 19.5V15M4 15V4.5C4 3.67157 4.67157 3 5.5 3H18.5C19.3284 3 20 3.67157 20 4.5V15C20 15.8284 19.3284 16.5 18.5 16.5H5.5C4.67157 16.5 4 15.8284 4 15ZM8 20.5V19.5M16 20.5V19.5M4 7.5H20M12 12C12.8284 12 13.5 11.3284 13.5 10.5C13.5 9.67157 12.8284 9 12 9C11.1716 9 10.5 9.67157 10.5 10.5C10.5 11.3284 11.1716 12 12 12ZM12 12V13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Education",
      isActive: false
  },
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 22L12 2L23 22M3 22L12 6.90909L21 22M4 22H20M7.5 13.5H16.5M8.5 17.5H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Real-Estate",
      isActive: false
  },
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.0614 10.4037L14 17M14 17L11.9386 10.4037M14 17H7.5M14 7V4.5M14 4.5L11 6M14 4.5L17 6M6 10V20.4C6 20.7314 6.26863 21 6.6 21H17.4C17.7314 21 18 20.7314 18 20.4V10M6 10V6.6C6 6.26863 6.26863 6 6.6 6H17.4C17.7314 6 18 6.26863 18 6.6V10M6 10H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Manufacturing",
      isActive: false
  },
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8M12 4V20M4.5 8H10M4.5 16H10M14 16H19.5M14 8H19.5M14 12H19.5M4.5 12H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Transportation",
      isActive: false
  },
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 2L4.8 6.4C4.32436 6.69683 4 7.2372 4 7.825V16.175C4 16.7628 4.32436 17.3032 4.8 17.6L13 22M13 2L21.2 6.4C21.6756 6.69683 22 7.2372 22 7.825V16.175C22 16.7628 21.6756 17.3032 21.2 17.6L13 22M13 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Entertainment",
      isActive: false
  },
  {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12V22M10.6 20H13.4M3 12V20.4C3 21.2837 3.71634 22 4.6 22H19.4C20.2837 22 21 21.2837 21 20.4V12M9 7H15L18 12H6L9 7ZM18 7H14.6L12.6 2H11.4L9.4 7H6M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Hospitality",
      isActive: false
    },
    {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 4V2M15 4V6M15 4H10.5M8 4V2M8 4V6M8 4H2.6C2.26863 4 2 4.26863 2 4.6V8.4C2 8.73137 2.26863 9 2.6 9H20.4C20.7314 9 21 8.73137 21 8.4V4.6C21 4.26863 20.7314 4 20.4 4H16.5M7 14.5C7 15.8807 8.11929 17 9.5 17C10.8807 17 12 15.8807 12 14.5C12 13.1193 10.8807 12 9.5 12C8.11929 12 7 13.1193 7 14.5ZM2 20L3.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M22 21L19 14L16 21M16.5 19.5H21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "Travel",
      isActive: false
    },
    {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L19 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M19 14H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            </svg>,
    title: "Sports",
      isActive: false
    },
    {
      icon: <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75 5.25H20.25M3.75 9.75H20.25M3.75 14.25H20.25M3.75 18.75H20.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.75 3V5.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.75 9.75V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.25 3V15.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14.25 20.25V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 3V10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 18.75V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 3V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18 12.75V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>,
    title: "eCommerce",
      isActive: false
    }
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.3 + i * 0.1,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center overflow-hidden bg-white py-20">
      {/* Pure white background with no gradient */}
      <div className="absolute inset-0 bg-white" />

      {/* Remove floating elements */}
      
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4F6FF] border border-[#C6E7FF] mb-8"
          >
            <Circle className="h-2 w-2 fill-gray-800" />
            <span className="text-sm text-gray-800 tracking-wide font-medium">
              Enterprise Solutions
            </span>
          </motion.div>
          
          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              {title}
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {industries.map((industry, index) => (
            <SolutionItem
              key={index}
              icon={industry.icon}
              title={industry.title}
              isActive={industry.isActive}
              index={index}
              onClick={() => setSelectedIndustry(index)}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white rounded-none transition-colors duration-300"
          >
            Explore All Solutions <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {/* Industry Popup */}
      <AnimatePresence>
        {selectedIndustry !== null && (
          <IndustryPopup 
            isOpen={selectedIndustry !== null}
            onClose={() => setSelectedIndustry(null)}
            title={industryDetails[selectedIndustry].title}
            description={industryDetails[selectedIndustry].description}
            icon={industryDetails[selectedIndustry].icon}
            benefits={industryDetails[selectedIndustry].bulletPoints.slice(0, 2)}
            challenges={industryDetails[selectedIndustry].bulletPoints.slice(2, 4)}
            solutions={industryDetails[selectedIndustry].bulletPoints.slice(4)}
          />
        )}
      </AnimatePresence>
    </div>
  );
} 