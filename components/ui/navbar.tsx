"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50">
      <div className="backdrop-blur-md bg-background/50 border-b border-white/[0.08]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400">
              Stacklance
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Home
            </Link>
            <Link href="#services" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Services
            </Link>
            <Link href="#about" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              About
            </Link>
            <Link href="#contact" className="text-foreground/70 hover:text-foreground transition-colors text-sm">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/20"
            >
              Get in Touch
            </Link>
            <button className="md:hidden rounded-full w-10 h-10 flex items-center justify-center bg-background/50 border border-white/[0.08]">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
} 