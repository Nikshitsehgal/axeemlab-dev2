"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Mail } from "lucide-react";

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      {/* Top Info Bar */}
      <div
        className={`bg-gray-800 text-white transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-end space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3" />
            <span>+91 9416028014</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3" />
            <span>info@axeemlab.com</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/AxeemO.png"
              alt="Axeem Logo"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[#ff3821] font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[#ff3821] font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/products"
              className="text-gray-700 hover:text-[#ff3821] font-medium transition-colors"
            >
              Products
            </Link>
            <Link
              href="/quality"
              className="text-gray-700 hover:text-[#ff3821] font-medium transition-colors"
            >
              Quality
            </Link>
            <Link
              href="/export"
              className="text-gray-700 hover:text-[#ff3821] font-medium transition-colors"
            >
              Export
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[#ff3821] font-medium transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#ff3821] hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#ff3821] transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-[#ff3821] transition-colors"
              >
                About
              </Link>
              <Link
                href="/products"
                className="text-gray-700 hover:text-[#ff3821] transition-colors"
              >
                Products
              </Link>
              <Link
                href="/quality"
                className="text-gray-700 hover:text-[#ff3821] transition-colors"
              >
                Quality
              </Link>
              <Link
                href="/export"
                className="text-gray-700 hover:text-[#ff3821] transition-colors"
              >
                Export
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-[#ff3821] transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/contact"
                className="bg-[#ff3821] hover:bg-red-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors text-center w-fit"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
