"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Globe, Award } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/assets/AxeemO.png"
                alt="Axeem Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <h3 className="font-bold text-xl">AXEEM</h3>
                <p className="text-slate-400 text-sm">by Onish Scientific</p>
              </div>
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              Leading manufacturer of laboratory instruments since 1994. ISO
              9001:2008 certified with expertise in research and medical
              equipment for global markets.
            </p>

            <div className="flex items-center space-x-4">
              <div className="flex items-center text-slate-300">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm">ISO 9001:2008</span>
              </div>
              <div className="flex items-center text-slate-300">
                <Globe className="w-4 h-4 mr-2" />
                <span className="text-sm">30+ Years</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Quality
                </Link>
              </li>
              <li>
                <Link
                  href="/export"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Export
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="w-4 h-4 text-axeem-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">info@axeemlab.com</p>
                  <p className="text-slate-300 text-sm">sales@axeemlab.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="w-4 h-4 text-axeem-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">+91 123 456 7890</p>
                  <p className="text-slate-300 text-sm">+91 987 654 3210</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-axeem-primary mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-300 text-sm">
                    Onish Scientific Industries
                    <br />
                    Haryana, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">
              © 2024 Axeem (Onish Scientific Industries). All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
