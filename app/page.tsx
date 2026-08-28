"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [estimatorInput, setEstimatorInput] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does solar energy work?",
      answer: "Solar panels convert sunlight into electricity through the photovoltaic effect. Grid-tie systems send excess power back to the grid, while off-grid systems store energy in batteries for later use.",
    },
    {
      question: "What's the difference between Grid-Tie, Hybrid, and Off-Grid systems?",
      answer: "Grid-Tie systems connect to the utility grid and save money on bills. Hybrid systems combine grid connection with battery backup for reliability. Off-Grid systems operate independently without utility connection.",
    },
    {
      question: "What information do you need for a quote?",
      answer: "We typically need your current electricity bill, roof condition, location, and energy goals. This helps our team design a system tailored to your needs.",
    },
    {
      question: "How long does installation take?",
      answer: "Most residential installations take 1-3 days depending on system size and complexity. Our team will provide a specific timeline during your site assessment.",
    },
    {
      question: "Do you offer maintenance and support after installation?",
      answer: "Yes, we provide ongoing maintenance, monitoring, and support to ensure your system operates efficiently throughout its lifetime.",
    },
  ];

  const solutionTypes = [
    {
      title: "Grid-Tie Solar",
      icon: "⚡",
      description: "Connected to the utility grid",
      who: "Homeowners and businesses with grid access",
      benefits: ["Lower electricity bills", "Net metering potential", "Simple installation"],
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-300",
    },
    {
      title: "Hybrid Solar",
      icon: "🔋",
      description: "Grid-connected with battery backup",
      who: "Those seeking grid reliability with backup power",
      benefits: ["24/7 power availability", "Grid independence", "Best of both worlds"],
      color: "from-green-50 to-green-100",
      borderColor: "border-green-300",
    },
    {
      title: "Off-Grid Solar",
      icon: "🏡",
      description: "Fully independent power system",
      who: "Remote properties or complete energy independence",
      benefits: ["Complete independence", "Ideal for remote areas", "No utility bills"],
      color: "from-amber-50 to-amber-100",
      borderColor: "border-amber-300",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "Discuss your energy needs, goals, and budget with our solar specialists.",
    },
    {
      number: "02",
      title: "Site Assessment",
      description: "Professional evaluation of your property's solar potential and conditions.",
    },
    {
      number: "03",
      title: "System Design",
      description: "Custom-engineered system tailored to maximize your energy production.",
    },
    {
      number: "04",
      title: "Installation",
      description: "Professional installation by certified technicians with minimal disruption.",
    },
    {
      number: "05",
      title: "Support",
      description: "Ongoing monitoring, maintenance, and customer support for years to come.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 z-10">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Power Your Future with <span className="text-green-400">Solar</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Reliable solar energy solutions for homes and businesses. Take control of your energy future with Solarworks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote">
                <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get a Free Quote
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 border border-slate-600">
                  Explore Solutions
                </button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="/images/solarworks.jpg"
                alt="Solar installation"
                className="relative rounded-2xl shadow-2xl w-full object-cover h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Value Proposition Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Solarworks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🛠️", title: "Professional Installation", desc: "Expert, certified installation team" },
              { icon: "⚙️", title: "Custom System Design", desc: "Tailored solutions for your needs" },
              { icon: "💎", title: "Quality Components", desc: "Reliable, durable solar equipment" },
              { icon: "🤝", title: "Ongoing Support", desc: "Maintenance and support services" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Solutions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Solar Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionTypes.map((solution, i) => (
              <div
                key={i}
                className={`bg-gradient-to-br ${solution.color} border-2 ${solution.borderColor} rounded-2xl p-8 hover:shadow-lg transition-all duration-200`}
              >
                <div className="text-5xl mb-4">{solution.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                <p className="text-gray-700 mb-4 font-medium">{solution.description}</p>
                <div className="mb-6 pb-6 border-b border-gray-300">
                  <p className="text-sm text-gray-600">
                    <strong>Best for:</strong> {solution.who}
                  </p>
                </div>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600 font-bold">✓</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solar Estimator Section */}
      <section className="py-20 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg p-10 border border-gray-100">
            <h2 className="text-3xl font-bold mb-4">Preliminary Solar Estimator</h2>
            <p className="text-gray-600 mb-8">
              Get a rough idea of your system size based on your monthly electricity consumption. This estimate is preliminary and not a substitute for a professional site assessment.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Monthly Electricity Consumption (kWh):
                </label>
                <input
                  type="number"
                  value={estimatorInput}
                  onChange={(e) => setEstimatorInput(e.target.value)}
                  placeholder="Enter your monthly kWh usage"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none"
                />
                <p className="text-xs text-gray-500 mt-2">
                  Find this on your electricity bill or average monthly usage.
                </p>
              </div>

              {estimatorInput && (
                <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6">
                  <p className="text-gray-700 mb-3">
                    Based on <strong>{estimatorInput} kWh/month</strong>, you may need:
                  </p>
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    ~{Math.ceil(parseInt(estimatorInput) / 4)} kW System
                  </div>
                  <p className="text-sm text-gray-600">
                    This is an estimate assuming typical residential solar conditions in the Philippines. Actual system size depends on roof space, sun exposure, and specific energy goals.
                  </p>
                </div>
              )}

              <Link href="/quote">
                <button className="w-full mt-6 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200">
                  Get a Free Professional Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center text-3xl font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
                {i < processSteps.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-10 text-gray-300 text-2xl -mr-6">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects / Installations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Sample Projects</h2>
          <p className="text-center text-gray-600 mb-12">
            <em>These are demonstration projects showcasing our solar solutions capabilities.</em>
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "5kW Grid-Tie System",
                location: "Minglanilla, Cebu",
                image: "/images/solarworks.jpg",
                description: "Residential installation designed to reduce electricity bills.",
              },
              {
                title: "3kW Off-Grid System",
                location: "Balamban, Cebu",
                image: "/images/solarworks.jpg",
                description: "Remote property powered completely by solar with battery storage.",
              },
              {
                title: "8kW Hybrid System",
                location: "Cebu City",
                image: "/images/solarworks.jpg",
                description: "Commercial system combining grid connection with battery backup.",
              },
            ].map((project, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative overflow-hidden bg-gray-200 h-48">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">📍 {project.location}</p>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-semibold text-left text-gray-900">{faq.question}</h3>
                  <span className="text-2xl text-green-600">{expandedFaq === i ? "−" : "+"}</span>
                </button>
                {expandedFaq === i && (
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Assistant Preview Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Quick Answers?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Use our AI Solar Assistant to get instant answers about solar energy, system types, installation, and more.
          </p>
          <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-200">
            <p className="text-gray-600 mb-6">
              💬 Click the chat icon in the bottom-right corner to start a conversation with our AI assistant.
            </p>
            <p className="text-sm text-gray-500">
              Available 24/7 • No appointment needed • Quick responses to common questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact / Quote CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Explore Solar for Your Property?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Get in touch for a preliminary consultation. Our solar specialists will help you understand your options and provide a free quote.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div>
              <p className="text-gray-400 mb-2">Phone</p>
              <p className="text-2xl font-semibold">0999-123-4567</p>
            </div>
            <div>
              <p className="text-gray-400 mb-2">Email</p>
              <p className="text-2xl font-semibold">solarbusiness@email.com</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote">
              <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Get a Free Quote
              </button>
            </Link>
            <Link href="/contact">
              <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all duration-200 border border-slate-600">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
