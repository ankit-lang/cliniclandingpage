import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: "Solea -  Dental & Aesthetic Clinic",
  description:
    "Premium cosmetic dentistry and aesthetic services. Smile design, advanced treatments, and personalized beauty enhancement.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logos.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logos.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logos.png",
        type: "image/svg+xml",
      },
    ],
    apple: "/logos.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_playfair.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
