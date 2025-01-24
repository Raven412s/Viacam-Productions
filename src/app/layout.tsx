import { SmoothScroll } from "@/components/global/HOC/Smooth";
import "@/styles/globals.css";
import type { Metadata } from "next";

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
    <html lang="en">
      <body
        className={`antialiased`}
        suppressContentEditableWarning
        suppressHydrationWarning
      >
       <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
