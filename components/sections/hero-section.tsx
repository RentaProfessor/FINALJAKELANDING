"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/placeholder.svg?height=1080&width=1920&query=elegant plated gourmet meal)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 text-balance">Chef Jake</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance">
          Michelin Inspired — Student Wired
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button size="lg" className="text-lg px-8">
              View Menu
            </Button>
          </Link>
          <Link href="/menu">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Order Now
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
