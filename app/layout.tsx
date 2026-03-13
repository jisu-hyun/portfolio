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
  title: "HyunJisu | Data Analyst",
  description:
    "공공·도시 데이터를 정제하고, 사람들이 바로 이해하고 쓰는 웹 서비스로 구현합니다.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "HyunJisu | Data Analyst",
    description:
      "공공·도시 데이터를 정제하고, 사람들이 바로 이해하고 쓰는 웹 서비스로 구현합니다.",
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
        style={{ backgroundColor: "#05060a", color: "#e9eaf0" }}
        suppressHydrationWarning
      >
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
