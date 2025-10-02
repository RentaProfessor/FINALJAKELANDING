"use client"

import { X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

const mockCartItems = [
  {
    id: 1,
    name: "Cava-Inspired Mediterranean Chicken Rice Bowl",
    price: 16,
    quantity: 1,
    image: "/mediterranean-chicken-rice-bowl.jpg",
  },
  {
    id: 2,
    name: "Truffle Mac & Cheese",
    price: 14,
    quantity: 1,
    image: "/truffle-mac-and-cheese.jpg",
  },
]

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const subtotal = mockCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 bg-black/50 z-50"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-card z-50 shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="font-serif text-2xl font-semibold">Your Cart</h2>
                <Button variant="ghost" size="icon" onClick={onClose}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {mockCartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-background rounded-lg p-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-2">{item.name}</h3>
                      <p className="text-lg font-semibold mb-2">${item.price}</p>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="icon" className="h-7 w-7 bg-transparent">
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button variant="outline" size="icon" className="h-7 w-7 bg-transparent">
                          <Plus className="h-3 w-3" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-7 w-7 ml-auto">
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border p-6 space-y-4">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Subtotal</span>
                  <span>${subtotal}</span>
                </div>
                <Link href="/checkout" onClick={onClose}>
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
