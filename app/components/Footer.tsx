import Link from "next/link";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Solarworks</h3>
            <p className="text-sm text-gray-400 mb-4">
              Professional solar energy solutions for homes and businesses across the Philippines.
            </p>
            <div className="flex gap-3">
              {/* Social links could be added here */}
              <span className="text-xs text-gray-500">Follow us on social media</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-green-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-green-400 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services" className="hover:text-green-400 transition-colors">
                  Grid-Tie Systems
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-400 transition-colors">
                  Off-Grid Systems
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-400 transition-colors">
                  Hybrid Systems
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-green-400 transition-colors">
                  Maintenance & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 items-center">
                <Phone size={16} className="text-gray-400" />
                <a href="tel:09991234567" className="hover:text-green-400 transition-colors">
                  0999-123-4567
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <Mail size={16} className="text-gray-400" />
                <a
                  href="mailto:solarbusiness@email.com"
                  className="hover:text-green-400 transition-colors"
                >
                  solarbusiness@email.com
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <MapPin size={16} className="text-gray-400" />
                <span>Dipolog City, Philippines</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {currentYear} Solarworks. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          {/* Disclaimer */}
          <p className="text-xs text-gray-600 mt-6 text-center">
            Solarworks is a demonstration/portfolio project. All information provided is for educational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
