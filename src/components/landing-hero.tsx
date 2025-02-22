"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
//import { motion } from "framer-motion"

export function LandingHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="font-bold py-36 text-center space-y-5">
      <div className="space-y-5 font-extrabold">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
            The Future of Freelancing
          </span>
          <br />
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              >
            is Here
          </span>
        </h1>
      </div>
      <div
        className="text-sm md:text-xl font-light text-zinc-400"
         >
        Secure, Private, and Decentralized Freelancing with SUILANCE
      </div>
      <div className="flex justify-center items-center space-x-4">
        <div
           >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </div>
        <div
          
        >
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  )
}

