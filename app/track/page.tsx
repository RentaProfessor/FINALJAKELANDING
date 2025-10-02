"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Circle, Package } from "lucide-react"

const mockOrderStatus = {
  orderNumber: "CJ-2025-001",
  status: "In Progress",
  estimatedDelivery: "Friday, Jan 10, 2025",
  items: ["Cava-Inspired Mediterranean Chicken Rice Bowl", "Truffle Mac & Cheese"],
  timeline: [
    { label: "Order Placed", completed: true, date: "Jan 8, 2:30 PM" },
    { label: "Preparing Your Meal", completed: true, date: "Jan 9, 10:00 AM" },
    { label: "Out for Delivery", completed: false, date: "Jan 10" },
    { label: "Delivered", completed: false, date: "Jan 10" },
  ],
}

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [showStatus, setShowStatus] = useState(false)

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault()
    setShowStatus(true)
  }

  return (
    <main>
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Track Your Order</h1>
            <p className="text-lg text-muted-foreground text-balance">Enter your order number to see the status</p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-6">
              <form onSubmit={handleTrack} className="flex gap-4">
                <Input
                  placeholder="Order Number (e.g., CJ-2025-001)"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">Track Order</Button>
              </form>
            </CardContent>
          </Card>

          {showStatus && (
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="font-serif text-2xl font-semibold mb-1">Order {mockOrderStatus.orderNumber}</h2>
                      <p className="text-muted-foreground">
                        Status: <span className="font-medium text-foreground">{mockOrderStatus.status}</span>
                      </p>
                    </div>
                    <Package className="h-8 w-8 text-primary" />
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                    <p className="font-semibold">{mockOrderStatus.estimatedDelivery}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Items in your order:</p>
                    <ul className="space-y-1">
                      {mockOrderStatus.items.map((item, index) => (
                        <li key={index} className="text-sm">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-6">Order Timeline</h3>
                  <div className="space-y-6">
                    {mockOrderStatus.timeline.map((step, index) => (
                      <div key={index} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          {step.completed ? (
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                          ) : (
                            <Circle className="h-6 w-6 text-muted-foreground" />
                          )}
                          {index < mockOrderStatus.timeline.length - 1 && (
                            <div className={`w-0.5 h-12 mt-2 ${step.completed ? "bg-primary" : "bg-border"}`} />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <p className={`font-medium ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                            {step.label}
                          </p>
                          <p className="text-sm text-muted-foreground">{step.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </main>
  )
}
