"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, ChefHat, Truck } from "lucide-react"

const steps = [
  {
    icon: Calendar,
    number: "1",
    title: "Order by Thursday 8pm",
    description: "Browse our weekly menu and place your order before the Thursday deadline.",
  },
  {
    icon: ChefHat,
    number: "2",
    title: "Cooked Fresh",
    description: "Your meals are prepared with care using premium ingredients and Michelin techniques.",
  },
  {
    icon: Truck,
    number: "3",
    title: "Delivered Friday/Saturday",
    description: "Receive your meals fresh at your door, ready to enjoy or store for the week.",
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="how-it-works" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground text-balance">Simple, seamless, and designed for student life</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="text-center space-y-4"
              >
                <div className="relative inline-block">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="font-serif text-2xl font-semibold text-balance">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
