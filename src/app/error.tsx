"use client"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const router = useRouter()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Something is wrong
        </h1>
        

        <div className="flex gap-4">
          <Button onClick={() => reset()} className="bg-gradient-to-r from-purple-400 to-pink-600">
            Try again
          </Button>
          <Button onClick={() => router.push("/")} variant="outline" className="border-white/20 text-black">
            Go home
          </Button>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Error code: {error.digest}</p>
          <p>Request details: {error.message}</p>
        </div>
      </div>
    </div>
  )
}

