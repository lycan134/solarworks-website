import Link from "next/link";
import {
  Users,
  Wrench,
  Heart,
  Handshake,
  DollarSign,
  Sun,
  ArrowRight,
  CheckCircle2,
  MapPin,
} from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Wrench,
      title: "Thoughtful System Design",
      description:
        "Every solar system should match the property's energy needs, available space, and long-term goals.",
    },
    {
      icon: Heart,
      title: "Quality First",
      description:
        "We focus on dependable equipment and installation practices designed for long-term performance.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      description:
        "We explain your options clearly so you can make confident decisions about your energy investment.",
    },
    {
      icon: Handshake,
      title: "Long-Term Support",
      description:
        "Our relationship doesn't end after installation. We believe in continued service and support.",
    },
    {
      icon: DollarSign,
      title: "Practical Solutions",
      description:
        "We aim to provide solar solutions that make financial and practical sense for each customer.",
    },
    {
      icon: Sun,
      title: "Sustainable Future",
      description:
        "Solar energy can help households and businesses reduce their dependence on conventional electricity.",
    },
  ];

  const process = [
    {
      number: "01",
      title: "Consultation",
      description:
        "We learn about your electricity usage, property, budget, and energy goals.",
    },
    {
      number: "02",
      title: "Site Assessment",
      description:
        "We evaluate the property, roof condition, available space, and solar potential.",
    },
    {
      number: "03",
      title: "System Design",
      description:
        "We develop a solar solution designed around your specific energy requirements.",
    },
    {
      number: "04",
      title: "Installation",
      description:
        "The system is professionally installed with attention to safety, reliability, and performance.",
    },
    {
      number: "05",
      title: "Support",
      description:
        "We remain available for monitoring, maintenance, and assistance after installation.",
    },
  ];

  const locations = [
    "Cebu",
    "Dipolog City",
    "Davao",
    "Iligan",
    "Zamboanga",
    "General Santos",
    "Minglanilla",
    "Balamban",
  ];

  return (
    <main className="bg-white text-slate-800">

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/solar1.png"
            alt="Solar panels installed on a property"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="max-w-3xl">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-sm font-medium text-green-300">
              <Sun size={16} />
              Solar Energy Solutions
            </div>

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              Powering a more
              <span className="block text-green-400">
                sustainable future.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Solarworks helps homes and businesses explore practical solar
              energy solutions designed around their energy needs, property,
              and long-term goals.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-7 py-4 font-semibold text-white transition hover:bg-green-600"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-slate-800/70 px-7 py-4 font-semibold text-white transition hover:bg-slate-700"
              >
                Explore Our Solutions
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-20">

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
              About Solarworks
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Making solar easier to understand.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Choosing a solar energy system is a significant decision.
              Solarworks is built around a simple idea: customers should
              understand their options before making an investment.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              From initial consultation and site assessment to system design,
              installation, and ongoing support, our approach focuses on
              practical solutions and clear communication.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Solutions designed around your energy needs",
                "Clear and straightforward recommendations",
                "Focus on reliability and long-term value",
                "Support beyond the initial installation",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    className="mt-0.5 flex-shrink-0 text-green-500"
                    size={21}
                  />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>


          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/solar2.png"
                alt="Solar energy installation"
                className="h-[500px] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-xl bg-white p-6 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 text-green-600">
                  <Sun size={26} />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Energy
                  </p>
                  <p className="font-bold text-slate-900">
                    Built for the future
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          MISSION / VISION
      ===================================================== */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Direction
            </p>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              A simpler approach to solar.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl bg-white p-8 shadow-sm md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
                <Sun size={25} />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                To help homes and businesses make informed decisions about
                solar energy through practical solutions, quality
                installations, and dependable customer support.
              </p>
            </div>


            <div className="rounded-2xl bg-slate-900 p-8 text-white shadow-sm md:p-10">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                <ArrowRight size={25} />
              </div>

              <h3 className="text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-4 text-lg leading-relaxed text-slate-300">
                To contribute to a future where reliable and sustainable
                energy is more accessible to households and businesses
                throughout the Philippines.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          VALUES
      ===================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
              Why Solarworks
            </p>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              What we value.
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              A solar investment is about more than panels. It is about
              reliability, transparency, and long-term value.
            </p>
          </div>


          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="group rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition group-hover:bg-green-500 group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {value.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          IMAGE FEATURE
      ===================================================== */}
      <section className="overflow-hidden bg-slate-950">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">

          <div className="relative min-h-[400px]">
            <img
              src="/images/solar3.png"
              alt="Professional solar installation"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center px-6 py-16 md:px-14 md:py-24">

            <div className="max-w-xl">

              <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                Built Around Your Needs
              </p>

              <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                Every property is different.
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-slate-300">
                Solar requirements vary depending on electricity consumption,
                roof conditions, available space, location, and energy goals.
                That's why we believe solar solutions should be designed
                around the customer rather than a one-size-fits-all package.
              </p>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-green-400 transition hover:text-green-300"
              >
                Explore our solutions
                <ArrowRight size={18} />
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Process
            </p>

            <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
              From consultation to support.
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              A straightforward process designed to help customers understand
              every stage of their solar investment.
            </p>
          </div>


          <div className="relative">

            <div className="absolute left-6 top-8 hidden h-px bg-slate-200 md:block md:w-[calc(100%-3rem)]" />

            <div className="grid gap-10 md:grid-cols-5">

              {process.map((step) => (
                <div
                  key={step.number}
                  className="relative"
                >
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-green-500 font-bold text-white shadow-md">
                    {step.number}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          SERVICE AREA
      ===================================================== */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <div className="mx-auto mb-12 max-w-2xl">

            <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
              <MapPin size={24} />
            </div>

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Service Area
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Serving communities across the Philippines.
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              Our service coverage can be customized based on the actual
              operating areas of your solar business.
            </p>

          </div>


          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

            {locations.map((location) => (
              <div
                key={location}
                className="rounded-xl border border-slate-200 bg-white px-4 py-5 font-semibold text-slate-700 shadow-sm"
              >
                {location}
              </div>
            ))}

          </div>

          <p className="mt-8 text-sm text-slate-500">
            * Service areas shown are demonstration content and can be
            replaced with your actual coverage areas.
          </p>

        </div>
      </section>


      {/* =====================================================
          PORTFOLIO NOTE
      ===================================================== */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6">

          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">

            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Portfolio Demonstration
            </p>

            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              About this Solarworks website
            </h2>

            <p className="mt-4 leading-relaxed text-slate-700">
              Solarworks is currently presented as a demonstration website
              created to showcase modern web design, responsive development,
              solar industry branding, and interactive customer tools.
            </p>

            <p className="mt-4 leading-relaxed text-slate-700">
              Company information, contact details, service areas, projects,
              testimonials, and other business-specific content can be
              replaced with the client's actual information.
            </p>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="bg-gradient-to-br from-green-500 to-green-600 py-20 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-100">
            Start Your Solar Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to explore solar?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-green-50">
            Tell us about your property and energy needs. We'll help you
            explore the right solar solution for your situation.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-green-600 shadow-lg transition hover:bg-slate-50"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-green-600/30 px-8 py-4 font-semibold text-white transition hover:bg-green-600/50"
            >
              Contact Solarworks
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}
