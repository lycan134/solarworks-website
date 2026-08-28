import Link from "next/link";
import React from "react";
import { MapPin, Zap, Wrench, BarChart3, Home } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "5kW Grid-Tie System",
      location: "Minglanilla, Cebu",
      image: "/images/solarworks.jpg",
      description: "Residential installation designed to reduce monthly electric bills by approximately 60% using grid-connected solar panels.",
      systemType: "Grid-Tie",
      capacity: "5 kW",
    },
    {
      title: "3kW Off-Grid System",
      location: "Balamban, Cebu",
      image: "/images/solarworks.jpg",
      description: "Remote home powered completely by solar energy with lithium battery backup providing 24/7 power availability.",
      systemType: "Off-Grid",
      capacity: "3 kW",
    },
    {
      title: "8kW Hybrid System",
      location: "Cebu City",
      image: "/images/solarworks.jpg",
      description: "Commercial/industrial system combining grid connection with battery storage for uninterrupted business operations.",
      systemType: "Hybrid",
      capacity: "8 kW",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Sample Projects</h1>
          <p className="text-xl text-gray-300">
            <em>Demonstration projects showcasing our solar solutions capabilities</em>
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div key={i} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200">
                {/* Image */}
                <div className="relative overflow-hidden bg-gray-200 h-48">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-200" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h3>
                    <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full ml-2">
                      {project.systemType}
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm mb-4 flex items-center gap-1">
                    📍 {project.location}
                  </p>

                  <p className="text-gray-700 text-sm mb-6">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-t border-gray-200 pt-6">
                    <div className="text-center">
                      <p className="text-gray-500 text-xs uppercase font-semibold">System Capacity</p>
                      <p className="text-2xl font-bold text-green-600">{project.capacity}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-gray-500 text-xs uppercase font-semibold">System Type</p>
                      <p className="text-lg font-bold text-gray-900">{project.systemType}</p>
                    </div>
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

          {/* Note about demo projects */}
          <div className="mt-16 bg-blue-50 border-2 border-blue-300 rounded-lg p-8 text-center max-w-2xl mx-auto">
            <p className="text-gray-700">
              <strong>Portfolio Note:</strong> These sample projects demonstrate our capabilities and expertise in various solar system types. They are used for demonstration and portfolio purposes to showcase the quality and diversity of solar installations we can provide.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Our Project Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "⚡",
                title: "Diverse System Types",
                desc: "Expertise in Grid-Tie, Off-Grid, and Hybrid systems for residential and commercial applications.",
              },
              {
                icon: "🔧",
                title: "Custom Engineering",
                desc: "Each project is custom-designed to maximize efficiency and ROI for the specific property and needs.",
              },
              {
                icon: "👨‍🔧",
                title: "Professional Installation",
                desc: "Certified installers with years of experience ensure quality workmanship on every project.",
              },
              {
                icon: "📊",
                title: "Performance Monitoring",
                desc: "Real-time monitoring and analytics to ensure optimal system performance and customer satisfaction.",
              },
              {
                icon: "🏠",
                title: "Residential & Commercial",
                desc: "Proven experience with both residential homes and commercial/industrial energy demands.",
              },
              {
                icon: "🌍",
                title: "Local Expertise",
                desc: "Deep understanding of Philippines climate, conditions, and energy landscape for optimal designs.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Solar Project?</h2>
          <p className="text-lg mb-8">
            Get a free site assessment and custom quote tailored to your property and energy needs.
          </p>
          <Link href="/quote">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Request a Free Quote
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
