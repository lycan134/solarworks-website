import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-10">About SolarPro</h1>
        <p className="text-lg mb-6">
          SolarPro is dedicated to providing high-quality solar energy solutions for homes and businesses across Mindanao and beyond. Our mission is to help clients reduce electricity costs and transition to sustainable energy.
        </p>
        <p className="text-lg mb-6">
          With a team of certified and experienced installers, we offer custom solar system designs, installation, and maintenance services for grid-tie, off-grid, and hybrid systems.
        </p>
        <p className="text-lg">
          At SolarPro, we combine technology, expertise, and customer-focused service to deliver efficient and reliable solar energy solutions that empower our clients toward a greener future.
        </p>
      </section>
    </div>
  );
}