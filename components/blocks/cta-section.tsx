"use client";

import React from "react";
import { ArrowRight, Calendar, Phone, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
}

const benefits = [
  "Free initial consultation",
  "Expert team assessment",
  "Detailed project roadmap",
  "No commitment required"
];

export function CTASection({
  title = "Ready to Start Your Digital Transformation?",
  description = "Book your free consultation now and get expert insights worth $1,000 - at no cost to you.",
  primaryAction = {
    text: "Schedule Consultation",
    href: "/contact"
  },
  secondaryAction = {
    text: "Call Sales Team",
    href: "/contact"
  }
}: CTASectionProps) {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with gradient and pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>
      
      {/* Floating circles decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-400 opacity-10 blur-3xl"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          {/* Tag */}
          <div className="flex justify-center w-full mb-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 text-blue-700"
            >
              Get Started Today
            </motion.div>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 bg-clip-text text-transparent leading-[1.1] tracking-tight mb-8"
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto text-center"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              href={primaryAction.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              {primaryAction.text}
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={secondaryAction.href}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm text-gray-700 hover:bg-white transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              {secondaryAction.text}
            </Link>
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto mb-20"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-start gap-3 p-3 rounded-lg bg-white/40 backdrop-blur-sm hover:bg-white/60 transition-colors"
              >
                <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                <span className="text-base text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Logos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <p className="text-base font-medium text-gray-500 mb-6">
              Trusted by leading companies worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
              <Image
                src="/images/logos/microsoft.svg"
                alt="Microsoft"
                width={120}
                height={36}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              />
              <Image
                src="/images/logos/google.svg"
                alt="Google"
                width={120}
                height={36}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              />
              <Image
                src="/images/logos/amazon.svg"
                alt="Amazon"
                width={120}
                height={36}
                className="grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 