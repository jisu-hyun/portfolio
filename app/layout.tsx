import type { Metadata } from "next";
import { IBM_Plex_Sans_KR, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { CursorGlow } from "@/components/CursorGlow";

const sans = IBM_Plex_Sans_KR({
  variable: "--font-sans-kr",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono-jet",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "현지수의 포트폴리오",
  description: "Data-Focused Developer · HyunJisu 포트폴리오",
  metadataBase: new URL("https://example.com"),
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
