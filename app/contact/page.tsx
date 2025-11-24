"use client"; // Add this at the very top

import React, { useState } from "react";

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
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>

        <div className="text-center mb-10">
          <p className="text-lg mb-2">📞 0999-123-4567</p>
          <p className="text-lg mb-2">📧 solarbusiness@email.com</p>
          <p className="text-lg">📍 Cebu, Philippines</p>
        </div>

        {submitted && (
          <p className="text-green-600 font-semibold mb-6 text-center">
            Thank you! We received your message.
          </p>
        )}

        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-md">
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border p-3 rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-semibold">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full border p-3 rounded-lg"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-xl shadow-md hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
