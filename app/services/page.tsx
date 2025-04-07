"use client";

import React from "react";
import { ServiceProcess } from "@/components/blocks/service-process";
import ServicesHero from "@/components/blocks/services-hero";
import { AnimatedServices } from "@/components/blocks/animated-services";
import { ServicesBenefits } from "@/components/blocks/services-benefits";
import { TechStack } from "@/components/blocks/tech-stack";
import { CaseStudies } from "@/components/blocks/case-studies";
import { Testimonials } from "@/components/blocks/testimonials";
import { CTASection } from "@/components/blocks/cta-section";
import { FadeInWhenVisible } from "@/components/animations/fade-in-when-visible";
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <ServicesHero />

      {/* Service Process */}
      <FadeInWhenVisible>
        <ServiceProcess />
      </FadeInWhenVisible>

      {/* Benefits Section */}
      <FadeInWhenVisible>
        <ServicesBenefits />
      </FadeInWhenVisible>

      {/* Tech Stack */}
      <FadeInWhenVisible delay={0.3}>
        <TechStack />
      </FadeInWhenVisible>

      {/* Case Studies */}
      <FadeInWhenVisible delay={0.4}>
        <CaseStudies />
      </FadeInWhenVisible>

      {/* Testimonials */}
      <FadeInWhenVisible delay={0.5}>
        <Testimonials />
      </FadeInWhenVisible>

      {/* CTA Section */}
      <FadeInWhenVisible delay={0.6}>
        <CTASection
          title="Ready to Transform Your Business?"
          description="Let's discuss how our services can help you achieve your goals."
          primaryAction={{
            text: "Schedule a Call",
            href: "/contact"
          }}
          secondaryAction={{
            text: "View Our Work",
            href: "/work"
          }}
        />
      </FadeInWhenVisible>
    </main>
  );
} 