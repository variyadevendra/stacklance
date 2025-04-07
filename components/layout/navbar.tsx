"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItem {
  name: string;
  url: string;
}

const navItems: NavItem[] = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "About", url: "/about" },
  { name: "Work", url: "/work" },
  { name: "Blog", url: "/blog" },
];

const CALENDAR_LINK = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ3juYYaJs-C0ng7YEFHqCXyhqIgW6ABc2MaBDoO7OGHTx3xUKFv52RoOoN6NPRpZJ0qyHvMMjjJ?gv=true";
const PHONE_NUMBER = "+91 9574805131";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePhoneClick = () => {
    window.location.href = `tel:${PHONE_NUMBER.replace(/\s/g, '')}`;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 border-b border-gray-200 backdrop-blur-sm"
          : "bg-white"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className={cn(
              "flex items-center gap-2 relative",
              "transition-all duration-300",
              "hover:scale-[1.02]",
              "after:absolute after:inset-0",
              "after:opacity-0 after:transition-opacity",
              "after:rounded-lg after:bg-gray-100",
              "after:blur-xl after:duration-500",
              "hover:after:opacity-100"
            )}
          >
            <Image
              src="/images/stacklance-logo-black.svg"
              width={120}
              height={28}
              alt="Stacklance"
              className="relative z-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.url}
                  className={cn(
                    "text-sm font-medium relative py-1.5 px-2",
                    "transition-all duration-300",
                    "before:absolute before:inset-x-0 before:bottom-0 before:h-0.5",
                    "before:origin-left before:scale-x-0 before:transform",
                    "before:transition-transform before:duration-300 before:ease-out",
                    "after:absolute after:inset-0 after:scale-x-0 after:scale-y-0",
                    "after:transition-transform after:duration-300 after:ease-out",
                    "after:rounded-lg after:bg-gray-100",
                    "hover:after:scale-x-100 hover:after:scale-y-100",
                    "hover:before:scale-x-100",
                    currentPath === item.url
                      ? "text-black before:bg-black"
                      : "text-gray-600 before:bg-gray-600 hover:text-black"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                </Link>
              ))}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  className="bg-[#000000] hover:bg-[#000000] text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Get Started
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[200px] bg-[#000000] border-[#000000]">
                <DropdownMenuItem onClick={() => window.open(CALENDAR_LINK, '_blank')} className="gap-2 text-white hover:bg-[#000000] focus:bg-[#000000]">
                  <Calendar className="h-4 w-4 text-white" />
                  <span>Schedule Meeting</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handlePhoneClick} className="gap-2 text-white hover:bg-[#000000] focus:bg-[#000000]">
                  <Phone className="h-4 w-4 text-white" />
                  <span>{PHONE_NUMBER}</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={cn(
                    "h-9 w-9 transition-all duration-300",
                    "hover:bg-gray-100",
                    "hover:scale-105",
                    "active:scale-95",
                    "relative overflow-hidden",
                    "after:absolute after:inset-0",
                    "after:opacity-0 after:transition-opacity",
                    "after:bg-gray-200/50",
                    "after:rounded-lg",
                    "hover:after:opacity-100"
                  )}
                >
                  <Menu className="h-5 w-5 relative z-10" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white">
                <SheetHeader>
                  <SheetTitle>
                    <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-200">
                      <Image
                        src="/images/stacklance-logo-black.svg"
                        width={120}
                        height={28}
                        alt="Stacklance"
                      />
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.url}
                      className={cn(
                        "px-4 py-2 text-sm font-medium rounded-md",
                        "transition-all duration-300",
                        "hover:translate-x-1",
                        "hover:bg-gradient-to-r hover:from-gray-50 hover:to-transparent",
                        "active:transform active:scale-[0.98]",
                        currentPath === item.url
                          ? "text-black bg-gray-50"
                          : "text-gray-600 hover:text-black"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-3">
                    <Button 
                      onClick={() => window.open(CALENDAR_LINK, '_blank')}
                      className="w-full bg-[#000000] hover:bg-[#000000] text-white px-4 py-2 rounded-md text-sm font-medium gap-2"
                    >
                      <Calendar className="h-4 w-4" />
                      Schedule Meeting
                    </Button>
                    <Button 
                      onClick={handlePhoneClick}
                      variant="outline"
                      className="w-full gap-2 text-black border-gray-200 hover:bg-gray-50"
                    >
                      <Phone className="h-4 w-4" />
                      {PHONE_NUMBER}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
} 