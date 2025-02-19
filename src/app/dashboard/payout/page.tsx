import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { usdToSui, formatSui } from "@/lib/currency"

export default function PayoutPage() {
  const isClient = false // This should be determined by user role

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">{isClient ? "Payments" : "Payout"}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>{isClient ? "Total Amount Spent" : "Total Amount Received"}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatSui(usdToSui(10000))}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending Amounts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatSui(usdToSui(2500))}</p>
          </CardContent>
        </Card>
        {!isClient && (
          <Card>
            <CardHeader>
              <CardTitle>Available for Withdrawal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{formatSui(usdToSui(7500))}</p>
              <Button className="mt-4">Withdraw</Button>
            </CardContent>
          </Card>
        )}
      </div>
      {isClient && (
        <Card>
          <CardHeader>
            <CardTitle>Escrow Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{formatSui(usdToSui(5000))}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

