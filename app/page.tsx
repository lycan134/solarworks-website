"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Battery,
  Check,
  ChevronDown,
  Home,
  MapPin,
  MessageCircle,
  Settings,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

const solutions = [
  {
    title: "Grid-Tie Solar",
    icon: Zap,
    description:
      "Reduce your electricity costs by generating clean energy while staying connected to the utility grid.",
    benefits: [
      "Lower monthly electricity bills",
      "Ideal for homes and businesses",
      "Simple and cost-effective setup",
    ],
  },
  {
    title: "Hybrid Solar",
    icon: Battery,
    description:
      "Combine solar energy, the utility grid, and battery storage for greater energy security.",
    benefits: [
      "Battery backup during outages",
      "Reduce grid dependence",
      "Flexible energy management",
    ],
  },
  {
    title: "Off-Grid Solar",
    icon: Home,
    description:
      "Generate and store your own electricity for properties where grid access is limited or unavailable.",
    benefits: [
      "Complete energy independence",
      "Ideal for remote properties",
      "Solar plus battery storage",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Tell us about your property, electricity usage, and energy goals.",
  },
  {
    number: "02",
    title: "Site Assessment",
    description:
      "We evaluate your roof, electrical system, available space, and solar potential.",
  },
  {
    number: "03",
    title: "System Design",
    description:
      "Our team develops a system designed around your energy requirements.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Professional installation with careful attention to safety and quality.",
  },
  {
    number: "05",
    title: "Support",
    description:
      "We remain available for monitoring, maintenance, and future support.",
  },
];

const faqs = [
  {
    question: "How much can solar reduce my electricity bill?",
    answer:
      "Savings depend on your electricity consumption, system size, roof conditions, utility rates, and other factors. A proper site assessment provides a more accurate estimate.",
  },
  {
    question:
      "What's the difference between grid-tie, hybrid, and off-grid solar?",
    answer:
      "Grid-tie systems work with the utility grid. Hybrid systems add battery storage for backup and greater energy flexibility. Off-grid systems operate independently from the utility grid and rely on solar and battery storage.",
  },
  {
    question: "How do I know what system size I need?",
    answer:
      "System size depends primarily on your electricity consumption and available solar resources. You can use our preliminary estimator below for a rough starting point.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Many residential installations can be completed within a few days, although the actual timeline depends on system size, property conditions, permitting, and other project requirements.",
  },
  {
    question: "Do you provide after-sales support?",
    answer:
      "Yes. Solar systems require long-term care, so monitoring, maintenance, troubleshooting, and customer support are important parts of the Solarworks experience.",
  },
];

const projects = [
  {
    title: "5kW Grid-Tie System",
    location: "Minglanilla, Cebu",
    image: "/images/solar1.png",
    description:
      "Residential solar installation designed to reduce electricity costs while remaining connected to the utility grid.",
  },
  {
    title: "3kW Off-Grid System",
    location: "Balamban, Cebu",
    image: "/images/solar2.png",
    description:
      "Solar and battery system designed to provide reliable electricity for a remote property.",
  },
  {
    title: "8kW Hybrid System",
    location: "Cebu City",
    image: "/images/solar3.png",
    description:
      "Hybrid solar solution combining grid connection and battery backup for greater energy security.",
  },
];

export default function HomePage() {
  const [estimatorInput, setEstimatorInput] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const consumption = Number(estimatorInput);

  const estimatedSystem =
    consumption > 0 ? Math.ceil(consumption / 4) : null;

  return (
    <div className="min-h-screen bg-white text-slate-800">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-slate-950 text-white">

        <div className="absolute inset-0">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-24 md:flex-row md:py-32">

          <div className="flex-1">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Solar Energy Solutions
            </div>

            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              Power your future with{" "}
              <span className="text-green-400">solar energy.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Reliable solar solutions for homes and businesses.
              Reduce your dependence on the grid and take greater
              control of your energy future.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-4 font-semibold text-white transition hover:bg-green-600"
              >
                Get a Free Quote
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Solutions
              </Link>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400">

              <span className="flex items-center gap-2">
                <Check size={16} className="text-green-400" />
                Custom system design
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-green-400" />
                Professional installation
              </span>

              <span className="flex items-center gap-2">
                <Check size={16} className="text-green-400" />
                Ongoing support
              </span>

            </div>

          </div>

          <div className="w-full flex-1">

            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 shadow-2xl">

              <img
                src="/images/solarworks.jpg"
                alt="Solar panel installation"
                className="h-[360px] w-full rounded-2xl object-cover md:h-[480px]"
              />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-slate-950/85 p-5 backdrop-blur-md">

                <p className="text-sm text-slate-400">
                  Solarworks
                </p>

                <p className="mt-1 text-lg font-semibold">
                  Smarter energy. Greater independence.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto grid max-w-6xl grid-cols-1 divide-y divide-slate-200 px-6 md:grid-cols-4 md:divide-x md:divide-y-0">

          {[
            {
              icon: Wrench,
              title: "Professional Installation",
              description: "Built with safety and quality in mind.",
            },
            {
              icon: Settings,
              title: "Custom System Design",
              description: "Designed around your actual energy needs.",
            },
            {
              icon: Zap,
              title: "Quality Components",
              description: "Reliable equipment for long-term performance.",
            },
            {
              icon: Users,
              title: "Ongoing Support",
              description: "Support beyond the installation.",
            },
          ].map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex gap-4 px-6 py-8 md:flex-col"
              >

                <Icon
                  size={28}
                  className="shrink-0 text-green-600"
                  strokeWidth={1.7}
                />

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>

                </div>

              </div>
            );

          })}

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Solar Solutions
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              The right solar system for your needs.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Whether you want lower electricity bills, backup power,
              or complete energy independence, we can help you
              explore the right system.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {solutions.map((solution) => {

              const Icon = solution.icon;

              return (
                <div
                  key={solution.title}
                  className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900">
                    {solution.title}
                  </h3>

                  <p className="mt-3 leading-relaxed text-slate-600">
                    {solution.description}
                  </p>

                  <ul className="mt-6 space-y-3">

                    {solution.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 text-sm text-slate-600"
                      >
                        <Check
                          size={17}
                          className="mt-0.5 shrink-0 text-green-600"
                        />

                        {benefit}

                      </li>
                    ))}

                  </ul>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          ESTIMATOR
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6">

          <div className="overflow-hidden rounded-3xl bg-slate-950 text-white">

            <div className="grid md:grid-cols-2">

              <div className="p-8 md:p-12">

                <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
                  Quick Estimate
                </p>

                <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                  Get a rough idea of your solar system size.
                </h2>

                <p className="mt-4 leading-relaxed text-slate-400">
                  Enter your average monthly electricity
                  consumption to get a preliminary estimate.
                </p>

              </div>

              <div className="bg-white p-8 text-slate-900 md:p-12">

                <label className="text-sm font-semibold">
                  Monthly electricity consumption
                </label>

                <div className="mt-3 flex items-center rounded-xl border border-slate-300 px-4">

                  <input
                    type="number"
                    min="0"
                    value={estimatorInput}
                    onChange={(e) =>
                      setEstimatorInput(e.target.value)
                    }
                    placeholder="e.g. 500"
                    className="w-full py-4 outline-none"
                  />

                  <span className="text-sm text-slate-400">
                    kWh
                  </span>

                </div>

                {estimatedSystem && (
                  <div className="mt-6 rounded-2xl bg-green-50 p-6">

                    <p className="text-sm text-slate-600">
                      Preliminary estimate
                    </p>

                    <p className="mt-2 text-4xl font-bold text-green-600">
                      ~{estimatedSystem} kW
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      This is only a preliminary estimate.
                      Actual system sizing depends on your
                      property, roof, solar resource, electricity
                      usage, and energy goals.
                    </p>

                  </div>
                )}

                <Link
                  href="/quote"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-4 font-semibold text-white transition hover:bg-green-700"
                >
                  Get a Professional Quote
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Our Process
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              From consultation to clean energy.
            </h2>

          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-5">

            {processSteps.map((step) => (

              <div key={step.number}>

                <div className="text-5xl font-bold text-green-100">
                  {step.number}
                </div>

                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-6xl px-6">

          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
                Projects
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                Solar solutions in action.
              </h2>

              <p className="mt-4 max-w-2xl text-slate-600">
                Explore examples of solar systems designed for
                different energy requirements and property types.
              </p>

            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-semibold text-green-600 transition hover:text-green-700"
            >
              View all projects
              <ArrowRight size={18} />
            </Link>

          </div>


          {/* Project Cards */}

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            {projects.map((project) => (

              <div
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Project Image */}

                <div className="h-60 overflow-hidden bg-slate-100">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>


                {/* Project Information */}

                <div className="p-6">

                  <h3 className="text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>

                  <p className="mt-2 flex items-center gap-1 text-sm text-slate-500">
                    <MapPin size={15} />
                    {project.location}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <Link
                    href="/quote"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                  >
                    Discuss Your Project
                    <ArrowRight size={17} />
                  </Link>

                </div>

              </div>

            ))}

          </div>


          {/* Portfolio Note */}

          <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">

            <p className="text-sm leading-relaxed text-slate-700">
              <strong>Portfolio Note:</strong> The projects shown
              above are demonstration examples intended to showcase
              different solar system configurations. Actual project
              designs, system sizes, savings, and locations will vary
              based on the customer's property and energy requirements.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-4xl px-6">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
              Common questions about solar.
            </h2>

          </div>

          <div className="mt-12 space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = expandedFaq === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setExpandedFaq(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-slate-50"
                    aria-expanded={isOpen}
                  >

                    <span className="font-semibold text-slate-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />

                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 px-6 py-5">

                      <p className="leading-relaxed text-slate-600">
                        {faq.answer}
                      </p>

                    </div>
                  )}

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          AI ASSISTANT
      ===================================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-4xl px-6">

          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-green-50 to-blue-50 p-8 text-center md:p-12">

            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-green-600 shadow-sm">

              <MessageCircle size={27} />

            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              Have questions about solar?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-slate-600">
              Our AI Solar Assistant can help explain solar
              systems, batteries, installation, and common
              questions before you speak with our team.
            </p>

            <p className="mt-6 text-sm font-medium text-slate-500">
              Look for the chat button in the bottom-right corner.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-slate-950 py-24 text-white">

        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-green-400">
            Start Your Solar Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Ready to take control of your energy?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-400">
            Tell us about your property and electricity needs.
            We'll help you explore the solar solution that makes
            sense for you.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-7 py-4 font-semibold text-white transition hover:bg-green-600"
            >
              Get a Free Quote
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Solarworks
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
}