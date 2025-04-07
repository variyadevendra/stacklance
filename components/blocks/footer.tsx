"use client";

import Link from "next/link";
import { Twitter, Facebook, Linkedin, Instagram, ArrowRight } from "lucide-react";
import Image from "next/image";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Career", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
    { name: "Technology", href: "/technology" },
  ],
  services: [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile Development", href: "/mobile-development" },
    { name: "AI Development", href: "/ai-development" },
    { name: "UI/UX Design", href: "/ui-ux-design" },
    { name: "Frontend Development", href: "/frontend-development" },
    { name: "Backend Development", href: "/backend-development" },
  ],
  resources: [
    { name: "Blog", href: "/blog" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Events", href: "/events" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/stacklance-logo-black.svg"
                width={160}
                height={40}
                alt="Stacklance"
              />
            </Link>
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Subscribe Our Newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-l-md px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
                />
                <button className="bg-[#00BFA5] hover:bg-[#00A693] text-white px-4 rounded-r-md flex items-center">
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Our Social Networks</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-50 hover:bg-[#00BFA5] hover:text-white text-gray-600 flex items-center justify-center transition-all"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-[#00BFA5] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Our Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-[#00BFA5] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-600 hover:text-[#00BFA5] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Stacklance. All rights reserved.
          </p>
          <div className="flex gap-6">
            {navigation.legal.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-500 hover:text-[#00BFA5] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
} 