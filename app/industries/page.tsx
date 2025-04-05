export default function IndustriesPage() {
  return (
    <main className="container mx-auto min-h-screen pt-28 md:pt-32">
      <h1 className="text-4xl font-bold mb-6">Industries We Serve</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Delivering innovative solutions across diverse sectors
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <IndustryCard
          title="Healthcare"
          description="Digital solutions for healthcare providers, including EMR systems, patient portals, and medical imaging solutions."
          icon="🏥"
        />
        <IndustryCard
          title="Finance"
          description="Secure fintech solutions, payment processing systems, and banking software."
          icon="💰"
        />
        <IndustryCard
          title="E-commerce"
          description="Custom online stores, marketplace platforms, and inventory management systems."
          icon="🛍️"
        />
        <IndustryCard
          title="Education"
          description="Learning management systems, educational platforms, and student engagement tools."
          icon="📚"
        />
        <IndustryCard
          title="Manufacturing"
          description="Industry 4.0 solutions, IoT integration, and supply chain optimization."
          icon="🏭"
        />
        <IndustryCard
          title="Real Estate"
          description="Property management systems, virtual tours, and real estate platforms."
          icon="🏢"
        />
      </div>

      <div className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl p-12 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Get an Application Built for Your Business</h2>
          <p className="text-lg mb-8">
            Take your business to the next level with a custom mobile app! Our developers will create an app that's visually stunning, user-friendly, and tailored to your needs.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Schedule a Call →
          </button>
        </div>
      </div>
    </main>
  )
}

function IndustryCard({
  title,
  description,
  icon
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="p-6 rounded-lg border bg-card">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
} 