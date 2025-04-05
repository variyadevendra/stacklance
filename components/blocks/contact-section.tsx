"use client";

import { motion } from "framer-motion";
import { MaterialIcon } from "../ui/material-icon";
import { useState } from "react";

export function ContactSection() {
  const [selectedService, setSelectedService] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const services = [
    "Web Development",
    "Mobile Development",
    "AI Development",
    "Cloud Solutions",
    "Cybersecurity",
    "Digital Marketing"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-24 bg-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 bg-blue-500/10 px-4 py-1.5 rounded-full"
              >
                <MaterialIcon 
                  name="chat"
                  size="sm"
                  className="text-blue-500"
                />
                <span className="text-sm font-medium text-blue-500">
                  CONTACT US
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                Let's Build Your Next Digital Success Story
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-gray-600 text-lg"
              >
                Talk with us to know how we can make you a part of the thriving digital landscape.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <MaterialIcon name="mail" className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h3>
                  <a href="mailto:info@stacklance.io" className="text-gray-600 hover:text-blue-500 transition-colors">
                    info@stacklance.io
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <MaterialIcon name="phone" className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h3>
                  <a href="tel:+919574805131" className="text-gray-600 hover:text-blue-500 transition-colors">
                    +91 9574805131
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <MaterialIcon name="location_on" className="text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    Surat, Gujarat, India
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder:text-gray-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder:text-gray-500"
                />
                <div className="flex gap-4">
                  <select
                    value="+91"
                    disabled
                    className="px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-600 w-24"
                  >
                    <option value="+91">+91</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">What are you looking for?</label>
                <div className="grid grid-cols-2 gap-3">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`px-4 py-2 rounded-lg text-sm transition-all ${
                        selectedService === service
                          ? "bg-blue-500 text-white"
                          : "bg-white text-gray-600 border border-gray-200 hover:border-blue-500"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="How can we help you?"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-blue-500 focus:outline-none text-gray-900 placeholder:text-gray-500"
              />

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 group ${
                  status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {status === "loading" ? (
                  <>
                    <span className="animate-spin">
                      <MaterialIcon name="refresh" size="sm" />
                    </span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Request
                    <MaterialIcon 
                      name="arrow_forward" 
                      size="sm"
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 text-green-700 rounded-lg"
                >
                  Thank you! We've received your message and will get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 text-red-700 rounded-lg"
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 