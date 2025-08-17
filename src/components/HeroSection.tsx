"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/microscope.jpg"
          alt="Laboratory Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
          Precision <span className="text-[#ff3821]">Laboratory</span> Equipment
        </h1>

        {/* Subtitle */}
        <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
          Manufacturing world-class scientific instruments since 1994
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToProducts}
          className="inline-flex items-center justify-center px-10 py-4 bg-[#ff3821] hover:bg-red-700 text-white font-semibold rounded-lg transition-colors group shadow-lg text-lg"
        >
          Explore Products
          <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
