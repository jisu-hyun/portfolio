import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HyunJisu | Data Analyst & Frontend Builder",
  description:
    "공공·도시 데이터를 정제하고, 사람들이 바로 이해하고 쓰는 웹 서비스로 구현합니다.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "HyunJisu | Data Analyst & Frontend Builder",
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
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
