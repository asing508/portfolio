import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";
import CursorFollower from "@/components/CursorFollower";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Aditya Singh | Software Engineer",
  description:
    "Full-stack developer specializing in React, TypeScript, Node.js, and AI/ML. Building scalable applications at Arizona State University.",
  keywords: [
    "Aditya Singh",
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "TypeScript",
    "Node.js",
    "Python",
    "Arizona State University",
  ],
  authors: [{ name: "Aditya Singh" }],
  creator: "Aditya Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adityasingh.dev", // PLACEHOLDER: Update with your domain
    siteName: "Aditya Singh Portfolio",
    title: "Aditya Singh | Software Engineer",
    description:
      "Full-stack developer specializing in React, TypeScript, Node.js, and AI/ML.",
    images: [
      {
        url: "/og-image.png", // PLACEHOLDER: Add your OG image
        width: 1200,
        height: 630,
        alt: "Aditya Singh - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Singh | Software Engineer",
    description:
      "Full-stack developer specializing in React, TypeScript, Node.js, and AI/ML.",
    images: ["/og-image.png"], // PLACEHOLDER: Add your OG image
    creator: "@your_twitter_handle", // PLACEHOLDER: Add your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white antialiased">
        <div className="noise-overlay" />
        <AnimatedBackground />
        <CursorFollower />
        <Navbar />
        <main className="relative z-10 min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
