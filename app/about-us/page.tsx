import { type Metadata } from "next";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "About Us | Stacklance",
  description: "Learn about Stacklance's journey, mission, and the team behind our innovative digital solutions.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Stacklance
            </h1>
            <p className="text-xl text-gray-600">
              We're a team of passionate developers, designers, and digital experts committed to delivering exceptional digital solutions.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-gray-600">
                To empower businesses with innovative digital solutions that drive growth, efficiency, and success in the modern digital landscape.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-gray-600">
                To be the leading technology partner for businesses worldwide, known for our excellence, innovation, and commitment to client success.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-gray-100 mb-20">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Expert Team</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-blue-600 text-2xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                <p className="text-gray-600">
                  We stay ahead of technological trends to deliver cutting-edge solutions.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-blue-600 text-2xl mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our team consists of highly skilled professionals with diverse expertise.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <div className="text-blue-600 text-2xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold mb-3">Result Driven</h3>
                <p className="text-gray-600">
                  We focus on delivering measurable results and business value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 