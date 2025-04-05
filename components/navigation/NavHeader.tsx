"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatedLogo } from "@/components/ui/animated-logo";

interface NavItem {
  id: number;
  title: string;
  url: string;
  dropdown?: boolean;
  items?: NavItem[];
}

const navItems: NavItem[] = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Services",
    url: "/services",
    dropdown: true,
    items: [
      {
        id: 21,
        title: "Web Development",
        url: "/services/web-development",
      },
      {
        id: 22,
        title: "Mobile Apps",
        url: "/services/mobile-apps",
      },
      {
        id: 23,
        title: "AI Solutions",
        url: "/services/ai-solutions",
      },
      {
        id: 24,
        title: "Cloud & DevOps",
        url: "/services/cloud-devops",
      },
    ],
  },
  {
    id: 3,
    title: "Industries",
    url: "/industries",
    dropdown: true,
    items: [
      {
        id: 31,
        title: "Healthcare",
        url: "/industries/healthcare",
      },
      {
        id: 32,
        title: "Finance",
        url: "/industries/finance",
      },
      {
        id: 33,
        title: "E-commerce",
        url: "/industries/ecommerce",
      },
    ],
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

export const NavHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-lg shadow-md"
            : "bg-background/40 backdrop-blur-sm"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <AnimatedLogo />

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <nav className="relative">
                <ul className="flex items-center space-x-1">
                  {navItems.map((item) => (
                    <li key={item.id} className="relative">
                      <Link
                        className={`
                          relative flex items-center justify-center rounded-md px-4 py-2 transition-all
                          hover:bg-foreground/10
                          ${hovered === item.id ? "bg-foreground/10" : ""}
                        `}
                        onMouseEnter={() => setHovered(item.id)}
                        onMouseLeave={() => setHovered(null)}
                        href={item.url}
                      >
                        {item.title}
                        {item.dropdown && (
                          <ChevronDown className="ml-1 h-4 w-4 text-foreground/70" />
                        )}
                      </Link>
                      
                      {hovered === item.id && !item.dropdown && (
                        <motion.div
                          layout
                          layoutId="cursor"
                          className="absolute bottom-0 h-0.5 w-full bg-gradient-to-r from-blue-500 to-indigo-500"
                        />
                      )}
                      
                      {item.dropdown && hovered === item.id && (
                        <div
                          className="absolute left-0 top-full"
                          onMouseEnter={() => setHovered(item.id)}
                          onMouseLeave={() => setHovered(null)}
                        >
                          <motion.div
                            layout
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 10, opacity: 0 }}
                            className="mt-2 flex w-56 flex-col rounded-md bg-background/90 backdrop-blur-lg border border-border shadow-lg"
                          >
                            {item.items?.map((subItem) => (
                              <motion.div
                                key={`link-${subItem.id}`}
                                whileHover={{ backgroundColor: "rgba(var(--foreground), 0.05)" }}
                              >
                                <Link
                                  href={subItem.url}
                                  className="block w-full p-3 text-foreground/90 hover:text-foreground"
                                >
                                  {subItem.title}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-10 h-10 flex items-center justify-center rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors"
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-6">
                  <motion.div
                    animate={isOpen ? { opacity: 0, rotate: 180, scale: 0 } : { opacity: 1, rotate: 0, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <Menu size={24} strokeWidth={1.5} />
                  </motion.div>
                  <motion.div
                    animate={isOpen ? { opacity: 1, rotate: 0, scale: 1 } : { opacity: 0, rotate: -180, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <X size={24} strokeWidth={1.5} />
                  </motion.div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-lg border-t border-border"
            >
              <div className="container mx-auto px-4 py-4">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <React.Fragment key={item.id}>
                      <li>
                        <Link
                          href={item.url}
                          className="block py-2 px-4 rounded-md hover:bg-foreground/10 transition-colors"
                          onClick={() => !item.dropdown && setIsOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                      {item.dropdown && item.items && (
                        <li className="pl-4 border-l border-border ml-4 space-y-2">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.id}
                              href={subItem.url}
                              className="block py-2 px-4 rounded-md hover:bg-foreground/10 transition-colors text-foreground/80"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </li>
                      )}
                    </React.Fragment>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-16 md:h-20" />
    </MotionConfig>
  );
}; 