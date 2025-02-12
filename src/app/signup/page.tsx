"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { ZkLogin } from "@/components/zk-login"
import Link from "next/link"

export default function SignUpPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the traditional sign-up logic
    console.log("Traditional sign-up attempt with:", { name, email, password })
    // For now, we'll just redirect to the home page
    router.push("/")
  }

  const handleZkLoginSuccess = (address: string) => {
    console.log("zkLogin successful. User address:", address)
    // Here you would typically handle the successful zkLogin
    // For a new user, you might collect additional information before creating their account
    router.push("/complete-profile")
  }

  const handleZkLoginError = (error: string) => {
    console.error("zkLogin error:", error)
    // Here you would typically handle the zkLogin error
    // For example, you might show an error message to the user
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-[#1a1a2e] p-4">
      <Card className="w-full max-w-md bg-black/50 border-white/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Join SUILANCE
          </CardTitle>
          <CardDescription className="text-center text-gray-400">
            Create your account or sign up with zkLogin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-200">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-200">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white"
              />
            </div>
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-400 to-pink-600 text-white">
              Sign Up
            </Button>
          </form>
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-black px-2 text-gray-400">Or sign up with</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <ZkLogin onSuccess={handleZkLoginSuccess} onError={handleZkLoginError} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link href="/login" className="text-purple-400 hover:text-purple-300">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

