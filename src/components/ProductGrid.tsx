"use client";

import React from "react";
import Link from "next/link";
import {
  Thermometer,
  Wind,
  Droplets,
  Zap,
  Eye,
  Settings,
  Flame,
  Shield,
  Clock,
  Globe,
  ArrowRight,
} from "lucide-react";

interface ProductCategory {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  href: string;
  color: string;
}

const ProductGrid: React.FC = () => {
  const categories: ProductCategory[] = [
    {
      icon: Flame,
      title: "Hot Air Oven",
      description:
        "Precision temperature control for sterilization and drying applications",
      features: [
        "Temperature range: 50°C to 300°C",
        "Digital temperature control",
        "Uniform heat distribution",
      ],
      href: "/products/hot-air-oven",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: Thermometer,
      title: "Bacteriological Incubator",
      description:
        "Optimal conditions for bacterial culture growth and maintenance",
      features: [
        "Temperature range: 0°C to 65°C",
        "Humidity control",
        "CO2 control available",
      ],
      href: "/products/bacteriological-incubator",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Dry Bath Incubator",
      description: "Compact and efficient heating for microcentrifuge tubes",
      features: [
        "Multiple block configurations",
        "Fast heating",
        "Precise temperature control",
      ],
      href: "/products/dry-bath-incubator",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Wind,
      title: "Laminar Air Flow",
      description: "Sterile environment for sensitive laboratory procedures",
      features: ["HEPA filtration", "UV sterilization", "Adjustable airflow"],
      href: "/products/laminar-air-flow",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Droplets,
      title: "Water Bath",
      description:
        "Precise temperature control for liquid heating applications",
      features: [
        "Temperature range: 5°C to 100°C",
        "Digital display",
        "Stirring capability",
      ],
      href: "/products/water-bath",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Thermometer,
      title: "BOD Incubator",
      description:
        "Biological Oxygen Demand testing with precise temperature control",
      features: ["20°C ± 1°C control", "Dark chamber", "Low power consumption"],
      href: "/products/bod-incubator",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Shield,
      title: "Biosafety Cabinet",
      description: "Class II safety cabinet for handling biological materials",
      features: ["HEPA filtration", "UV light", "Sash alarm system"],
      href: "/products/biosafety-cabinet",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Hot Plates",
      description: "Versatile heating solution for laboratory applications",
      features: [
        "Temperature range: 50°C to 400°C",
        "Magnetic stirring",
        "Digital control",
      ],
      href: "/products/hot-plates",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Flame,
      title: "Furnace",
      description: "High-temperature applications for material testing",
      features: [
        "Temperature up to 1200°C",
        "Programmable cycles",
        "Safety features",
      ],
      href: "/products/furnace",
      color: "from-gray-500 to-slate-500",
    },
    {
      icon: Eye,
      title: "Humidity Chamber",
      description: "Controlled humidity environment for testing and storage",
      features: [
        "Humidity range: 20% to 95%",
        "Temperature control",
        "Data logging",
      ],
      href: "/products/humidity-chamber",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-axeem-secondary mb-6">
            Our Product Range
          </h2>
          <p className="text-lg text-axeem-text-light max-w-3xl mx-auto">
            Comprehensive range of laboratory instruments designed for
            precision, reliability, and performance. Each product meets
            international quality standards and comes with our commitment to
            excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-axeem-primary-soft hover:border-axeem-primary"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <category.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-axeem-secondary mb-3 group-hover:text-axeem-primary transition-colors">
                {category.title}
              </h3>

              {/* Description */}
              <p className="text-axeem-text-light mb-4 leading-relaxed">
                {category.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {category.features.slice(0, 2).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-axeem-text-light"
                  >
                    <div className="w-1.5 h-1.5 bg-axeem-primary rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href={category.href}
                className="inline-flex items-center text-axeem-primary hover:text-axeem-primary-dark font-semibold transition-colors group-hover:gap-2"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Additional Categories */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-axeem-secondary mb-8">
            Complete Laboratory Solutions
          </h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-axeem-primary-soft rounded-xl p-6">
              <Globe className="w-12 h-12 text-axeem-primary mx-auto mb-4" />
              <h4 className="font-bold text-axeem-secondary mb-2">Glassware</h4>
              <p className="text-sm text-axeem-text-light">
                Volumetric, condensers, filtration
              </p>
            </div>
            <div className="bg-axeem-primary-soft rounded-xl p-6">
              <Settings className="w-12 h-12 text-axeem-primary mx-auto mb-4" />
              <h4 className="font-bold text-axeem-secondary mb-2">
                Essentials
              </h4>
              <p className="text-sm text-axeem-text-light">
                Clamps, stands, burners, filters
              </p>
            </div>
            <div className="bg-axeem-primary-soft rounded-xl p-6">
              <Zap className="w-12 h-12 text-axeem-primary mx-auto mb-4" />
              <h4 className="font-bold text-axeem-secondary mb-2">Equipment</h4>
              <p className="text-sm text-axeem-text-light">
                Stirrers, mixers, autoclaves
              </p>
            </div>
            <div className="bg-axeem-primary-soft rounded-xl p-6">
              <Eye className="w-12 h-12 text-axeem-primary mx-auto mb-4" />
              <h4 className="font-bold text-axeem-secondary mb-2">
                Plasticware
              </h4>
              <p className="text-sm text-axeem-text-light">
                Beakers, flasks, pipettes
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-axeem-primary hover:bg-axeem-primary-dark text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
