"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
//import { SuiPayment } from "@/lib/sui-payment"

interface PaymentModalProps {
  isOpen: boolean
  onClose: () => void
  amount: number
  receiverAddress: string
}

export function PaymentModal({ isOpen, onClose, amount }: PaymentModalProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handlePayment = async () => {
    setIsProcessing(true)
    setError(null)

   // try {
    //  const suiPayment = new SuiPayment()
     // await suiPayment.connectWallet({})
    //  const result = await suiPayment.makePayment(amount, receiverAddress)

    //  if (result.success) {
      //  onClose()
      //}
 //   } catch (err) {
     // setError("Payment failed. Please try again.")
  //  } finally {
      //setIsProcessing(false)
   // }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/90 border-white/10">
        <DialogHeader>
          <DialogTitle>Complete Payment</DialogTitle>
          <DialogDescription>Pay ${amount} using Sui blockchain</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            onClick={handlePayment}
            disabled={isProcessing}
            className="w-full bg-gradient-to-r from-purple-400 to-pink-600"
          >
            {isProcessing ? "Processing..." : "Pay Now"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

