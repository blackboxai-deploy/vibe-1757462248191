import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NANDI REALTY LLC - Premium Real Estate in Dubai, UAE",
  description: "Find your next address with NANDI REALTY LLC. Premium properties in Dubai, Abu Dhabi, and Sharjah. Villas, apartments, and townhouses for sale.",
  keywords: "real estate Dubai, UAE properties, Dubai villas, Abu Dhabi apartments, Sharjah townhouses, NANDI REALTY, property Dubai",
  authors: [{ name: "NANDI REALTY LLC" }],
  openGraph: {
    title: "NANDI REALTY LLC - Premium Real Estate in Dubai, UAE",
    description: "Find your next address with NANDI REALTY LLC. Premium properties in Dubai, Abu Dhabi, and Sharjah.",
    type: "website",
    locale: "en_US",
    url: "https://nandirealtydubai.com",
    siteName: "NANDI REALTY DUBAI"
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://nandirealtydubai.com" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}