import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";

const sans = IBM_Plex_Sans_KR({
  variable: "--font-sans-kr",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jet",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const DEFAULT_SITE_URL = "https://hyunjisu-portfolio.pages.dev";

const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || DEFAULT_SITE_URL,
);

export const metadata: Metadata = {
  title: "현지수의 포트폴리오",
  description: "Data-Focused Developer · HyunJisu 포트폴리오",
  metadataBase: siteUrl,
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "현지수의 포트폴리오",
    description: "Data-Focused Developer · HyunJisu 포트폴리오",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} antialiased`}
        style={{ backgroundColor: "#0f1219", color: "#e9eaf0" }}
        suppressHydrationWarning
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
