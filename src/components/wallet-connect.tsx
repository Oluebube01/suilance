"use client"

import { Button } from "@/components/ui/button"
import { useWallet } from "@/hooks/use-wallet"
import { Loader2 } from "lucide-react"

export function WalletConnect() {
  const { isConnected, isLoading, connect, disconnect } = useWallet()

  if (isLoading) {
    return (
      <Button disabled variant="outline">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading...
      </Button>
    )
  }

  if (isConnected) {
    return (
      <Button variant="outline" onClick={disconnect}>
        Disconnect Wallet
      </Button>
    )
  }

  return (
    <Button variant="outline" onClick={connect}>
      Connect Wallet
    </Button>
  )
}

