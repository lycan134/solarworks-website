import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Solarworks</h1>
          <p className="text-xl text-gray-300">
            Leading solar energy solutions for homes and businesses across the Philippines
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-600">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower homes and businesses with affordable, reliable solar energy solutions that reduce electricity
                costs and advance sustainable energy independence across the Philippines.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We believe in making solar energy accessible, transparent, and seamless for every customer.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-green-600">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the most trusted solar energy provider in the Philippines, known for professional installation,
                quality systems, and exceptional customer support.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                We're committed to helping our customers achieve energy independence and contribute to a sustainable
                future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Company */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Solarworks?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "👥",
                title: "Expert Team",
                description:
                  "Our certified and experienced installation team brings years of expertise in designing and installing solar systems.",
              },
              {
                icon: "🔧",
                title: "Custom Solutions",
                description:
                  "We design every system specifically for your property, energy needs, and budget. No cookie-cutter approaches.",
              },
              {
                icon: "💎",
                title: "Quality Components",
                description:
                  "We use reliable, durable solar equipment and inverters from trusted manufacturers for long-lasting performance.",
              },
              {
                icon: "🤝",
                title: "Long-Term Support",
                description:
                  "Your installation doesn't end on day one. We provide ongoing monitoring, maintenance, and support services.",
              },
              {
                icon: "💰",
                title: "Transparent Pricing",
                description:
                  "No hidden fees. We provide clear, detailed quotes and explain every aspect of your system before installation.",
              },
              {
                icon: "🌍",
                title: "Sustainability Focus",
                description:
                  "We're passionate about renewable energy and helping customers reduce their carbon footprint while saving money.",
              },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
          <div className="space-y-8">
            {[
              {
                number: "01",
                title: "Consultation",
                description:
                  "We start by understanding your energy needs, current usage, and goals. We'll answer all your questions about solar energy and different system types.",
              },
              {
                number: "02",
                title: "Site Assessment",
                description:
                  "Our team visits your property to evaluate roof conditions, sun exposure, space availability, and other factors that affect system performance.",
              },
              {
                number: "03",
                title: "Custom Design",
                description:
                  "We create a detailed system design optimized for your property and energy needs, with accurate cost-benefit analysis and ROI projections.",
              },
              {
                number: "04",
                title: "Professional Installation",
                description:
                  "Our certified installers handle everything—equipment delivery, installation, electrical connections, and inspections. Minimal disruption to your home or business.",
              },
              {
                number: "05",
                title: "Ongoing Support",
                description:
                  "After installation, we provide system monitoring, maintenance, and technical support to ensure optimal performance and maximum savings.",
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-500 text-white font-bold text-xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-700">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Service Area</h2>
          <p className="text-lg text-gray-700 mb-4">
            We serve Mindanao and surrounding regions of the Philippines, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Dipolog City", "Cebu", "Minglanilla", "Balamban", "Zamboanga", "Davao", "Iligan", "General Santos"].map(
              (city, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold text-gray-800">{city}</p>
                </div>
              )
            )}
          </div>
          <p className="text-gray-600 mt-6 text-sm">
            Have a different location? Contact us to discuss availability for your area.
          </p>
        </div>
      </section>

      {/* Portfolio Note */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Portfolio Project</h2>
          <p className="text-gray-700 bg-blue-50 border-2 border-blue-300 rounded-lg p-6 max-w-2xl mx-auto">
            <strong>Note:</strong> Solarworks is a demonstration and portfolio project showcasing professional web design
            and solar company branding. The information provided is for educational and demonstration purposes. This
            website demonstrates responsive design, component-based architecture, and best practices for conversion-focused
            solar industry websites.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-lg mb-8">
            Get a free consultation and quote from our solar experts. Let's explore how solar can work for you.
          </p>
          <Link href="/quote">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}