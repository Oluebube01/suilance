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
          It needs a human touch
        </h1>
        <p className="text-gray-400 mb-8">Complete the task and we&apos;ll get you right back into SUILANCE.</p>

        <div className="bg-white/5 border border-green-500/20 rounded-lg p-6 mb-8">
          <h2 className="text-sm font-medium text-green-500 mb-4">Quick fixes</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>• Disable any browser extensions that could be interfering with the website.</li>
            <li>• Clear your browser&apos;s cache and cookies.</li>
            <li>• Make sure Javascript is enabled in your browser.</li>
          </ul>
        </div>

        <div className="flex gap-4">
          <Button onClick={() => reset()} className="bg-gradient-to-r from-purple-400 to-pink-600">
            Try again
          </Button>
          <Button onClick={() => router.push("/")} variant="outline" className="border-white/20">
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

