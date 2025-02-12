import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SUILANCE - The Future of Freelancing",
  description: "Secure, Private, and Decentralized Freelancing with zkLogin",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-gradient-to-b from-black to-[#1a1a2e] min-h-screen">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}

