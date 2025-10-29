import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Komunitas IT SMKN 1 Nglegok",
  description: "Bergabunglah dengan komunitas IT terbesar di Indonesia. Pelajari, berbagi, dan berkembang bersama.",
  generator: "v0.app",
  keywords: "komunitas IT, developer, workshop, hackathon, Indonesia",
  authors: [{ name: "Tech Community" }],
  openGraph: {
    title: "Komunitas IT SMKN 1 Nglegok",
    description: "Bergabunglah dengan komunitas IT terbesar di Indonesia",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
