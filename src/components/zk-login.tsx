"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { initiateZkLogin, completeZkLogin } from "@/lib/zk-login"

interface ZkLoginProps {
  onSuccess: (address: string) => void
  onError: (error: string) => void
}

export function ZkLogin({ onSuccess, onError }: ZkLoginProps) {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    // Listen for the zkLogin callback
    //const handleZkLoginCallback = async (event: MessageEvent) => {
      //if (event.data && event.data.type === "zkLoginCallback") {
       // setIsLoading(true)
      //  try {
         // const result = await completeZkLogin(event.data.zkProof)
       //   onSuccess(result.address)
      //  } catch (error) {
        //  onError("Failed to complete zkLogin")
    //  } finally {
     //     setIsLoading(false)
       // }
    //  }
   // }

    window.addEventListener("message", handleZkLoginCallback)
    return () => window.removeEventListener("message", handleZkLoginCallback)
  }, [onSuccess, onError])

  //const handleZkLogin = async () => {
   // setIsLoading(true)
   // try {
    //  await initiateZkLogin()
    //} catch (error) {
     // onError("Failed to initiate zkLogin")
 //   } finally {
     // setIsLoading(false)
  //  }
  //}

  return (
    <Button
      onClick={handleZkLogin}
      disabled={isLoading}
      className="w-full bg-gradient-to-r from-purple-400 to-pink-600 text-white"
    >
      {isLoading ? "Loading..." : "Login with zkLogin"}
    </Button>
  )
}

