"use client";

import React, { useState } from "react";
import { Check, Zap, BarChart3, Phone, Mail } from "lucide-react";

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

  // Helper function to render icons
  const renderIcon = (iconName: string, size: number = 32) => {
    const iconProps = { size, strokeWidth: 1.8 };
    const icons: { [key: string]: React.ReactNode } = {
      "Check": <Check {...iconProps} />,
      "Zap": <Zap {...iconProps} />,
      "BarChart3": <BarChart3 {...iconProps} />,
    };
    return icons[iconName] || null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add API call or email integration here
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", address: "", electricBill: "", systemType: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Get Your Free Solar Quote</h1>
          <p className="text-xl text-gray-300">
            No obligation. No sales pressure. Just helpful information about solar for your property.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "Check", title: "Free Consultation", desc: "No cost, no obligation" },
              { icon: "Zap", title: "Custom Design", desc: "Tailored to your needs" },
              { icon: "BarChart3", title: "Detailed Analysis", desc: "Energy savings estimate" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-green-600 mb-2 flex justify-center">{renderIcon(item.icon, 32)}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-10">
            {submitted && (
              <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 mb-6">
                <p className="text-green-700 font-semibold text-center flex items-center justify-center gap-2">
                  <Check size={20} />
                  Thank you! We received your request. Our solar specialists will contact you within 24 hours to discuss your solar options.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Full Name *</label>
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
                    <label className="block mb-2 font-semibold text-gray-700">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="0999-123-4567"
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
                    <label className="block mb-2 font-semibold text-gray-700">Property Address *</label>
                    <input
                      type="text"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 p-3 rounded-lg outline-none transition"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Energy Information */}
              <div className="border-t-2 border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Your Energy Profile</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Monthly Electric Bill (₱) *</label>
                    <input
                      type="text"
                      name="electricBill"
                      value={form.electricBill}
                      onChange={handleChange}
                      placeholder="e.g., 5000"
                      className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 p-3 rounded-lg outline-none transition"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">Find this on your electricity bill</p>
                  </div>

                  <div>
                    <label className="block mb-2 font-semibold text-gray-700">Preferred System Type *</label>
                    <select
                      name="systemType"
                      value={form.systemType}
                      onChange={handleChange}
                      className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 p-3 rounded-lg outline-none transition bg-white"
                      required
                    >
                      <option value="">Select an option</option>
                      <option value="Grid-Tie">Grid-Tie (Connected to utility grid)</option>
                      <option value="Off-Grid">Off-Grid (Complete independence)</option>
                      <option value="Hybrid">Hybrid (Grid + battery backup)</option>
                      <option value="Not Sure">Not sure - need advice</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="border-t-2 border-gray-200 pt-6">
                <label className="block mb-2 font-semibold text-gray-700">Additional Information or Questions</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us more about your property, specific concerns, or any questions you have..."
                  className="w-full border-2 border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-300 p-3 rounded-lg outline-none transition"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4">
                <p className="text-sm text-gray-700 mb-4">
                  By submitting this form, you agree to be contacted by our solar specialists with information about solar energy solutions for your property.
                </p>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-lg"
                >
                  Submit Quote Request
                </button>
              </div>
            </form>

            {/* Next Steps */}
            <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-3">What Happens Next?</h4>
              <ol className="space-y-2 text-sm text-gray-700">
                <li><strong>1.</strong> Our team reviews your information</li>
                <li><strong>2.</strong> We schedule a free site assessment</li>
                <li><strong>3.</strong> We provide a detailed quote and recommendations</li>
                <li><strong>4.</strong> We answer all your questions - no pressure, no obligation</li>
              </ol>
            </div>
          </div>

          {/* Contact Backup */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Prefer to speak directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:09991234567" className="flex items-center justify-center gap-2 text-green-600 font-semibold hover:text-green-700">
                <Phone size={20} /> Call: 0999-123-4567
              </a>
              <a href="mailto:solarbusiness@email.com" className="flex items-center justify-center gap-2 text-green-600 font-semibold hover:text-green-700">
                <Mail size={20} /> Email: solarbusiness@email.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Solar CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Why Go Solar Now?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Save Money", desc: "Reduce or eliminate your electricity bills" },
              { title: "Energy Independence", desc: "Less reliance on utility companies" },
              { title: "Increase Home Value", desc: "Solar systems add value to your property" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}