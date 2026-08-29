import Link from "next/link";
import {
  Zap,
  Home,
  Battery,
  RefreshCw,
  Search,
  Handshake,
  Check,
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Zap,
      title: "Grid-Tie Solar Installation",
      desc: "Connect your solar panels to the utility grid and lower your electricity bills. Ideal for homes and businesses with reliable grid access.",
      details: [
        "Net metering potential",
        "Simple installation process",
        "Potential bill savings",
        "Utility grid connection",
      ],
    },
    {
      icon: Home,
      title: "Off-Grid Solar Systems",
      desc: "A complete solar power solution for remote properties without reliable grid access or for customers seeking greater energy independence.",
      details: [
        "Complete energy independence",
        "Ideal for remote properties",
        "Reduced utility dependence",
        "Battery storage system",
      ],
    },
    {
      icon: Battery,
      title: "Hybrid Solar Solutions",
      desc: "Combine solar power, the utility grid, and battery storage for a flexible system that can provide backup power during outages.",
      details: [
        "Solar + grid + battery",
        "Backup during outages",
        "Flexible energy management",
        "Improved energy reliability",
      ],
    },
    {
      icon: RefreshCw,
      title: "Solar Panel Cleaning & Maintenance",
      desc: "Keep your solar system operating efficiently with professional cleaning, inspection, maintenance, and performance checks.",
      details: [
        "Performance optimization",
        "Preventive maintenance",
        "Professional panel cleaning",
        "System performance checks",
      ],
    },
    {
      icon: Search,
      title: "Site Inspection & System Design",
      desc: "We assess your property and energy requirements to develop a solar system design suited to your available space, usage, and budget.",
      details: [
        "Property evaluation",
        "Solar potential assessment",
        "Custom system design",
        "Energy requirements analysis",
      ],
    },
    {
      icon: Handshake,
      title: "Ongoing Support & Monitoring",
      desc: "Continue receiving assistance after installation through system monitoring, troubleshooting, maintenance, and technical support.",
      details: [
        "System monitoring",
        "Technical support",
        "Performance tracking",
        "Maintenance assistance",
      ],
    },
  ];

  const process = [
    {
      step: "1",
      title: "Initial Consultation",
      desc: "We learn about your energy needs, answer your questions, and discuss which solar solution may be suitable for your property.",
    },
    {
      step: "2",
      title: "Site Assessment",
      desc: "We evaluate your property, roof condition, available space, sun exposure, and other factors that affect system performance.",
    },
    {
      step: "3",
      title: "Custom Design & Quote",
      desc: "We develop a solar system design based on your property and energy requirements, together with a clear project quotation.",
    },
    {
      step: "4",
      title: "Professional Installation",
      desc: "Our installation team handles the equipment installation, electrical connections, testing, and other necessary work.",
    },
    {
      step: "5",
      title: "Commissioning & Training",
      desc: "We test the completed system and explain the basic operation, monitoring, and maintenance procedures.",
    },
    {
      step: "6",
      title: "Ongoing Support",
      desc: "We remain available for system monitoring, maintenance assistance, troubleshooting, and technical support.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            Our Services
          </h1>

          <p className="text-lg text-gray-300 sm:text-xl">
            Complete solar energy solutions designed around your property,
            energy needs, and budget.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Solar Solutions for Your Needs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              From system design and installation to maintenance and support,
              we provide practical solar solutions for residential and
              commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >

                  {/* Service Header */}
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 text-center">

                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
                        <Icon
                          size={36}
                          strokeWidth={1.8}
                          className="text-green-600"
                        />
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h2>

                  </div>

                  {/* Service Content */}
                  <div className="flex flex-1 flex-col p-6">

                    <p className="mb-6 leading-relaxed text-gray-700">
                      {service.desc}
                    </p>

                    <div className="mb-6">
                      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-gray-500">
                        Key Features
                      </p>

                      <ul className="space-y-3">

                        {service.details.map((detail, detailIndex) => (
                          <li
                            key={detailIndex}
                            className="flex items-start gap-3 text-sm text-gray-700"
                          >
                            <Check
                              size={18}
                              strokeWidth={2.5}
                              className="mt-0.5 flex-shrink-0 text-green-600"
                            />

                            <span>{detail}</span>
                          </li>
                        ))}

                      </ul>
                    </div>

                    {/* Button */}
                    <div className="mt-auto">
                      <Link
                        href="/quote"
                        className="block w-full rounded-lg bg-green-600 px-4 py-3 text-center font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md"
                      >
                        Request a Quote
                      </Link>
                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-4xl px-6">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Service Process
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              We keep the process simple and transparent, from your first
              consultation to ongoing system support.
            </p>
          </div>

          <div className="space-y-6">

            {process.map((item, index) => (
              <div
                key={index}
                className="flex gap-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >

                {/* Number */}
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white shadow-sm">
                    {item.step}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="leading-relaxed text-gray-700">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">

          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Why Choose Solarworks?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-600">
              Our approach focuses on practical system design, quality
              installation, transparent communication, and long-term support.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Zap className="text-green-600" size={28} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Custom Solutions
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                Every solar system is designed around the customer's property,
                energy consumption, and goals.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Handshake className="text-green-600" size={28} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Professional Service
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                We focus on clear communication, careful installation, and
                dependable customer support.
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <RefreshCw className="text-green-600" size={28} />
              </div>

              <h3 className="mb-2 text-lg font-bold text-gray-900">
                Long-Term Support
              </h3>

              <p className="text-sm leading-relaxed text-gray-600">
                Our relationship with customers continues beyond installation
                through maintenance and technical assistance.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 py-20 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
            Ready to Explore Solar?
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-green-50">
            Tell us about your property and energy needs. We'll help you
            explore a suitable solar solution.
          </p>

          <Link
            href="/quote"
            className="inline-block rounded-lg bg-white px-8 py-4 font-bold text-green-700 shadow-lg transition-all duration-200 hover:bg-gray-100 hover:shadow-xl"
          >
            Get a Free Quote
          </Link>

        </div>
      </section>

    </main>
  );
}