import React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-[url('/images/solarworks.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center">
        <div className="bg-black/50 p-10 rounded-2xl text-center text-white max-w-2xl">
          <h1 className="text-5xl font-bold mb-4">Reliable Solar Power Solutions</h1>
          <p className="text-xl mb-6">Grid-Tie • Off-Grid • Hybrid Systems for Homes & Businesses</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-6 py-3 bg-yellow-400 font-semibold rounded-xl shadow-xl hover:bg-yellow-500 transition">Get a Free Quote</button>
            <button className="px-6 py-3 bg-green-500 font-semibold rounded-xl shadow-xl hover:bg-green-600 transition">Call Us</button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {[
          { title: "Expert Installation Team", desc: "Professional and certified solar installers." },
          { title: "Affordable Solar Packages", desc: "Customized packages for any budget." },
          { title: "Free Site Assessment", desc: "We evaluate your property for optimal solar setup." },
        ].map((item, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl shadow-md text-center">
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <h2 className="text-4xl font-bold text-center mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {[
            { title: "Grid-Tie Solar Installation", desc: "Lower your electricity bill using grid-connected solar systems." },
            { title: "Off-Grid Solar Systems", desc: "Perfect for remote areas or complete energy independence." },
            { title: "Hybrid Solar Solutions", desc: "Combine grid reliability with backup storage for ultimate efficiency." },
          ].map((service, i) => (
            <div key={i} className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Assistant Section */}
      <section className="py-20 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold mb-4">AI Solar Assistant</h2>
        <p className="max-w-2xl mx-auto text-lg mb-6">
          Ask questions 24/7 about solar pricing, system sizing, installation process, and more.
        </p>
        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-xl hover:bg-blue-700 transition">
          Chat with AI Assistant
        </button>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-2">📞 0999-123-4567</p>
        <p className="mb-2">📧 solarbusiness@email.com</p>
        <p>📍 Dipolog City, Philippines</p>
        <button className="mt-6 px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-xl hover:bg-yellow-500 transition">
          Request a Free Quote
        </button>
      </section>
    </div>
  );
}
