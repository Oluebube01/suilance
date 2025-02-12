import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const PACKAGES = [
  {
    name: "Basic",
    price: 150,
    delivery: "7 days",
    features: ["Basic AI Implementation", "1 Use Case", "Documentation", "30 Days Support"],
  },
  {
    name: "Standard",
    price: 300,
    delivery: "14 days",
    features: ["Advanced AI Implementation", "3 Use Cases", "Documentation", "60 Days Support", "Custom Integration"],
  },
  {
    name: "Premium",
    price: 500,
    delivery: "21 days",
    features: [
      "Enterprise AI Solution",
      "Unlimited Use Cases",
      "Documentation",
      "90 Days Support",
      "Custom Integration",
      "Performance Optimization",
    ],
  },
]

export function ServicePackages() {
  return (
    <div className="grid gap-4">
      {PACKAGES.map((pkg) => (
        <Card key={pkg.name} className="bg-black/20 border-white/10">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{pkg.name}</span>
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                ${pkg.price}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-400">Delivered in {pkg.delivery}</p>
            <ul className="space-y-2">
              {pkg.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button className="w-full bg-gradient-to-r from-purple-400 to-pink-600">Select Package</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

