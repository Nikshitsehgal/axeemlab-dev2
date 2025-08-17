"use client";

import React from "react";
import { Award, Users, Globe, Clock } from "lucide-react";

const AboutHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-axeem-primary-soft to-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-axeem-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                Since 1994
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-axeem-secondary mb-6 leading-tight">
              Three Decades of
              <br />
              <span className="text-axeem-primary">Scientific Excellence</span>
            </h1>

            <p className="text-lg text-axeem-text-light mb-8 leading-relaxed">
              Established in 1994, Axeem (Onish Scientific Industries) has been
              at the forefront of manufacturing and exporting high-quality
              laboratory instruments. Our commitment to precision, innovation,
              and customer satisfaction has made us a trusted partner for
              research institutions, universities, and pharmaceutical companies
              worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-axeem-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-axeem-secondary">
                  30+
                </div>
                <div className="text-sm text-axeem-text-light">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-axeem-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-axeem-secondary">
                  50+
                </div>
                <div className="text-sm text-axeem-text-light">
                  Countries Served
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-axeem-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-axeem-secondary mb-2">
                  ISO 9001:2008 Certified
                </h3>
                <p className="text-axeem-text-light">
                  Quality management system certified
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center p-4 bg-axeem-primary-soft rounded-lg">
                  <Users className="w-6 h-6 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-semibold text-axeem-secondary">
                      Expert Team
                    </div>
                    <div className="text-sm text-axeem-text-light">
                      Skilled professionals & R&D experts
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-axeem-primary-soft rounded-lg">
                  <Award className="w-6 h-6 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-semibold text-axeem-secondary">
                      Quality Focus
                    </div>
                    <div className="text-sm text-axeem-text-light">
                      Stringent quality control processes
                    </div>
                  </div>
                </div>
                <div className="flex items-center p-4 bg-axeem-primary-soft rounded-lg">
                  <Globe className="w-6 h-6 text-axeem-primary mr-3" />
                  <div>
                    <div className="font-semibold text-axeem-secondary">
                      Global Reach
                    </div>
                    <div className="text-sm text-axeem-text-light">
                      Exporting to international markets
                    </div>
                  </div>
                </div>
              </div>
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

export default AboutHero;
