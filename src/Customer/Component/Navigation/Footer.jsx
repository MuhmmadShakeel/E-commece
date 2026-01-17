import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#4F39F6] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">E-Shop</h1>
          <p className="text-gray-200 text-sm md:text-base">
            Your one-stop shop for all your tech and lifestyle needs. Quality products at the best prices.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm md:text-base">
            <li>
              <a href="#" className="hover:underline hover:text-gray-200 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-200 transition-colors">
                Shop
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-200 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-200 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-200 transition-colors">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Customer Service</h2>
          <ul className="space-y-2 text-sm md:text-base text-gray-200">
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">
                Track Your Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-white transition-colors">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Newsletter</h2>
          <p className="text-gray-200 text-sm md:text-base mb-4">
            Subscribe to our newsletter to get the latest offers and updates.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="p-3 rounded-md flex-1 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              type="submit"
              className="bg-white text-[#4F39F6] mr-28  px-10 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 mt-8 py-6 text-center text-gray-300 text-sm md:text-base">
        © {new Date().getFullYear()} E-Shop. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
