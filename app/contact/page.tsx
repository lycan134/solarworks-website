"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Phone, Mail, MapPin, Check, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can add API call to submit form
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300">
            Have questions about solar? We'd love to help. Reach out and let's discuss your solar energy options.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>

              <div className="space-y-8">
                {/* Phone */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                      <Phone size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Phone</h3>
                      <p className="text-sm text-gray-600">Mon - Fri, 9am - 6pm</p>
                    </div>
                  </div>
                  <a href="tel:09991234567" className="text-lg font-semibold text-green-600 hover:text-green-700 ml-15">
                    0999-123-4567
                  </a>
                </div>

                {/* Email */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                      <Mail size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
                    </div>
                  </div>
                  <a href="mailto:solarbusiness@email.com" className="text-lg font-semibold text-green-600 hover:text-green-700 ml-15">
                    solarbusiness@email.com
                  </a>
                </div>

                {/* Location */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg">
                      <MapPin size={20} className="text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Location</h3>
                      <p className="text-sm text-gray-600">Serving Philippines</p>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-800 ml-15">Dipolog City, Philippines</p>
                </div>

                {/* Quick Links */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link href="/quote">
                      <button className="w-full px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-all duration-200">
                        Get a Free Quote
                      </button>
                    </Link>
                    <a href="tel:09991234567">
                      <button className="w-full px-6 py-3 bg-slate-200 hover:bg-slate-300 text-gray-900 font-semibold rounded-lg transition-all duration-200">
                        Call Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>

                {submitted && (
                  <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-6">
                    <p className="text-green-700 font-semibold text-center flex items-center justify-center gap-2">
                      <Check size={20} />
                      Thank you for reaching out! We'll get back to you as soon as possible.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 p-3 rounded-lg outline-none transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 p-3 rounded-lg outline-none transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your inquiry or what you'd like to know about solar..."
                      className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 p-3 rounded-lg outline-none transition resize-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
                  >
                    Send Message
                  </button>
                </form>

                <p className="text-sm text-gray-600 mt-4 text-center">
                  We typically respond within 24 hours during business days.
                </p>
              </div>

              {/* FAQ Preview */}
              <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Common Questions?</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Check out our FAQ and AI Assistant for instant answers to common solar questions.
                </p>
                <div className="flex gap-3">
                  <Link href="/">
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm transition-colors">
                      Visit FAQ
                    </button>
                  </Link>
                  <p className="text-xs text-gray-600 flex items-center gap-1">
                    <MessageCircle size={14} />
                    Try our AI Assistant - available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Service Area</h2>
          <p className="text-gray-700 mb-6">
            We serve Mindanao and surrounding regions. Contact us to discuss availability for your specific location.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {["Dipolog", "Cebu", "Minglanilla", "Balamban", "Zamboanga", "Davao", "Iligan", "Gen. Santos"].map((city, i) => (
              <div key={i} className="bg-white p-3 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 text-sm">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Go Solar?</h2>
          <p className="text-lg mb-8">
            Schedule your free consultation and get a personalized solar quote tailored to your needs.
          </p>
          <Link href="/quote">
            <button className="px-8 py-4 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors shadow-lg">
              Get a Free Quote Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
