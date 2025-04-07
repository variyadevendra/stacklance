"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    content: "Their expertise in digital transformation helped us modernize our entire business operations. The results have been phenomenal.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechCorp Solutions",
    rating: 5,
  },
  {
    content: "The team's technical knowledge and professional approach made our project a great success. They delivered beyond our expectations.",
    author: "Michael Chen",
    role: "CTO",
    company: "InnovateX",
    rating: 5,
  },
  {
    content: "Outstanding service and exceptional results. They truly understand modern technology and business needs.",
    author: "Emily Rodriguez",
    role: "Product Manager",
    company: "Digital Ventures",
    rating: 5,
  },
  {
    content: "Their agile approach and attention to detail made our digital transformation smooth and successful.",
    author: "David Kim",
    role: "Director of Engineering",
    company: "Future Systems",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="container">
        <div className="mx-auto max-w-2xl lg:text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600 ring-1 ring-inset ring-blue-600/10"
          >
            Client Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight text-gray-800 sm:text-4xl"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Don't just take our word for it - hear from some of our satisfied clients
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200"
            >
              <div className="flex gap-0.5">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="mt-4 text-base leading-7 text-gray-600">
                "{testimonial.content}"
              </p>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="h-10 w-10 rounded-full bg-gray-100" />
                <div>
                  <div className="font-semibold text-gray-700">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 