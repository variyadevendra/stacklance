import React from "react";
import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import { MaterialIcon } from "@/components/ui/material-icon";
import { Star } from "lucide-react";

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
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.23, 1, 0.32, 1]
      }}
      whileHover={{ 
        y: -8,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 15 
        }
      }}
      className={cn(
        "relative group rounded-xl p-7 bg-white",
        "border border-[#C6E7FF]",
        "transform transition-all duration-300",
        "hover:shadow-xl hover:shadow-[#D4F6FF]/40",
        "overflow-hidden",
        testimonial.featured ? "md:col-span-2" : ""
      )}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C6E7FF]/20 via-[#D4F6FF]/20 to-[#FFDDAE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-[#C6E7FF]/30 to-[#D4F6FF]/30 blur-2xl rounded-full group-hover:scale-150 transition-transform duration-700" />
      
      {/* Quote icon */}
      <div className="absolute -top-1 -right-1 text-[#C6E7FF] opacity-40 group-hover:opacity-70 transition-opacity duration-300">
        <MaterialIcon name="format_quote" className="w-16 h-16" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Stars */}
        {testimonial.author.rating && (
          <div className="flex mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={cn(
                  "w-4 h-4 mr-1",
                  i < (testimonial.author.rating || 0) 
                    ? "fill-[#FFDDAE] text-[#FFDDAE]" 
                    : "fill-gray-200 text-gray-200"
                )}
              />
            ))}
          </div>
        )}

        <div className="mb-6">
          <p className="text-gray-700 leading-relaxed">
            "{testimonial.text}"
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Avatar className="w-12 h-12 border-2 border-white shadow-lg">
              <img
                src={testimonial.author.image}
                alt={testimonial.author.name}
                className="rounded-full object-cover"
              />
            </Avatar>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#C6E7FF] rounded-full border-2 border-white" />
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              {testimonial.author.name}
            </h4>
            <p className="text-sm text-gray-600">
              {testimonial.author.title}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function StacklanceTestimonials({
  testimonials = defaultTestimonials,
  title = "What Our Clients Say",
  subtitle = "Testimonials",
  description = "Hear directly from our clients about their experiences working with Stacklance and the impact our solutions have had on their businesses."
}: TestimonialsProps) {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4 gap-2.5 bg-[#D4F6FF] px-6 py-2 rounded-full border border-[#C6E7FF]">
            <span className="text-sm font-medium text-gray-800 tracking-wide">
              {subtitle}
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            {title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
        
        {/* Trusted by logos section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
            Trusted by innovative companies
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-70">
            {['Google', 'Microsoft', 'Airbnb', 'Spotify', 'Amazon'].map((company) => (
              <div key={company} className="grayscale hover:grayscale-0 transition-all duration-300">
                <p className="text-xl font-bold text-gray-400 hover:text-gray-800">{company}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 