"use client";

import React from "react";
import Image from "next/image";
import { Award, Globe, Users, Shield, CheckCircle } from "lucide-react";

const WhyChooseAxeem: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-purple-50/20 to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Text and Statistics */}
          <div>
            <div className="inline-flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-axeem-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium text-slate-700">
                Why Institutions Trust Axeem
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              Trusted{" "}
              <span className="font-semibold text-axeem-primary">Results</span>{" "}
              That Speak
            </h2>

            <p className="text-lg text-slate-600 mb-12 leading-relaxed">
              At Axeem, excellence isn't just a promise — it's a proven track
              record. Through decades of manufacturing and exporting laboratory
              instruments, we've helped research institutions and universities
              achieve breakthrough discoveries with reliable, precision
              equipment.
            </p>

            {/* Statistics in Circles */}
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-axeem-primary/30 flex items-center justify-center mr-6 shadow-sm">
                  <span className="text-2xl font-bold text-axeem-primary">
                    30+
                  </span>
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-900">
                    Years of Excellence
                  </div>
                  <div className="text-slate-600">
                    Manufacturing precision since 1994
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-purple-500/30 flex items-center justify-center mr-6 shadow-sm">
                  <span className="text-2xl font-bold text-purple-600">
                    50+
                  </span>
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-900">
                    Countries Served
                  </div>
                  <div className="text-slate-600">Global export network</div>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-axeem-primary/30 flex items-center justify-center mr-6 shadow-sm">
                  <span className="text-2xl font-bold text-axeem-primary">
                    1000+
                  </span>
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-900">
                    Institutions Trust Us
                  </div>
                  <div className="text-slate-600">
                    Universities, labs, and research centers
                  </div>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="mt-12 space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-axeem-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    ISO 9001:2008 Certified Quality
                  </h4>
                  <p className="text-slate-600 text-sm">
                    International quality standards compliance
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-axeem-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Customization Available
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Tailored solutions for specific requirements
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-axeem-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    Export Ready
                  </h4>
                  <p className="text-slate-600 text-sm">
                    International shipping and compliance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Professional Images */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Top Image - Lab Meeting */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200 mb-6">
                <div className="h-64 bg-gradient-to-br from-slate-100 to-purple-50 flex items-center justify-center">
                  <div className="text-center">
                    <Users className="w-16 h-16 text-axeem-primary mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">
                      Professional Lab Meeting
                    </p>
                    <p className="text-sm text-slate-500">
                      Scientists discussing research
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-axeem-primary text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  ISO Certified
                </div>
              </div>

              {/* Bottom Image - Equipment Testing */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                <div className="h-48 bg-gradient-to-br from-purple-50 to-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                    <p className="text-slate-600 font-medium">
                      Quality Testing
                    </p>
                    <p className="text-sm text-slate-500">
                      Precision equipment verification
                    </p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                  Quality Assured
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute -z-10 top-20 -right-10 w-32 h-32 bg-axeem-primary/10 rounded-full"></div>
              <div className="absolute -z-10 -bottom-10 -left-10 w-24 h-24 bg-purple-300/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAxeem;
