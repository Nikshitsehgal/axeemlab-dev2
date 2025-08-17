import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ProductGrid from "@/components/ProductGrid";
import ProductHero from "@/components/ProductHero";

export const metadata: Metadata = {
  title: "Laboratory Instruments & Equipment | Axeem Scientific",
  description:
    "Premium laboratory instruments including BOD incubators, laminar flow cabinets, hot air ovens, and more. ISO 9001:2008 certified quality since 1994.",
  keywords:
    "laboratory instruments, BOD incubator, laminar flow, hot air oven, water bath, biosafety cabinet",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-axeem-background">
      <Navigation />
      <ProductHero />
      <ProductGrid />
    </main>
  );
}
