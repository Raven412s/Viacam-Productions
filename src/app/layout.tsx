import { SmoothScroll } from "@/components/global/HOC/Smooth";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Nunito, Nunito_Sans } from 'next/font/google';

export const nunito = Nunito({
    subsets: ['latin'],
    variable: '--font-nunito',
    display: 'swap',
  })

  export const nunitoSans = Nunito_Sans({
    subsets: ['latin'],
    variable: '--font-nunito-sans',
    display: 'swap',
  })

export const metadata: Metadata = {
  title: "Viacam Productions",
  description: "All rights reserved | Viacam Productions®️ | @2024.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(nunito.variable,  nunitoSans.variable)}>
      <body
        className={`antialiased`}
        suppressContentEditableWarning
        suppressHydrationWarning
      >
       <SmoothScroll>
        {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
