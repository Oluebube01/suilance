import Link from "next/link"
import { Button } from "@/components/ui/button"

export function LandingNavbar() {
  return (
    <nav className="p-4 bg-transparent flex items-center justify-between">
      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full animate-pulse"></div>
          <div className="absolute inset-0.5 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">ZKF</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          SUILANCE
        </h1>
      </Link>
      <div className="flex items-center gap-x-2">
        <Button variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white">
          Log in
        </Button>
        <Button className="bg-white text-black hover:bg-white/90">Sign up</Button>
      </div>
    </nav>
  )
}

