import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from '@/providers/ThemeProvider';
import { AuthProvider } from '@/providers/AuthProvider';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenviv.com"),
  title: {
    default: "Zenviv",
    template: "%s | Zenviv",
  },
  description: "Zenviv is the social fitness ecosystem...",
  applicationName: "Zenviv",
  keywords: ["fitness", "social fitness", "fitness community", "fitness app"],
  authors: [{ name: "Zenviv" }],
  creator: "Zenviv",
  publisher: "Zenviv",
  category: "Fitness",
  robots: {
    index: true,
    follow: true,
  },
  // ✅ Next.js 16 specific icons configuration
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zenviv.com",
    siteName: "Zenviv",
    title: "Zenviv",
    description: "The social fitness ecosystem powered by UniPass.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenviv",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenviv",
    description: "The social fitness ecosystem powered by UniPass.",
    images: ["/og-image.png"],
  },
  appleWebApp: {
    capable: true,
    title: "Zenviv",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#ffffff",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#09090b",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body
        className="
          min-h-screen
          bg-background
          text-foreground
          antialiased
          font-sans
          transition-colors
          duration-300
        "
      >
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}