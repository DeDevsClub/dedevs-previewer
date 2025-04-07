import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "DeDevs OG Previewer",
    template: "%s | DeDevs OG Previewer"
  },
  description: "A comprehensive dashboard for Open Graph previewing and optimization",
  keywords: [
    "Open Graph",
    "OG",
    "preview",
    "social media",
    "meta tags",
    "SEO",
    "social sharing",
    "Next.js",
    "DeDevs",
    "image previewer"
  ],
  authors: [{ name: "DeDevsClub", url: "https://github.com/DeDevsClub" }],
  creator: "DeDevsClub",
  publisher: "DeDevsClub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://og.dedevs.club"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DeDevs OG Previewer",
    description: "Preview and optimize your Open Graph images for better social sharing",
    url: "https://og.dedevs.club",
    siteName: "DeDevs OG Previewer",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "DeDevs OG Previewer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DeDevs OG Previewer",
    description: "Preview and optimize your Open Graph images for better social sharing",
    creator: "@DeDevsClub",
    images: ["/images/og-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  category: "Technology",
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'