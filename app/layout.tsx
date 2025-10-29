import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Komunitas IT SMKN 1 Nglegok",
  description: "Bergabunglah dengan komunitas IT terbesar di Indonesia. Pelajari, berbagi, dan berkembang bersama.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}