import { Inter } from "next/font/google";
import "./globals.css";
import Warnings from "./components/warnings";
import { assistantId } from "./assistant-config";
import type { Metadata } from 'next'
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'YC Query AI – Instant Supreme Court Insights',
  description: 'Ask questions about any supreme court case and get key holdings, dissenting opinions, and precedents',
  openGraph: {
    title: 'YC Query AI – Instant Supreme Court Insights',
    description: 'Ask questions about any supreme court case and get key holdings, dissenting opinions, and precedents',
    type: 'website',
    locale: 'en_US',
    siteName: 'YC Query AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'YC Query AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YC Query AI – Instant Supreme Court Insights',
    description: 'Ask questions about any supreme court case and get key holdings, dissenting opinions, and precedents',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: '#FF5722',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {assistantId ? children : <Warnings />}
      </body>
    </html>
  );
}
