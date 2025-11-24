"use client";

import React, { useState } from "react";

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add API call or email integration here
    console.log(form);
    setSubmitted(true);
    setForm({ name: "", phone: "", email: "", address: "", electricBill: "", systemType: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Request a Free Solar Quote</h1>

        {submitted && (
          <p className="text-green-600 font-semibold mb-6 text-center">
            Thank you! Your request has been submitted.
          </p>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Phone</label>
            <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Address</label>
            <input type="text" name="address" value={form.address} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Monthly Electric Bill</label>
            <input type="text" name="electricBill" value={form.electricBill} onChange={handleChange} className="w-full border p-3 rounded-lg" required />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Preferred System Type</label>
            <select name="systemType" value={form.systemType} onChange={handleChange} className="w-full border p-3 rounded-lg" required>
              <option value="">Select</option>
              <option value="Grid-Tie">Grid-Tie</option>
              <option value="Off-Grid">Off-Grid</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full border p-3 rounded-lg"></textarea>
          </div>

          <button type="submit" className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-md hover:bg-yellow-500 transition">
            Submit Request
          </button>
        </form>
      </section>
    </div>
  );
}