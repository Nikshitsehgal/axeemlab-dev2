"use client";

import React from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-axeem-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Get In Touch
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
            Ready to{" "}
            <span className="font-semibold text-axeem-primary">Connect</span>?
          </h1>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Get in touch with us for product inquiries, technical support, or
            export opportunities. Our team is ready to assist you with your
            laboratory equipment needs.
          </p>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-axeem-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 text-sm">info@axeemlab.com</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-axeem-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 text-sm">+91 123 456 7890</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-axeem-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">Visit Us</h3>
              <p className="text-slate-600 text-sm">Haryana, India</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-axeem-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Business Hours
              </h3>
              <p className="text-slate-600 text-sm">Mon - Fri: 9AM - 6PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-axeem-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-axeem-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ContactHero;
