import React from "react";

export default function ServicesPage() {
  const services = [
    {
      title: "Grid-Tie Solar Installation",
      desc: "Connect your solar panels to the grid to reduce electricity bills effectively.",
    },
    {
      title: "Off-Grid Solar Systems",
      desc: "Ideal for remote areas without grid access; enjoy complete energy independence.",
    },
    {
      title: "Hybrid Solar Solutions",
      desc: "Combine grid reliability with battery backup for continuous power supply.",
    },
    {
      title: "Solar Panel Cleaning & Maintenance",
      desc: "Ensure optimal efficiency and longevity of your solar system.",
    },
    {
      title: "Site Inspection & System Design",
      desc: "Customized system design based on your property and energy needs.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-20">
        <h1 className="text-4xl font-bold text-center mb-10">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}