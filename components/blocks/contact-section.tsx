"use client";

import { motion } from "framer-motion";
import { MaterialIcon } from "../ui/material-icon";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+1" // Default to US
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [showCustomCodeInput, setShowCustomCodeInput] = useState(false);
  const [customCountryCode, setCustomCountryCode] = useState("");

  const services = [
    "Web Development",
    "Mobile Development",
    "AI Development",
    "Cloud Solutions",
    "Cybersecurity",
    "Digital Marketing"
  ];

  // Function to generate country flag emoji from country code
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  // Comprehensive country data based on country-code-au6g.vercel.app/Country.json
  const countryData = [
    { name: "United States", code: "US", dial_code: "+1" },
    { name: "United Kingdom", code: "GB", dial_code: "+44" },
    { name: "India", code: "IN", dial_code: "+91" },
    { name: "Canada", code: "CA", dial_code: "+1" },
    { name: "Australia", code: "AU", dial_code: "+61" },
    { name: "Germany", code: "DE", dial_code: "+49" },
    { name: "France", code: "FR", dial_code: "+33" },
    { name: "China", code: "CN", dial_code: "+86" },
    { name: "Japan", code: "JP", dial_code: "+81" },
    { name: "Brazil", code: "BR", dial_code: "+55" },
    { name: "Russia", code: "RU", dial_code: "+7" },
    { name: "Mexico", code: "MX", dial_code: "+52" },
    { name: "Italy", code: "IT", dial_code: "+39" },
    { name: "South Korea", code: "KR", dial_code: "+82" },
    { name: "Spain", code: "ES", dial_code: "+34" },
    { name: "Indonesia", code: "ID", dial_code: "+62" },
    { name: "Turkey", code: "TR", dial_code: "+90" },
    { name: "Netherlands", code: "NL", dial_code: "+31" },
    { name: "Saudi Arabia", code: "SA", dial_code: "+966" },
    { name: "Switzerland", code: "CH", dial_code: "+41" },
    { name: "Poland", code: "PL", dial_code: "+48" },
    { name: "Thailand", code: "TH", dial_code: "+66" },
    { name: "Sweden", code: "SE", dial_code: "+46" },
    { name: "Belgium", code: "BE", dial_code: "+32" },
    { name: "Nigeria", code: "NG", dial_code: "+234" },
    { name: "Pakistan", code: "PK", dial_code: "+92" },
    { name: "Vietnam", code: "VN", dial_code: "+84" },
    { name: "South Africa", code: "ZA", dial_code: "+27" },
    { name: "Philippines", code: "PH", dial_code: "+63" },
    { name: "Afghanistan", code: "AF", dial_code: "+93" },
    { name: "Bangladesh", code: "BD", dial_code: "+880" },
    { name: "Egypt", code: "EG", dial_code: "+20" },
    { name: "Malaysia", code: "MY", dial_code: "+60" },
    { name: "Singapore", code: "SG", dial_code: "+65" },
    { name: "Hong Kong", code: "HK", dial_code: "+852" },
    { name: "Israel", code: "IL", dial_code: "+972" },
    { name: "United Arab Emirates", code: "AE", dial_code: "+971" },
    { name: "Ukraine", code: "UA", dial_code: "+380" },
    { name: "Argentina", code: "AR", dial_code: "+54" },
    { name: "Denmark", code: "DK", dial_code: "+45" },
    { name: "Ireland", code: "IE", dial_code: "+353" },
    { name: "Norway", code: "NO", dial_code: "+47" },
    { name: "Austria", code: "AT", dial_code: "+43" },
    { name: "New Zealand", code: "NZ", dial_code: "+64" },
    { name: "Greece", code: "GR", dial_code: "+30" },
    { name: "Czech Republic", code: "CZ", dial_code: "+420" },
    { name: "Portugal", code: "PT", dial_code: "+351" },
    { name: "Romania", code: "RO", dial_code: "+40" },
    { name: "Hungary", code: "HU", dial_code: "+36" },
    { name: "Finland", code: "FI", dial_code: "+358" }
  ];

  // Sort by name (already prioritized in the list)
  const sortedCountryData = [...countryData];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

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
        body: JSON.stringify({
          ...formData,
          services: selectedServices
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          countryCode: "+1"
        });
        setSelectedServices([]);
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
    <section className="py-24 bg-gradient-to-b from-white to-[#D4F6FF]/10 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="h-full w-full bg-[radial-gradient(#C6E7FF_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Section Header - Centered */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#D4F6FF] border border-[#C6E7FF] mb-4">
            <span className="text-sm font-medium text-gray-800">
              CONTACT US
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Let's Build Your Next Digital Success Story
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gray-600"
          >
            Talk with us to know how we can make you a part of the thriving digital landscape.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6 pt-4 lg:pt-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <MaterialIcon name="mail" className="text-[#C6E7FF]" size="lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                <a href="mailto:info@stacklance.io" className="text-gray-600 hover:text-[#C6E7FF] transition-colors">
                  info@stacklance.io
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <MaterialIcon name="phone" className="text-[#C6E7FF]" size="lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                <a href="tel:+919574805131" className="text-gray-600 hover:text-[#C6E7FF] transition-colors">
                  +91 9574805131
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center">
                <MaterialIcon name="location_on" className="text-[#C6E7FF]" size="lg" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                <p className="text-gray-600">
                  Surat, Gujarat, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white/95 rounded-2xl p-8 shadow-lg border border-[#C6E7FF]/50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-[#C6E7FF] focus:ring-[#D4F6FF] focus:ring-opacity-50 focus:outline-none text-gray-900 placeholder:text-gray-500"
                />
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-[#C6E7FF] focus:ring-[#D4F6FF] focus:ring-opacity-50 focus:outline-none text-gray-900 placeholder:text-gray-500"
                />
              </div>
              
              <div className="flex gap-4">
                {!showCustomCodeInput ? (
                  <select
                    value={formData.countryCode}
                    onChange={(e) => {
                      if (e.target.value === "custom") {
                        setShowCustomCodeInput(true);
                      } else {
                        setFormData({ ...formData, countryCode: e.target.value });
                      }
                    }}
                    className="px-3 py-3 bg-white rounded-lg border border-gray-200 text-gray-600 min-w-[220px] w-auto focus:border-[#C6E7FF] focus:ring-[#D4F6FF] focus:ring-opacity-50 focus:outline-none"
                  >
                    {sortedCountryData.map((country) => (
                      <option key={country.code} value={country.dial_code}>
                        {getFlagEmoji(country.code)} {country.dial_code} - {country.name}
                      </option>
                    ))}
                    <option value="custom">🌐 Custom country code</option>
                  </select>
                ) : (
                  <div className="flex min-w-[220px]">
                    <input
                      type="text"
                      placeholder="+XXX"
                      value={customCountryCode}
                      onChange={(e) => {
                        const value = e.target.value;
                        // Ensure it starts with + and contains only numbers
                        if (/^(\+\d*)?$/.test(value)) {
                          setCustomCountryCode(value);
                          if (value.startsWith('+')) {
                            setFormData({ ...formData, countryCode: value });
                          }
                        }
                      }}
                      className="w-full px-4 py-3 bg-white rounded-l-lg border border-gray-200 focus:border-[#C6E7FF] focus:ring-[#D4F6FF] focus:ring-opacity-50 focus:outline-none text-gray-900 placeholder:text-gray-500"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setShowCustomCodeInput(false);
                        setCustomCountryCode("");
                        setFormData({ ...formData, countryCode: "+1" }); // Reset to default
                      }}
                      className="px-3 bg-gray-100 border border-l-0 border-gray-200 rounded-r-lg hover:bg-gray-200 transition-colors"
                    >
                      <MaterialIcon name="close" size="sm" className="text-gray-600" />
                    </button>
                  </div>
                )}
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-[#C6E7FF] focus:ring-[#D4F6FF] focus:ring-opacity-50 focus:outline-none text-gray-900 placeholder:text-gray-500"
                />
              </div>

              <div>
                <p className="text-gray-900 mb-3">What are you looking for?</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <div
                      key={service}
                      onClick={() => toggleService(service)}
                      className={`px-4 py-2 rounded-lg border text-sm cursor-pointer transition-all flex items-center gap-2 ${
                        selectedServices.includes(service)
                          ? "bg-[#D4F6FF] border-[#C6E7FF] text-gray-900"
                          : "bg-white border-gray-200 text-gray-700 hover:border-[#C6E7FF]"
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${
                        selectedServices.includes(service)
                          ? "bg-white border-[#C6E7FF]"
                          : "border-gray-400"
                      }`}>
                        {selectedServices.includes(service) && (
                          <div className="w-2 h-2 rounded-sm bg-[#C6E7FF]"></div>
                        )}
                      </div>
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <textarea
                  placeholder="How can we help you?"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white rounded-lg border border-gray-200 focus:border-[#C6E7FF] focus:ring-[#D4F6FF] focus:ring-opacity-50 focus:outline-none text-gray-900 placeholder:text-gray-500"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full bg-[#C6E7FF] hover:bg-[#D4F6FF] text-gray-800 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 group ${
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
                  className="p-4 bg-[#D4F6FF]/50 text-gray-800 rounded-lg border border-[#C6E7FF]"
                >
                  Thank you! We've received your message and will get back to you soon.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-[#FFDDAE]/30 text-gray-800 rounded-lg border border-[#FFDDAE]"
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