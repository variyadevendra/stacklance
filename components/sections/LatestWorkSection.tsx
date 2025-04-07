"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, Code, ArrowUpRight } from "lucide-react";
import { memo, useCallback } from "react";

// GlowingEffect Component
interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 2,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    return (
      <>
        <div
          className={cn(
            "pointer-events-none absolute -inset-px hidden rounded-[inherit] border opacity-0 transition-opacity",
            glow && "opacity-100",
            variant === "white" && "border-white",
            disabled && "!block"
          )}
        />
        <div
          ref={containerRef}
          style={
            {
              "--blur": `${blur}px`,
              "--spread": spread,
              "--start": "0",
              "--active": "0",
              "--glowingeffect-border-width": `${borderWidth}px`,
              "--repeating-conic-gradient-times": "5",
              "--gradient":
                variant === "white"
                  ? `repeating-conic-gradient(
                  from 236.84deg at 50% 50%,
                  var(--black),
                  var(--black) calc(25% / var(--repeating-conic-gradient-times))
                )`
                  : `radial-gradient(circle at 50% 0%, rgba(88, 28, 255, 0.3), transparent 40%),
                    radial-gradient(circle at 0% 50%, rgba(0, 183, 255, 0.3), transparent 40%),
                    radial-gradient(circle at 50% 100%, rgba(88, 28, 255, 0.3), transparent 40%),
                    radial-gradient(circle at 100% 50%, rgba(0, 183, 255, 0.3), transparent 40%),
                    repeating-conic-gradient(
                      from 0deg at 50% 50%,
                      rgba(88, 28, 255, 0.2) 0%,
                      rgba(0, 183, 255, 0.2) 25%,
                      rgba(88, 28, 255, 0.2) 50%
                    )`,
            } as React.CSSProperties
          }
          className={cn(
            "pointer-events-none absolute -inset-[2px] rounded-[inherit] opacity-0 transition-all duration-500",
            glow && "opacity-100",
            blur > 0 && "blur-[var(--blur)]",
            className,
            disabled && "!hidden"
          )}
        >
          <div
            className={cn(
              "glow",
              "rounded-[inherit]",
              'after:content-[""] after:rounded-[inherit] after:absolute after:inset-[calc(-1*var(--glowingeffect-border-width))]',
              "after:[border:var(--glowingeffect-border-width)_solid_transparent]",
              "after:[background:var(--gradient)] after:[background-attachment:fixed]",
              "after:opacity-[var(--active)] after:transition-all after:duration-500",
              "after:[mask-clip:padding-box,border-box]",
              "after:[mask-composite:intersect]",
              "after:[mask-image:linear-gradient(#000,#000),conic-gradient(from_calc((var(--start)-var(--spread))*1deg),#00000000_0deg,#fff,#00000000_calc(var(--spread)*2deg))]",
              "after:animate-pulse"
            )}
          />
        </div>
      </>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

// Project Card Component
interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  className?: string;
  index: number;
}

