"use client";

export default function CTASection() {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-12 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Get an Application Built for Your Business
        </h2>
        <p className="text-lg mb-8">
          Take your business to the next level with a custom mobile app! Our developers will create an 
          app that's visually stunning, user-friendly, and tailored to your needs.
        </p>
        <button 
          onClick={() => window.location.href = '/contact'}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
        >
          Schedule a Call 
          <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  )
} 