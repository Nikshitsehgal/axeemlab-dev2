"use client";

import React from "react";
import { Download, FileText, ArrowRight, Award } from "lucide-react";

const QuoteForm: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/30 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Badge */}
          <div className="inline-flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
            <div className="w-2 h-2 bg-axeem-primary rounded-full mr-2"></div>
            <span className="text-sm font-medium text-slate-700">
              Free Resource
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
            Get Your Complete{" "}
            <span className="font-semibold text-axeem-primary">
              Product Catalog
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Download our comprehensive catalog featuring all laboratory
            instruments, specifications, and technical details. Perfect for
            research institutions, universities, and procurement teams.
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-axeem-primary to-axeem-primary-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Complete Product Range
              </h3>
              <p className="text-slate-600 text-sm">
                All laboratory instruments with detailed specifications
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                ISO 9001:2008 Certified
              </h3>
              <p className="text-slate-600 text-sm">
                Quality standards and compliance information
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
              <div className="w-12 h-12 bg-gradient-to-br from-axeem-primary to-axeem-primary-dark rounded-lg flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Instant Download
              </h3>
              <p className="text-slate-600 text-sm">
                Get your catalog immediately, no registration required
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                  Download Your Free Catalog
                </h3>
                <p className="text-slate-600">
                  Get instant access to our complete product range
                </p>
              </div>

              <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-axeem-primary to-axeem-primary-dark hover:from-axeem-primary-dark hover:to-axeem-primary text-white font-medium rounded-lg transition-all duration-300 group shadow-lg hover:shadow-xl min-w-[200px]">
                <Download className="mr-2 w-5 h-5" />
                Download Catalog
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-slate-500">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>No registration required</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Instant download</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>PDF format</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-axeem-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default QuoteForm;
