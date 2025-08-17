import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Axeem - Get Quote & Support | Laboratory Instruments",
  description:
    "Contact Axeem for laboratory instrument quotes, technical support, and export inquiries. ISO 9001:2008 certified manufacturer with 30 years of experience.",
  keywords:
    "contact Axeem, laboratory equipment quote, technical support, export inquiry",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-axeem-background">
      <Navigation />
      <ContactHero />
      <ContactForm />
      <ContactInfo />
    </main>
  );
}
