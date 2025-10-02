"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function ChefStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="chef-story" className="py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <img src="/chef-in-professional-kitchen.jpg" alt="Chef Jake" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">Chef's Story</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                I grew up surrounded by food and community. My grandmother's kitchen was where I learned that cooking
                isn't just about feeding people—it's about bringing them together, creating moments, and showing care
                through every ingredient.
              </p>
              <p>
                After training in Michelin-starred kitchens and experiencing the artistry of fine dining, I realized
                something was missing. The precision, the passion, the quality—why should that be reserved for special
                occasions?
              </p>
              <p>
                As a student myself, I know the struggle of balancing studies, work, and trying to eat well. That's why
                I started Chef Jake: to bring restaurant-quality meals to students who deserve better than instant
                ramen, but don't have time to cook.
              </p>
            </div>
            <p className="font-serif text-2xl italic">– Jake Bonz</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
