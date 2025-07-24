import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A203F] text-[#E0E1DD] py-8 px-6 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-sm">
        
        {/* Logo and Social Media */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">L.B.S. Law College</h1>
          <p className="text-gray-400 mb-4">Empowering Legal Minds Since 1990</p>
          
          {/* Follow Us */}
          <div>
            <h3 className="text-white font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4 text-[#3A86FF]">
              <Facebook className="h-5 w-5 hover:scale-110 transition" />
              <Instagram className="h-5 w-5 hover:scale-110 transition" />
              <Twitter className="h-5 w-5 hover:scale-110 transition" />
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">Home</li>
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Infrastructure</li>
            <li className="hover:text-white transition">Gallery</li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-white font-semibold mb-3">Our Courses</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-white transition">LLB (3-Year)</li>
            <li className="hover:text-white transition">BA LLB (5-Year)</li>
            <li className="hover:text-white transition">Diploma in Cyber Law</li>
            <li className="hover:text-white transition">PG Diploma</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-1" />
              123 Legal Street, Ghaziabad, UP – 201001
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> info@lbslawcollege.ac.in
            </li>
          </ul>
        </div>

      </div>

      <div className="mt-6 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} L.B.S. Law College. All rights reserved.
      </div>
    </footer>
  );
}
