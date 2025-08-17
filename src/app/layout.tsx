import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Axeem - Laboratory & Scientific Instruments",
  description:
    "Premium laboratory instruments manufacturer since 1994. ISO certified, export-ready scientific equipment for research institutions worldwide.",
  keywords:
    "laboratory instruments, scientific equipment, research tools, lab setup, precision instruments",
  authors: [{ name: "Axeem by Onish Scientific" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
