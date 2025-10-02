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
            <img src="/chefpicture.png" alt="Chef Jake" className="w-full h-full object-cover" />
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-balance">Chef's Story</h2>
            <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>
                All my life, I have had a passion for food.
              </p>
              <p>
                My professional culinary journey began with 'Quarantine Cuisine', a bespoke private dining venture I started in Singapore over COVID-19 in my own home. Throughout this venture, I served over 100 guests, including US embassy personnel, pilots stuck in quarantine hotels and Michelin-starred chefs.
              </p>
              <p>
                Prior to college, I worked as a chef in New York, helping 63 Clinton, as one of 5 chefs, earn its first Michelin star, and at 350 Main, a top-rated contemporary American restaurant in Park City, Utah.
              </p>
              <p>
                Most recently, I worked in the local fine-dining restaurant in Lewisburg, Pennsylvania, while attending Bucknell University.
              </p>
              <p>
                These experiences enabled me to refine my skills in the culinary arts, expand my pallet, and create new dishes. Now, at USC, I hope to make a difference once again.
              </p>
            </div>
            <p className="font-serif text-2xl italic">– Jake Bonz</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
