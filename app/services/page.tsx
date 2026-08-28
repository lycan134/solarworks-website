import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const services = [
    {
      icon: "⚡",
      title: "Grid-Tie Solar Installation",
      desc: "Connect your solar panels to the utility grid and lower your electricity bills effectively. Perfect for homeowners and businesses with grid access.",
      details: [
        "Net metering potential",
        "Simple installation process",
        "Immediate bill savings",
        "Grid backup available",
      ],
    },
    {
      icon: "🏡",
      title: "Off-Grid Solar Systems",
      desc: "Ideal for remote areas without grid access or those seeking complete energy independence. Fully autonomous power system with battery storage.",
      details: [
        "Complete independence",
        "Perfect for remote properties",
        "No utility bills",
        "Battery backup included",
      ],
    },
    {
      icon: "🔋",
      title: "Hybrid Solar Solutions",
      desc: "Combine grid reliability with battery backup for continuous power supply. The best of both worlds for maximum flexibility and security.",
      details: [
        "Grid + battery backup",
        "24/7 power availability",
        "Optimal cost-efficiency",
        "Backup during outages",
      ],
    },
    {
      icon: "🧹",
      title: "Solar Panel Cleaning & Maintenance",
      desc: "Ensure optimal efficiency and longevity of your solar system with regular professional maintenance and cleaning services.",
      details: [
        "Performance optimization",
        "Preventive maintenance",
        "Professional cleaning",
        "System monitoring",
      ],
    },
    {
      icon: "🔍",
      title: "Site Inspection & System Design",
      desc: "Custom system design based on your property, energy needs, and budget. Professional assessment to maximize your solar potential.",
      details: [
        "Property evaluation",
        "Custom system design",
        "Energy analysis",
        "ROI projections",
      ],
    },
    {
      icon: "🤝",
      title: "Ongoing Support & Monitoring",
      desc: "Comprehensive support after installation including system monitoring, troubleshooting, and technical assistance.",
      details: [
        "24/7 monitoring",
        "Technical support",
        "Performance tracking",
        "Warranty management",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300">
            Complete solar energy solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200"
              >
                <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 text-center">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-xl font-bold text-gray-900">{service.title}</h2>
                </div>

                <div className="p-6">
                  <p className="text-gray-700 mb-6">{service.desc}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-600 mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {service.details.map((detail, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-green-500 font-bold mt-1">✓</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/quote">
                    <button className="w-full px-4 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Service Process</h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                desc: "We meet with you to understand your energy needs, answer questions, and explore suitable solutions.",
              },
              {
                step: "2",
                title: "Site Assessment",
                desc: "Our experts visit your property to evaluate roof conditions, sun exposure, and system requirements.",
              },
              {
                step: "3",
                title: "Custom Design & Quote",
                desc: "We create a detailed system design with accurate pricing, timeline, and expected energy savings.",
              },
              {
                step: "4",
                title: "Installation",
                desc: "Our certified team handles professional installation with minimal disruption to your property.",
              },
              {
                step: "5",
                title: "Commissioning & Training",
                desc: "System testing, activation, and comprehensive training on system usage and maintenance.",
              },
              {
                step: "6",
                title: "Ongoing Support",
                desc: "Continuous monitoring, maintenance services, and technical support throughout system lifetime.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Switch to Solar?</h2>
          <p className="text-lg mb-8">
            Get a free consultation and personalized quote from our solar experts today.
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