"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Kaitlyn",
    role: "USC Junior",
    content:
      "Chef Jake's meals have been a game-changer for me. I'm always busy with classes and work, but now I can enjoy restaurant-quality food without the hassle. The Mediterranean bowl is my absolute favorite!",
    rating: 5,
  },
  {
    name: "Mateo",
    role: "USC Sophomore",
    content:
      "I was skeptical at first, but the quality is incredible. You can really taste the difference when someone cares about what they're cooking. Way better than dining hall food!",
    rating: 5,
  },
  {
    name: "Zach",
    role: "USC Senior",
    content:
      "As someone who appreciates good food but has zero time to cook, Chef Jake is perfect. The truffle mac & cheese is legitimately better than most restaurants I've been to.",
    rating: 5,
  },
  {
    name: "Sarah",
    role: "USC Freshman",
    content:
      "My parents love that I'm eating well at school. The portions are generous and everything tastes fresh. It's like having a personal chef!",
    rating: 5,
  },
  {
    name: "Marcus",
    role: "USC Junior",
    content:
      "The convenience factor alone is worth it, but the food is genuinely delicious. I look forward to my Chef Jake meals every week.",
    rating: 5,
  },
  {
    name: "Emily",
    role: "USC Senior",
    content:
      "Finally, healthy food that actually tastes good! The attention to detail in every dish is impressive. You can tell Jake really cares about quality.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">What Students Say</h2>
          <p className="text-lg text-muted-foreground text-balance">Real reviews from real USC students</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-pretty">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
