export default function ContactPage() {
  return (
    <div className="pt-20">
      <main className="container mx-auto min-h-screen pt-28 md:pt-32">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-2 rounded-md border"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-2 rounded-md border"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                className="w-full p-2 rounded-md border h-32"
                placeholder="How can we help?"
              />
            </div>
            
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </main>
    </div>
  )
} 