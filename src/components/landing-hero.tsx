"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            The Future of Freelancing
          </motion.span>
          <br />
          <motion.span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            is Here
          </motion.span>
        </h1>
      </div>
      <motion.div
        className="text-sm md:text-xl font-light text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Secure, Private, and Decentralized Freelancing with SUILANCE
      </motion.div>
      <div className="flex justify-center items-center space-x-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-400 to-pink-600 text-white font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black font-semibold py-4 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Learn More
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

