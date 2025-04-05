import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/ui/material-icon";

interface TestimonialAuthor {
  name: string;
  title: string;
  image: string;
}

interface Testimonial {
  author: TestimonialAuthor;
  text: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title: string;
  description: string;
}

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        y: -5,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      className={cn(
        "relative group rounded-xl p-6 bg-white dark:bg-gray-800",
        "border border-gray-200 dark:border-gray-700",
        "transform transition-all duration-300",
        "hover:shadow-xl dark:hover:shadow-2xl dark:hover:shadow-indigo-500/10",
        "overflow-hidden"
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-500" />
      
      {/* Quote icon */}
      <div className="absolute -top-1 -right-1 text-gray-200 dark:text-gray-700 opacity-40 group-hover:opacity-60 transition-opacity duration-300">
        <MaterialIcon name="format_quote" className="w-12 h-12" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {testimonial.text}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-800 shadow-lg">
              <img
                src={testimonial.author.image}
                alt={testimonial.author.name}
                className="rounded-full object-cover"
              />
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">
              {testimonial.author.name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {testimonial.author.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function ModernTestimonials({
  testimonials,
  title,
  description,
}: TestimonialsProps) {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-4">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 