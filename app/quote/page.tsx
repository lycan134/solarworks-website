"use client";

import React, { useState } from "react";
import {
  Check,
  Zap,
  BarChart3,
  Phone,
  Mail,
  ArrowRight,
  ClipboardCheck,
  Home,
  Battery,
} from "lucide-react";

export default function QuotePage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    electricBill: "",
    systemType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Quote request:", form);

    setSubmitted(true);

    setForm({
      name: "",
      phone: "",
      email: "",
      address: "",
      electricBill: "",
      systemType: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  const benefits = [
    {
      icon: ClipboardCheck,
      title: "Free Consultation",
      description: "No cost and no obligation",
    },
    {
      icon: Zap,
      title: "Custom Design",
      description: "Designed around your property",
    },
    {
      icon: BarChart3,
      title: "Energy Analysis",
      description: "Understand your potential savings",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 mb-6">
            <Zap size={16} className="text-green-400" />
            <span className="text-sm font-medium text-green-300">
              Free Solar Consultation
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get Your Free Solar Quote
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Tell us about your property and energy needs. Our team can help
            you explore a solar solution that fits your goals and budget.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center justify-center gap-4 text-center md:text-left"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Icon size={23} className="text-green-700" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Quote Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 md:p-10">
            {/* Form Header */}
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-green-600 mb-2">
                Start Your Solar Journey
              </p>

              <h2 className="text-3xl font-bold text-gray-900 mb-3">
                Tell Us About Your Property
              </h2>

              <p className="text-gray-600 leading-relaxed">
                Provide some basic information below. This helps us understand
                your requirements and prepare for your consultation.
              </p>
            </div>

            {/* Success Message */}
            {submitted && (
              <div className="bg-green-50 border border-green-300 rounded-xl p-5 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <Check size={18} className="text-green-700" />
                  </div>

                  <div>
                    <h3 className="font-bold text-green-800 mb-1">
                      Request Received
                    </h3>

                    <p className="text-sm text-green-700">
                      Thank you! Your quote request has been received. Our
                      solar specialists will contact you to discuss your
                      options.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                    <Home size={19} className="text-green-700" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Your Information
                    </h3>

                    <p className="text-sm text-gray-500">
                      Basic contact and property details
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Juan Dela Cruz"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0999-123-4567"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                      Email Address *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label
                      htmlFor="address"
                      className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                      Property Address *
                    </label>

                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      placeholder="City / Municipality"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />
                  </div>
                </div>
              </div>

              {/* Energy Information */}
              <div className="border-t border-gray-200 pt-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-green-100 flex items-center justify-center">
                    <Battery size={19} className="text-green-700" />
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900">
                      Energy Profile
                    </h3>

                    <p className="text-sm text-gray-500">
                      Help us understand your current electricity usage
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Electric Bill */}
                  <div>
                    <label
                      htmlFor="electricBill"
                      className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                      Monthly Electric Bill (₱) *
                    </label>

                    <input
                      id="electricBill"
                      type="number"
                      name="electricBill"
                      value={form.electricBill}
                      onChange={handleChange}
                      placeholder="e.g. 5000"
                      min="0"
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    />

                    <p className="text-xs text-gray-500 mt-2">
                      An approximate monthly average is fine.
                    </p>
                  </div>

                  {/* System Type */}
                  <div>
                    <label
                      htmlFor="systemType"
                      className="block mb-2 text-sm font-semibold text-gray-700"
                    >
                      Preferred System Type *
                    </label>

                    <select
                      id="systemType"
                      name="systemType"
                      value={form.systemType}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                    >
                      <option value="">Select an option</option>
                      <option value="Grid-Tie">
                        Grid-Tie — Connected to utility grid
                      </option>
                      <option value="Hybrid">
                        Hybrid — Grid + battery backup
                      </option>
                      <option value="Off-Grid">
                        Off-Grid — Independent solar system
                      </option>
                      <option value="Not Sure">
                        Not sure — I need advice
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t border-gray-200 pt-8">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-semibold text-gray-700"
                >
                  Additional Information
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your property, roof, current electricity concerns, or any questions you have..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 outline-none transition resize-none focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Consent + Submit */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                <p className="text-sm text-gray-700 leading-relaxed mb-5">
                  By submitting this form, you agree to be contacted regarding
                  your solar inquiry. Your information will only be used to
                  respond to your request.
                </p>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-green-600 text-white font-bold rounded-lg shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md active:scale-[0.99]"
                >
                  Submit Quote Request
                  <ArrowRight size={19} />
                </button>
              </div>
            </form>

            {/* What Happens Next */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                What Happens Next?
              </h3>

              <div className="space-y-3">
                {[
                  "Our team reviews your information.",
                  "We contact you to discuss your energy needs.",
                  "We arrange a site assessment when appropriate.",
                  "We prepare a recommended solar solution.",
                ].map((step, index) => (
                  <div
                    key={step}
                    className="flex items-start gap-3 text-sm text-gray-700"
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-green-600 text-white text-xs font-bold flex-shrink-0">
                      {index + 1}
                    </span>

                    <p className="pt-0.5">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Direct Contact */}
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">
              Prefer to speak with someone directly?
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <a
                href="tel:09991234567"
                className="inline-flex items-center justify-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                <Phone size={19} />
                0999-123-4567
              </a>

              <a
                href="mailto:solarbusiness@email.com"
                className="inline-flex items-center justify-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                <Mail size={19} />
                solarbusiness@email.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Not Sure Which Solar System You Need?
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 leading-relaxed">
            That's completely fine. Tell us what you're trying to achieve and
            our team can help you understand whether Grid-Tie, Hybrid, or
            Off-Grid solar is the right direction.
          </p>
        </div>
      </section>
    </main>
  );
}