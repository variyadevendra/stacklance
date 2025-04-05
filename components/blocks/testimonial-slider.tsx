"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  position: string;
  company: string;
  testimonial: string;
  image?: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechGrowth Inc.",
    testimonial: "Stacklance transformed our outdated infrastructure into a scalable cloud solution that reduced our operational costs by 40% within six months. Their expertise and commitment to excellence made all the difference.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Director of IT",
    company: "Global Innovations",
    testimonial: "When our system was compromised, Stacklance's cybersecurity team responded within hours. They not only contained the breach but implemented new security protocols that have kept us protected ever since.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Priya Sharma",
    position: "CEO",
    company: "NextGen Retailers",
    testimonial: "The custom e-commerce solution delivered by Stacklance increased our online conversion rates by 65%. Their team took the time to understand our unique challenges and delivered beyond our expectations.",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  }
];

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevTestimonial = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  // Reset timer when manually changing slides
  const handleNavigation = (callback: () => void) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    callback();
    resetTimer();
  };

  const resetTimer = () => {
    if (autoplay) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(nextTestimonial, 6000);
    }
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [current, autoplay]);

  return (
    <div className="py-20 overflow-hidden bg-gradient-to-r from-indigo-50/30 via-white to-teal-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
            Client Success Stories
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-teal-500 rounded-full mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable results.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="relative h-[350px] md:h-[300px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="absolute inset-0 bg-white rounded-2xl shadow-xl overflow-hidden p-8 md:p-10"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ 
                  duration: 0.5,
                  ease: [0.19, 1.0, 0.22, 1.0] 
                }}
              >
                <div className="absolute top-6 right-6 text-indigo-300">
                  <Quote size={48} />
                </div>
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  {testimonials[current].image && (
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-indigo-100"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-gray-700 italic text-lg md:text-xl mb-6 relative z-10">
                      "{testimonials[current].testimonial}"
                    </p>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{testimonials[current].name}</h4>
                      <p className="text-indigo-600">{testimonials[current].position}, {testimonials[current].company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button 
              onClick={() => handleNavigation(prevTestimonial)}
              className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:text-indigo-600 hover:shadow-lg transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleNavigation(() => setCurrent(index))}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    current === index 
                      ? "bg-indigo-600 w-8" 
                      : "bg-gray-300 hover:bg-indigo-400"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={() => handleNavigation(nextTestimonial)}
              className="p-3 rounded-full bg-white shadow-md text-gray-700 hover:text-indigo-600 hover:shadow-lg transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 