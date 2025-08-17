"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock, Globe, Award } from "lucide-react";

const ContactInfo: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Company Information */}
          <div>
            <div className="inline-flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-axeem-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium text-slate-700">
                Company Info
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-tight">
              About{" "}
              <span className="font-semibold text-axeem-primary">Axeem</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Axeem (Onish Scientific Industries) is a leading manufacturer of
              laboratory instruments with over 30 years of experience. We
              specialize in providing high-quality scientific equipment to
              research institutions, universities, and pharmaceutical companies
              worldwide.
            </p>

            {/* Company Details */}
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-axeem-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Certifications
                  </h3>
                  <ul className="text-slate-600 space-y-1">
                    <li>• ISO 9001:2008 Certified</li>
                    <li>• MSME Registered</li>
                    <li>• Udyog Aadhar</li>
                    <li>• Import Export Code</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-axeem-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">
                    Export Markets
                  </h3>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Europe (Germany, France, UK)</li>
                    <li>• Gulf Countries (UAE, Saudi Arabia)</li>
                    <li>• United States</li>
                    <li>• Asia Pacific</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-900 mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-axeem-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Email Address
                  </h4>
                  <p className="text-slate-600">info@axeemlab.com</p>
                  <p className="text-slate-600">sales@axeemlab.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-axeem-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Phone Numbers
                  </h4>
                  <p className="text-slate-600">+91 123 456 7890</p>
                  <p className="text-slate-600">+91 987 654 3210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-axeem-primary rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Office Address
                  </h4>
                  <p className="text-slate-600">
                    Onish Scientific Industries
                    <br />
                    Haryana, India
                    <br />
                    PIN: 123456
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-axeem-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Business Hours
                  </h4>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM
                  </p>
                  <p className="text-slate-600">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-slate-600">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Quick Response Promise */}
            <div className="mt-8 p-6 bg-axeem-primary-soft rounded-xl border border-axeem-primary/20">
              <h4 className="font-semibold text-axeem-primary mb-2">
                Quick Response Promise
              </h4>
              <p className="text-slate-700 text-sm">
                We guarantee to respond to all inquiries within 24 hours during
                business days. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
