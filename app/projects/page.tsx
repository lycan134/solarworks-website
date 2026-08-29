import Link from "next/link";
import { MapPin, Zap, Battery, Home, Wrench, BarChart3, ArrowRight } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Residential Grid-Tie Solar",
      location: "Minglanilla, Cebu",
      image: "/images/solar1.png",
      description:
        "A residential solar installation designed to help reduce electricity costs while maintaining a reliable connection to the utility grid.",
      systemType: "Grid-Tie",
      capacity: "5 kW",
      icon: Zap,
    },
    {
      title: "Off-Grid Home System",
      location: "Balamban, Cebu",
      image: "/images/solar2.png",
      description:
        "A standalone solar power system designed for a residential property requiring reliable electricity with battery storage.",
      systemType: "Off-Grid",
      capacity: "3 kW",
      icon: Home,
    },
    {
      title: "Commercial Hybrid System",
      location: "Cebu City",
      image: "/images/solar3.png",
      description:
        "A hybrid solar solution combining solar generation, grid connection, and battery storage for improved energy reliability.",
      systemType: "Hybrid",
      capacity: "8 kW",
      icon: Battery,
    },
  ];

  const expertise = [
    {
      icon: Zap,
      title: "Grid-Tie Systems",
      description:
        "Solar systems designed to work alongside the local utility grid and help reduce electricity consumption from the grid.",
    },
    {
      icon: Battery,
      title: "Battery Storage",
      description:
        "Energy storage solutions that can provide backup power and improve energy availability when solar production is limited.",
    },
    {
      icon: Wrench,
      title: "Custom Installation",
      description:
        "Solar systems are planned around the property's available space, energy requirements, and installation conditions.",
    },
    {
      icon: BarChart3,
      title: "System Monitoring",
      description:
        "Performance monitoring helps homeowners and businesses keep track of their solar system's energy production.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 text-center">
          <p className="text-green-400 font-semibold uppercase tracking-wider text-sm mb-4">
            Solar Installations
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Our Projects
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Explore examples of residential and commercial solar solutions
            designed to provide cleaner, more reliable energy.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-green-600 font-semibold mb-2">
              FEATURED WORK
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Solar Solutions for Different Needs
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600">
              From residential rooftop systems to larger hybrid installations,
              every solar project requires a solution suited to the property
              and its energy requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.title}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm text-gray-900 px-3 py-2 rounded-full text-sm font-semibold shadow-sm">
                        <Icon size={16} className="text-green-600" />
                        {project.systemType}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>

                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                      <MapPin size={16} className="text-green-600" />
                      {project.location}
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Project details */}
                    <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-5 mb-6">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
                          Capacity
                        </p>

                        <p className="text-xl font-bold text-green-600 mt-1">
                          {project.capacity}
                        </p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wide text-gray-400 font-semibold">
                          System
                        </p>

                        <p className="text-lg font-bold text-gray-900 mt-1">
                          {project.systemType}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/quote"
                      className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition-colors"
                    >
                      Request Similar System
                      <ArrowRight size={17} />
                    </Link>

                  </div>
                </article>
              );
            })}
          </div>

          {/* Demo Notice */}
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
              <p className="text-sm text-blue-900 leading-relaxed">
                <strong>Portfolio Demonstration:</strong>{" "}
                The projects shown on this page are sample projects created
                for demonstration purposes. Actual system specifications,
                locations, savings, and installation details will vary
                depending on the customer's property and energy requirements.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-14">
            <p className="text-green-600 font-semibold mb-2">
              OUR EXPERTISE
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Can Help With
            </h2>

            <p className="max-w-2xl mx-auto text-gray-600">
              We provide practical solar solutions for homeowners and
              businesses looking to reduce their dependence on conventional
              electricity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="bg-white rounded-xl p-7 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center mb-5">
                    <Icon size={24} className="text-green-600" />
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Planning Your Own Solar Project?
          </h2>

          <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8">
            Tell us about your property and electricity usage. We'll help you
            explore a solar solution that fits your needs.
          </p>

          <Link
            href="/quote"
            className="inline-flex items-center gap-2 bg-white text-green-700 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold shadow-lg transition-colors"
          >
            Get a Free Quote
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}