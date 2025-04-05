"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TestimonialsSectionProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: {
      name: string;
      title: string;
      image: string;
    };
    text: string;
  }>;
}

export const TestimonialsSection = ({ title, description, testimonials }: TestimonialsSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {/* First row with automatic scroll */}
      <motion.div 
        className="flex gap-8 mb-8"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="flex-none w-[400px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base">{testimonial.author.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.author.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Second row with reverse scroll */}
      <motion.div 
        className="flex gap-8 mb-16"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={`row2-${index}`} className="flex-none w-[400px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.author.image}
                    alt={testimonial.author.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-bold text-base">{testimonial.author.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.author.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* CTA section */}
      <div className="bg-muted/40 rounded-2xl p-10 border border-border">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground">
            Get an Application Built for Your Business
          </h2>
          <p className="text-base text-muted-foreground">
            Take your business to the next level with a custom mobile app! Our developers will create an app that's visually stunning, user-friendly, and tailored to your needs.
          </p>
          <button className="bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium shadow hover:scale-105 transition-transform">
            Schedule a Call →
          </button>
        </div>
      </div>
    </div>
  );
};