import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { WalletProvider } from "@/components/wallet-provider"
import { Toaster as Sonner } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SUILANCE - Empowering African Students through Freelancing",
  description: "Secure, Private, and Decentralized Freelancing Platform for African College Students",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <WalletProvider>
            <div className="bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 min-h-screen">
              <main>{children}</main>
              <Sonner />
            </div>
          </WalletProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

