import { Metadata } from "next";
import Navigation from "@/components/Navigation";
// import QualityHero from "@/components/QualityHero";
// import Certifications from "@/components/Certifications";
// import Infrastructure from "@/components/Infrastructure";

export const metadata: Metadata = {
  title: "Quality Standards & Certifications | Axeem Scientific",
  description:
    "ISO 9001:2008 certified manufacturer with state-of-the-art infrastructure. Quality compliance and international standards for laboratory instruments.",
  keywords:
    "ISO 9001:2008, quality standards, laboratory equipment certification, manufacturing standards",
};

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-axeem-background">
      <Navigation />
      {/* <QualityHero />
      <Certifications />
      <Infrastructure /> */}
    </main>
  );
}
