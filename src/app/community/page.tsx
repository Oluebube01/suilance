import React from 'react'
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Footer } from "@/components/footer"

const community  = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a2e]  px-4">
        <Navbar />
        <div className="mt-8">
        <nav className="bg-black/50 backdrop-blur-md border-b border-white/10 flex">
        <Link
              href="/"
              className="ml-16 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "
            >
              Blog
        </Link>
        </nav>
        </div>
    <Footer />
    </div>
  )
}

export default community

