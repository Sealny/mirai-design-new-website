import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll";
import { I18nProvider } from "@/lib/i18n/context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
  preload: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  title: "MiraiDesign | Web Design Studio",
  description: "Fast, conversion-focused websites for B2B companies. Subscription-based web design with 5-7 day delivery.",
  keywords: ["web design", "website", "b2b", "subscription", "web development", "tallinn"],
  authors: [{ name: "MiraiDesign" }],
  creator: "MiraiDesign",
  publisher: "MiraiDesign",
  metadataBase: new URL('https://miraidesign.studio'),
  openGraph: {
    title: "MiraiDesign | Web Design Studio",
    description: "Fast, conversion-focused websites for B2B companies.",
    type: "website",
    locale: "en_US",
    siteName: "MiraiDesign",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiraiDesign | Web Design Studio",
    description: "Fast, conversion-focused websites for B2B companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="antialiased">
        <I18nProvider>
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
