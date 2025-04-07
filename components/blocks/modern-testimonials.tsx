import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/ui/material-icon";
import { Circle, Star } from "lucide-react";

interface TestimonialAuthor {
  name: string;
  title: string;
  image: string;
  company?: string;
  rating?: number; // 1-5 rating
}

interface Testimonial {
  author: TestimonialAuthor;
  text: string;
  featured?: boolean;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
  description?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    text: "Stacklance transformed our complex web application with exceptional React development. Their technical expertise and dedication to quality resulted in a product that truly impressed our stakeholders. Their problem-solving ability and clear communication throughout the process made them a true partner.",
    author: {
      name: "Vikram Patel",
      title: "CTO",
      company: "Fintech Innovations",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    featured: true
  },
  {
    text: "Working with Stacklance has been an incredible experience. They took our e-commerce platform to the next level with their ReactJS and Node.js expertise. The performance improvements were immediate - page load times decreased by 40% and our conversion rates have significantly improved.",
    author: {
      name: "Rachel Kim",
      title: "E-commerce Director",
      company: "StyleTrend",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    }
  },
  {
    text: "The Stacklance team exceeded all expectations with our healthcare platform. Their expertise in React, TypeScript, and AWS was instrumental in creating a HIPAA-compliant solution that our medical staff love using. They're not just developers - they're problem solvers who understand business needs.",
    author: {
      name: "Dr. Marcus Chen",
      title: "Medical Director",
      company: "HealthConnect",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    }
  },
  {
    text: "Stacklance built our analytics dashboard from scratch in record time. They delivered exactly what we needed with fantastic attention to detail and clean, scalable code. The real-time data visualization features they implemented have become essential to our business operations.",
    author: {
      name: "Amanda Torres",
      title: "Product Lead",
      company: "DataMetrics",
      image: "https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    }
  },
  {
    text: "We hired Stacklance to rebuild our legacy application into a modern React-based platform. Their technical expertise is outstanding, but what really sets them apart is their proactive approach to solving business problems. They suggested features we hadn't even considered that have become user favorites.",
    author: {
      name: "James Wilson",
      title: "CEO",
      company: "InnoSoft Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    }
  },
  {
    text: "Stacklance delivered our educational platform within a challenging timeline without compromising quality. Their NextJS expertise resulted in blazing-fast performance, and the UI/UX improvements they suggested have significantly increased student engagement. They've been an invaluable extension of our team.",
    author: {
      name: "Sophia Garcia",
      title: "Head of Technology",
      company: "EduSmart",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rating: 5
    },
    featured: true
  }
];

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
    <div className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
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