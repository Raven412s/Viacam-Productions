import { SmoothScroll } from "@/components/global/HOC/Smooth";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";

// Importing fonts correctly
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "700"], // Ensure you're using valid weights
  variable: "--font-nunito",
  display: "swap",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Add weight options if required
  variable: "--font-nunito-sans",
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Viacam Productions",
  description: "All rights reserved | Viacam Productions®️ | @2024.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(nunito.variable, nunitoSans.variable)}>
      <body
        className="antialiased"
        suppressContentEditableWarning
        suppressHydrationWarning
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
