import type { Metadata } from "next";
import { Inter, Syne, Playfair_Display } from "next/font/google";
import "./globals.css";
import CursorFollower from "@/components/CursorFollower";
import SmoothScroll from "@/components/SmoothScroll";
import InteractiveBackground from "@/components/InteractiveBackground";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Chatbot from "@/components/Chatbot";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const syne = Syne({ subsets: ["latin"], variable: "--font-display" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  title: "Eshaan Nair | Full-Stack & AI Engineer",
  description: "Portfolio of Eshaan Nair, a Computer Science student building end-to-end applications, local-first AI memory systems, and modern web experiences.",
  openGraph: {
    title: "Eshaan Nair | Full-Stack & AI Engineer",
    description: "Portfolio of Eshaan Nair, a Computer Science student building end-to-end applications, local-first AI memory systems, and modern web experiences.",
    url: "https://eshaannair.com",
    siteName: "Eshaan Nair",
    type: "website",
    images: [
      {
        url: "https://eshaannair.com/og-image.png", // Replace with your actual thumbnail URL
        width: 1200,
        height: 630,
        alt: "Eshaan Nair - Full-Stack & AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eshaan Nair | Full-Stack & AI Engineer",
    description: "Portfolio of Eshaan Nair, a Computer Science student building end-to-end applications, local-first AI memory systems, and modern web experiences.",
    images: ["../../../public/thumbnail.png"], // Replace with your actual thumbnail URL
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <SmoothScroll />
          <CursorFollower />
          <InteractiveBackground />
          <ThemeToggle />
          <Chatbot />
          <div style={{ position: 'relative', zIndex: 1 }}>
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
