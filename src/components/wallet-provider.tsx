"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { WALLET_CONFIG } from "@/lib/wallet-config"

interface WalletProviderProps {
  children: React.ReactNode
}

export function WalletProvider({ children }: WalletProviderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null // Return null on server-side and first render
  }

  return (
    <div
      data-bybit-channel-name={WALLET_CONFIG.channelName}
      data-bybit-is-default-wallet={WALLET_CONFIG.isDefaultWallet}
    >
      {children}
    </div>
  )
}

