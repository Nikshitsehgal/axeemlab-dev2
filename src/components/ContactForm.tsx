"use client";

import React, { useState } from "react";
import { Send, Building, Globe, Package } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    country: "",
    enquiryType: "product",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-axeem-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium text-slate-700">
                Contact Form
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 mb-6 leading-tight">
              Send us a{" "}
              <span className="font-semibold text-axeem-primary">Message</span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Fill out the form below and our team will get back to you within
              24 hours. We're here to help with product inquiries, technical
              support, and export opportunities.
            </p>

            {/* Enquiry Types */}
            <div className="space-y-4 mb-8">
              <h3 className="font-semibold text-slate-900 mb-4">
                What can we help you with?
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <Package className="w-5 h-5 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-medium text-slate-900">
                      Product Inquiry
                    </div>
                    <div className="text-sm text-slate-600">
                      Get quotes & specifications
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <Building className="w-5 h-5 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-medium text-slate-900">Bulk Order</div>
                    <div className="text-sm text-slate-600">
                      Institutional purchases
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-200">
                  <Globe className="w-5 h-5 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-medium text-slate-900">
                      Export Inquiry
                    </div>
                    <div className="text-sm text-slate-600">
                      International shipping
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-axeem-primary focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-axeem-primary focus:border-transparent transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Company/Institution
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-axeem-primary focus:border-transparent transition-colors"
                    placeholder="Enter company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-axeem-primary focus:border-transparent transition-colors"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-axeem-primary focus:border-transparent transition-colors"
                  >
                    <option value="">Select your country</option>
                    <option value="india">India</option>
                    <option value="usa">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="germany">Germany</option>
                    <option value="france">France</option>
                    <option value="uae">UAE</option>
                    <option value="saudi">Saudi Arabia</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="enquiryType"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Enquiry Type
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-axeem-primary focus:border-transparent transition-colors"
                  >
                    <option value="product">Product Inquiry</option>
                    <option value="bulk">Bulk Order</option>
                    <option value="export">Export Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-axeem-primary focus:border-transparent transition-colors resize-none"
                  placeholder="Please describe your requirements, product specifications, or any questions you have..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-axeem-primary hover:bg-axeem-primary-dark text-white font-medium py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
