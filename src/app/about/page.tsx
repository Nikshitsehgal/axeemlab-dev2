import { Metadata } from "next";
import Navigation from "@/components/Navigation";
// import AboutHero from "@/components/AboutHero";
// import CompanyHistory from "@/components/CompanyHistory";
// import TeamSection from "@/components/TeamSection";

export const metadata: Metadata = {
  title:
    "About Axeem - 30 Years of Scientific Excellence | Laboratory Instruments",
  description:
    "Leading manufacturer of laboratory instruments since 1994. ISO 9001:2008 certified with expertise in research and medical equipment for global markets.",
  keywords:
    "Axeem scientific, laboratory instruments manufacturer, ISO certified, research equipment",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-axeem-background">
      <Navigation />
      {/* <AboutHero />
      <CompanyHistory />
      <TeamSection /> */}
    </main>
  );
}
