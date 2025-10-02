"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    console.log(`Attempting to scroll to section: ${id}`)
    setIsMenuOpen(false) // Close menu first
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        console.log(`Found element for ${id}, scrolling...`)
        // Get the element's position relative to the document
        const elementPosition = element.offsetTop
        const offsetPosition = elementPosition - 80 // Account for fixed header
        
        // Use window.scrollTo for more reliable scrolling
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
      } else {
        console.log(`Element with id "${id}" not found`)
        // Let's also log all available IDs for debugging
        const allElements = document.querySelectorAll('[id]')
        console.log('Available IDs:', Array.from(allElements).map(el => el.id))
      }
    }, 100)
  }

  const menuItems = [
    { label: "Home", action: () => { console.log("Home clicked"); setIsMenuOpen(false); window.location.href = "/"; } },
    { label: "Chef's Story", action: () => scrollToSection("chef-story") },
    { label: "Featured Dishes", action: () => scrollToSection("featured-dishes") },
    { label: "How It Works", action: () => scrollToSection("how-it-works") },
    { label: "Testimonials", action: () => scrollToSection("testimonials") },
    { label: "Contact", action: () => scrollToSection("contact") },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl font-semibold text-foreground">
          Chef Jake
        </Link>

        <div className="flex items-center gap-2">
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
            <div className="container mx-auto px-4 py-6 space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className="block w-full text-left text-lg px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-medium"
                >
                  {item.label}
                </button>
              ))}
              <Link
                href="/menu"
                className="block w-full text-left text-lg px-4 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