const ProjectCard = ({ 
  id, 
  title, 
  description, 
  image, 
  tags, 
  link, 
  github, 
  className, 
  index 
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative h-full rounded-[1.25rem] border-[0.75px] border-[#C6E7FF]/50 p-2 backdrop-blur-sm md:rounded-[1.5rem] md:p-3",
        className
      )}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-[#C6E7FF]/50 bg-white shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-lg hover:shadow-[#D4F6FF]/20 dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)]">
        <GlowingEffect
          spread={60}
          glow={true}
          disabled={false}
          proximity={100}
          inactiveZone={0.01}
          borderWidth={2}
          blur={20}
        />
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
        </div>
        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{description}</p>
          </div>
          <div className="mt-4">
            <div className="mb-4 flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="rounded-full bg-[#D4F6FF] px-2.5 py-0.5 text-xs font-medium text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-900 hover:text-gray-700 group"
                >
                  View Project <ArrowUpRight className="h-3.5 w-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
              <div className="flex gap-2">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#D4F6FF] p-2 text-gray-700 hover:bg-[#C6E7FF] transition-colors"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#D4F6FF] p-2 text-gray-700 hover:bg-[#C6E7FF] transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Main Component
interface LatestWorkSectionProps {
  title?: string;
  subtitle?: string;
}

const LatestWorkSection = ({ 
  title = "Our Latest Work", 
  subtitle = "Check out our most recent projects and see what we've been working on." 
}: LatestWorkSectionProps) => {
  const projects = [
    {
      id: 1,
      title: "Peony Swimwear",
      description: "Luxury swimwear Shopify store with elegant design and intuitive shopping experience for the US market.",
      image: "https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?q=80&w=3474&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Shopify", "E-commerce", "Luxury"],
      link: "https://us.peonyswimwear.com/",
    },
    {
      id: 2,
      title: "Goorin Bros",
      description: "Premium hatmakers e-commerce website with rich heritage storytelling and seamless shopping experience.",
      image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["E-commerce", "WordPress", "Custom Design"],
      link: "https://www.goorin.com/",
    },
    {
      id: 3,
      title: "Adina Stone",
      description: "Elegant jewelry brand built on Shopify featuring sophisticated design and mobile-optimized shopping.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Shopify", "Jewelry", "Responsive Design"],
      link: "https://adina-stone.com/",
    },
    {
      id: 4,
      title: "Greats",
      description: "Clean, minimalist sneaker store experience with focus on product photography and simplified user journey.",
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["E-commerce", "Footwear", "Minimalist"],
      link: "https://www.greats.com/",
    },
    {
      id: 5,
      title: "Sundae Muse",
      description: "Trendy fashion site with modern vibes, featuring clean layouts and engaging product showcases.",
      image: "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Fashion", "E-commerce", "Modern UI"],
      link: "https://sundae-muse.com/",
    },
    {
      id: 6,
      title: "Agrippon",
      description: "HIPAA-compliant healthcare claims communication platform connecting clinical providers and billers. Secure portal for managing pre-submission and rejected claims with tracking functionality.",
      image: "https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Healthcare", "HIPAA-Compliant", "Cloud Platform"],
      link: "https://agrippon.com/",
    },
    {
      id: 7,
      title: "Pepster",
      description: "Health-focused product site featuring a clean design that highlights product benefits and scientific backing.",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Health", "E-commerce", "UX Design"],
      link: "https://www.trypepster.com/",
    },
    {
      id: 8,
      title: "Playing for Change",
      description: "Music movement site revamp with engaging multimedia content and global community features.",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Music", "Non-profit", "Community"],
      link: "https://playingforchange.com/",
    },
    {
      id: 9,
      title: "Jude AI",
      description: "AI platform with clean UX design focusing on simplicity and powerful functionality for users.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["AI", "Platform", "UX/UI"],
      link: "https://judeai.com/",
    },
    {
      id: 10,
      title: "Alchemy",
      description: "Digital product studio creating innovative web solutions with elegant design and powerful functionality.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
      tags: ["Digital Studio", "Web Design", "Product Development"],
      link: "https://alchemy.is/",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center justify-center mb-4 gap-2.5 bg-[#D4F6FF] px-6 py-2 rounded-full border border-[#C6E7FF]">
            <span className="text-sm font-medium text-gray-800 tracking-wide">
              Client Success Stories
            </span>
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">{title}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">{subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              className={cn(
                index === 0 && "md:col-span-2 md:row-span-1",
                index === 3 && "md:col-span-2 md:row-span-1"
              )}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-gray-700 border border-gray-100 hover:bg-[#D4F6FF] hover:border-[#C6E7FF] hover:text-gray-900 transition-all duration-300 group"
            whileHover={{ 
              scale: 1.05, 
              transition: { type: "spring", stiffness: 400, damping: 10 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            View More Projects
            <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default function LatestWorkSectionDemo() {
  return (
    <div className="bg-white text-foreground">
      <LatestWorkSection />
    </div>
  );
} 