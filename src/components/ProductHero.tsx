"use client";

import React from "react";
import { ArrowRight, Search } from "lucide-react";

const ProductHero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-axeem-primary-soft to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-axeem-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              ISO 9001:2008 Certified
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-axeem-secondary mb-6 leading-tight">
            Laboratory
            <br />
            <span className="text-axeem-primary">Instruments</span>
          </h1>

          <p className="text-xl text-axeem-text-light mb-8 leading-relaxed max-w-3xl mx-auto">
            Premium quality scientific equipment for research institutions,
            universities, pharmaceutical companies, and industrial laboratories
            worldwide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative max-w-md w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-6 py-4 pl-12 bg-white border-2 border-axeem-primary-soft rounded-full focus:outline-none focus:border-axeem-primary transition-colors"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-axeem-text-light w-5 h-5" />
            </div>
            <button className="bg-axeem-primary hover:bg-axeem-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2">
              Browse All Products
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-axeem-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-axeem-accent/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default ProductHero;
