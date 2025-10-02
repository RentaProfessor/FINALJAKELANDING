"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CartDrawer } from "@/components/cart-drawer"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const menuItems = [
    { label: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "Chef's Story", action: () => scrollToSection("chef-story") },
    { label: "Featured Dishes", action: () => scrollToSection("featured-dishes") },
    { label: "How It Works", action: () => scrollToSection("how-it-works") },
    { label: "Testimonials", action: () => scrollToSection("testimonials") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold text-foreground">
            Chef Jake
          </Link>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(true)} className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-border bg-card overflow-hidden"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={item.action}
                    className="block w-full text-left text-lg hover:text-primary transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
                <Link
                  href="/menu"
                  className="block w-full text-left text-lg hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Menu
                </Link>
                <button
                  onClick={() => {
                    setIsCartOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="block w-full text-left text-lg hover:text-primary transition-colors"
                >
                  Cart
                </button>
                <Link
                  href="/track"
                  className="block w-full text-left text-lg hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Track Order
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
