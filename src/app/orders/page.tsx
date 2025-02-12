"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const ORDERS = [
  {
    id: "ORD001",
    service: "Custom AI Solution",
    buyer: "John Doe",
    amount: 150,
    status: "In Progress",
    dueDate: "2024-02-20",
  },
  // Add more orders...
]

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#1a1a2e] py-8">
      <div className="container">
        <div className="grid gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-400">Active Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  12
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-400">Completed Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  145
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black/20 border-white/10">
              <CardHeader>
                <CardTitle className="text-sm font-medium text-gray-400">Total Earnings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  $15,780
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-black/20 border-white/10">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Service</TableHead>
                    <TableHead>Buyer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Due Date</TableHead>
                    <TableHead>Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ORDERS.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>{order.id}</TableCell>
                      <TableCell>{order.service}</TableCell>
                      <TableCell>{order.buyer}</TableCell>
                      <TableCell>${order.amount}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/20">
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>{order.dueDate}</TableCell>
                      <TableCell>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

