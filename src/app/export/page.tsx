import { Metadata } from "next";
import Navigation from "@/components/Navigation";
// import ExportHero from "@/components/ExportHero";
// import GlobalMarkets from "@/components/GlobalMarkets";
// import ExportCapabilities from "@/components/ExportCapabilities";

export const metadata: Metadata = {
  title: "Export & Global Markets | Axeem Scientific",
  description:
    "Exporting laboratory instruments to Europe, Gulf, US and worldwide. International quality standards with competitive pricing and excellent after-sales support.",
  keywords:
    "export laboratory instruments, international markets, Europe, Gulf, US, global supply",
};

export default function ExportPage() {
  return (
    <main className="min-h-screen bg-axeem-background">
      <Navigation />
      {/* <ExportHero />
      <GlobalMarkets />
      <ExportCapabilities /> */}
    </main>
  );
}
