import type { Metadata } from "next";
import "./globals.css";
import InkDefs from "@/components/InkDefs";

export const metadata: Metadata = {
  title: "Aditya Singh — A Portfolio in Ink",
  description:
    "Step inside the hand-drawn house of Aditya Singh, Computer Science student & full-stack / AI engineer. A noir, rubber-hose cartoon portfolio you can walk through.",
  keywords: [
    "Aditya Singh",
    "Software Engineer",
    "Full Stack Developer",
    "AI Engineer",
    "Arizona State University",
    "Portfolio",
  ],
  authors: [{ name: "Aditya Singh" }],
  creator: "Aditya Singh",
};

export const viewport = {
  themeColor: "#0d0d0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <InkDefs />
        {children}
        <div className="vignette-overlay" aria-hidden />
        <div className="grain-overlay" aria-hidden />
        <div className="scratches" aria-hidden />
      </body>
    </html>
  );
}
