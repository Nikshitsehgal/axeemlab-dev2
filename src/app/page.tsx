import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductCategories from "@/components/ProductCategories";
import WhyChooseAxeem from "@/components/WhyChooseAxeem";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";
import { JSX } from "react";

export const metadata: Metadata = {
  title: "Axeem - Where Science Meets Precision | Laboratory Instruments",
  description:
    "Trusted manufacturer of lab & scientific instruments since 1994. ISO certified, export-ready equipment for institutions, industries, and innovation labs worldwide.",
  keywords:
    "laboratory instruments, scientific equipment, BOD incubator, laminar flow, lab setup",
};

export default function HomePage(): JSX.Element {
  return (
    <main className="min-h-screen bg-axeem-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductCategories />
      <WhyChooseAxeem />
      {/* <ClientTrust />
      <DownloadCenter /> */}
      <QuoteForm />
      <Footer />
    </main>
  );
}
