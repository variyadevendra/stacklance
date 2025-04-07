"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { IconBrandWhatsapp, IconMenu2, IconX, IconSun, IconMoon } from "@tabler/icons-react";

const navLinks = [
  { 
    href: "/services", 
    label: "Services",
    dropdown: true,
    items: [
      {
        href: "/services/product-strategy",
        label: "Product Strategy & Roadmapping",
        description: "Transform your vision into a concrete action plan. We help define your product strategy, create detailed roadmaps, and establish clear milestones for successful delivery.",
        icon: "/images/services/strategy.svg"
      },
      {
        href: "/services/ai-development",
        label: "AI Development",
        description: "Harness the power of artificial intelligence with custom ML models, NLP solutions, and intelligent automation. We build AI that drives real business outcomes.",
        icon: "/images/services/ai-dev.svg"
      },
      {
        href: "/services/web-development",
        label: "Web & App Development",
        description: "Build powerful, scalable applications using cutting-edge technologies. From responsive websites to complex enterprise solutions, we deliver robust digital experiences.",
        icon: "/images/services/web-dev.svg"
      },
      {
        href: "/services/ui-ux-design",
        label: "UI/UX Design",
        description: "Create intuitive, engaging user experiences that delight your customers. Our design process combines aesthetics with functionality for maximum impact.",
        icon: "/images/services/design.svg"
      },
      {
        href: "/services/devops",
        label: "DevOps & Cloud Infrastructure",
        description: "Optimize your development pipeline and cloud infrastructure for maximum efficiency. We implement modern DevOps practices and cloud-native solutions.",
        icon: "/images/services/cloud.svg"
      },
      {
        href: "/services/mvp",
        label: "MVP to Scalable Architecture",
        description: "Launch your MVP quickly and evolve it into a robust, scalable solution. We help validate your ideas and build foundations that support growth.",
        icon: "/images/services/mvp.svg"
      },
      {
        href: "/services/dedicated-teams",
        label: "Dedicated Product Teams",
        description: "Get a dedicated team of experts who understand your business goals. We provide skilled developers, designers, and managers who work as an extension of your team.",
        icon: "/images/services/team.svg"
      },
      {
        href: "/services/cyber-security",
        label: "Cyber Security",
        description: "Protect your digital assets with comprehensive security solutions. From threat detection to secure development practices, we keep your systems safe.",
        icon: "/images/services/security.svg"
      },
      {
        href: "/services/digital-marketing",
        label: "Digital Marketing & SEO",
        description: "Drive growth with data-driven digital marketing strategies. We help optimize your online presence and convert visitors into loyal customers.",
        icon: "/images/services/marketing.svg"
      }
    ]
  },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
];

export default function NavHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white shadow-sm"
            : "bg-white"
        )}
      >
        <nav className="container mx-auto px-4 h-20">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <Link href="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
              >
                <img src="/images/stacklance-logo-white.svg" alt="Stacklance" width={140} height={35} />
              </motion.div>
              <div className="absolute -inset-2 bg-blue-100 dark:bg-blue-900/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className="relative group py-2"
                  >
                    <span className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors flex items-center gap-1">
                      {link.label}
                      {link.dropdown && (
                        <svg
                          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
                  </Link>

                  {link.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="w-[840px] bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-6">
                        <div className="grid grid-cols-3 gap-5">
                          {link.items?.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group/item"
                            >
                              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-blue-50/50 dark:bg-blue-900/10 flex items-center justify-center">
                                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="text-[15px] font-medium text-gray-900 dark:text-white">
                                  {item.label}
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? (
                  <IconSun className="w-5 h-5" />
                ) : (
                  <IconMoon className="w-5 h-5" />
                )}
              </button>

              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/your_number"
                target="_blank"
                className="p-2 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded-full transition-colors"
              >
                <IconBrandWhatsapp className="w-5 h-5" />
              </Link>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Let's Talk
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 md:hidden rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <IconMenu2 className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-white dark:bg-gray-900 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b dark:border-gray-800">
                  <span className="text-lg font-semibold">Menu</span>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <IconX className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 overflow-y-auto py-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center px-6 py-3 text-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>

                {/* Actions */}
                <div className="p-6 border-t dark:border-gray-800">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Let's Talk
                  </Link>
                  
                  {/* Help Message */}
                  <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
                    Need help? Chat with us on WhatsApp 👋
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
