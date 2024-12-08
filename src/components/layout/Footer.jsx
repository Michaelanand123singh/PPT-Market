import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-4">Presentation Platform</h3>
          <p className="text-sm text-gray-300">
            Your ultimate destination for high-quality, professional presentations across various domains.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/catalog" className="hover:text-blue-300 transition-colors">Browse Presentations</a></li>
            <li><a href="/pricing" className="hover:text-blue-300 transition-colors">Pricing</a></li>
            <li><a href="/FAQ" className="hover:text-blue-300 transition-colors">FAQ</a></li>
            <li><a href="/contact" className="hover:text-blue-300 transition-colors">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="/terms" className="hover:text-blue-300 transition-colors">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</a></li>
            <li><a href="/refund" className="hover:text-blue-300 transition-colors">Refund Policy</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-700 mt-8 pt-6 text-center">
        <p className="text-sm text-gray-300">
          &copy; {new Date().getFullYear()} Presentation Platform. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;