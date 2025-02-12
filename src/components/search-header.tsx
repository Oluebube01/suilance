"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function SearchHeader() {
  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      <div className="absolute inset-0 bg-glow"></div>
      <div className="relative z-10 w-full max-w-4xl px-4 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Find the perfect freelance service, right now
        </h1>
        <div className="flex gap-2 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search for any service..."
              className="w-full pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
          </div>
          <Button className="bg-gradient-to-r from-purple-400 to-pink-600 text-white">Search</Button>
        </div>
      </div>
    </div>
  )
}

