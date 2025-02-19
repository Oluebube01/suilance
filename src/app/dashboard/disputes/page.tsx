"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"

export default function DisputesPage() {
  const [disputeType, setDisputeType] = useState("")
  const [description, setDescription] = useState("")
  const [relatedOrderId, setRelatedOrderId] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log({ disputeType, description, relatedOrderId })
    toast({
      title: "Dispute Submitted",
      description: "Your dispute has been successfully submitted. We'll get back to you soon.",
    })
    // Reset form
    setDisputeType("")
    setDescription("")
    setRelatedOrderId("")
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Report an Issue or Create a Dispute</h1>
      <Card>
        <CardHeader>
          <CardTitle>Dispute Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="disputeType" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Type of Issue
              </label>
              <Select value={disputeType} onValueChange={setDisputeType}>
                <SelectTrigger id="disputeType">
                  <SelectValue placeholder="Select issue type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="payment">Payment Dispute</SelectItem>
                  <SelectItem value="quality">Quality of Work</SelectItem>
                  <SelectItem value="communication">Communication Issue</SelectItem>
                  <SelectItem value="deadline">Missed Deadline</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Description
              </label>
              <Textarea
                id="description"
                placeholder="Please provide details about the issue"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="relatedOrderId" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Related Order ID (if applicable)
              </label>
              <Input
                id="relatedOrderId"
                placeholder="Enter the order ID related to this issue"
                value={relatedOrderId}
                onChange={(e) => setRelatedOrderId(e.target.value)}
              />
            </div>
            <Button type="submit">Submit Dispute</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

