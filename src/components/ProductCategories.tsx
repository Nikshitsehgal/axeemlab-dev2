import React from "react";
import Link from "next/link";
import Image from "next/image";
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
  image: string;
}

const ProductCategories: React.FC = () => {
  const categories: ProductCategory[] = [
    {
      icon: Flame,
      title: "Hot Air Oven",
      description:
        "Precision temperature control for sterilization and drying applications",
      features: ["50°C to 300°C range", "Digital control", "Uniform heating"],
      href: "/products/hot-air-oven",
      image: "/assets/atom.png",
    },
    {
      icon: Thermometer,
      title: "Bacteriological Incubator",
      description:
        "Optimal conditions for bacterial culture growth and maintenance",
      features: ["0°C to 65°C range", "Humidity control", "CO2 control"],
      href: "/products/bacteriological-incubator",
      image: "/assets/atom.png",
    },
    {
      icon: Wind,
      title: "Laminar Air Flow",
      description: "Sterile environment for sensitive laboratory procedures",
      features: ["HEPA filtration", "UV sterilization", "Adjustable airflow"],
      href: "/products/laminar-air-flow",
      image: "/assets/atom.png",
    },
    {
      icon: Droplets,
      title: "Water Bath",
      description:
        "Precise temperature control for liquid heating applications",
      features: [
        "5°C to 100°C range",
        "Digital display",
        "Stirring capability",
      ],
      href: "/products/water-bath",
      image: "/assets/atom.png",
    },
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-50 border border-slate-200 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-axeem-primary rounded-full mr-2"></div>
            <span className="text-sm font-medium text-slate-700">
              Featured Products
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6">
            Our{" "}
            <span className="font-semibold text-axeem-primary">Featured</span>{" "}
            Products
          </h2>

          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Premium laboratory instruments designed for precision, reliability,
            and performance. Each product meets international quality standards
            and comes with our commitment to excellence.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl border border-slate-200 hover:border-axeem-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-slate-50 to-white rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-axeem-primary to-axeem-primary-dark rounded-xl flex items-center justify-center shadow-lg">
                    <category.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Certification Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-axeem-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                    ISO 9001:2008
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-axeem-primary transition-colors">
                  {category.title}
                </h3>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {category.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-slate-500"
                    >
                      <div className="w-1.5 h-1.5 bg-axeem-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <Link
                    href={category.href}
                    className="inline-flex items-center text-axeem-primary hover:text-axeem-primary-dark font-medium text-sm transition-colors group-hover:gap-1"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    className="w-8 h-8 bg-slate-100 hover:bg-axeem-primary hover:text-white rounded-full flex items-center justify-center transition-all duration-300"
                  >
                    <span className="text-lg">+</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Categories */}
        <div className="bg-slate-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-900 mb-4">
              Complete{" "}
              <span className="font-semibold text-axeem-primary">
                Laboratory
              </span>{" "}
              Solutions
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              From basic essentials to advanced equipment, we provide
              comprehensive laboratory solutions for research institutions,
              universities, and pharmaceutical companies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <Globe className="w-8 h-8 text-axeem-primary" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Glassware</h4>
              <p className="text-sm text-slate-600">
                Volumetric, condensers, filtration
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <Settings className="w-8 h-8 text-axeem-primary" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Essentials</h4>
              <p className="text-sm text-slate-600">
                Clamps, stands, burners, filters
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <Zap className="w-8 h-8 text-axeem-primary" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Equipment</h4>
              <p className="text-sm text-slate-600">
                Stirrers, mixers, autoclaves
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                <Eye className="w-8 h-8 text-axeem-primary" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Plasticware</h4>
              <p className="text-sm text-slate-600">
                Beakers, flasks, pipettes
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Link
            href="/products"
            className="inline-flex items-center px-8 py-4 bg-axeem-primary hover:bg-axeem-primary-dark text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            View All Products
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
