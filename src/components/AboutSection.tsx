"use client";

import React from "react";
import { CheckCircle, Users, Wrench, Globe, Award } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-white via-slate-50 to-purple-50/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 mb-6 shadow-sm">
              <div className="w-2 h-2 bg-axeem-primary rounded-full mr-2"></div>
              <span className="text-sm font-medium text-slate-700">
                About Axeem
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 leading-tight">
              Three Decades of{" "}
              <span className="font-semibold text-axeem-primary">
                Scientific Excellence
              </span>
            </h2>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Established in 1994, Axeem (Onish Scientific Industries) has been
              at the forefront of manufacturing and exporting high-quality
              laboratory instruments. Our commitment to precision, innovation,
              and customer satisfaction has made us a trusted partner for
              research institutions, universities, and pharmaceutical companies
              worldwide.
            </p>

            {/* Key Features */}
            <div className="space-y-4 mb-12">
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-axeem-primary mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">
                    ISO 9001:2008 Certified
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Quality management system certified for excellence
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
                    Tailored solutions to meet specific requirements
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
                    International standards compliance for global markets
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-axeem-primary to-axeem-primary-dark rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  30+
                </div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>

              <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-slate-200">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-slate-900 mb-1">
                  50+
                </div>
                <div className="text-sm text-slate-600">Countries Served</div>
              </div>
            </div>

            {/* Quality Commitment Card */}
            <div className="bg-gradient-to-br from-slate-50 to-purple-50/30 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6">
                Quality Commitment
              </h3>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">
                      Expert Team
                    </div>
                    <div className="text-sm text-slate-600">
                      Skilled professionals & R&D experts
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <Wrench className="w-6 h-6 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">
                      Technical Support
                    </div>
                    <div className="text-sm text-slate-600">
                      24/7 assistance and maintenance
                    </div>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                  <Globe className="w-6 h-6 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-semibold text-slate-900">
                      Global Reach
                    </div>
                    <div className="text-sm text-slate-600">
                      Exporting to international markets
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-axeem-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default AboutSection;
