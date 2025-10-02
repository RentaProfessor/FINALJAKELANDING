"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const dishes = [
  {
    id: "cava-mediterranean-bowl",
    name: "Cava-Inspired Mediterranean Chicken Rice Bowl",
    description:
      "Tender grilled chicken over fluffy basmati rice, topped with fresh cucumber-tomato salad, creamy hummus, tangy tzatziki, and a sprinkle of feta. Finished with a drizzle of lemon-herb vinaigrette.",
    price: 16,
    image: "/mediterranean-chicken-rice-bowl-with-hummus-and-ve.jpg",
  },
  {
    id: "truffle-mac-cheese",
    name: "Truffle Mac & Cheese",
    description:
      "Creamy three-cheese blend with black truffle oil, topped with crispy panko breadcrumbs and fresh herbs. Comfort food elevated to fine dining.",
    price: 14,
    image: "/gourmet-truffle-mac-and-cheese.jpg",
  },
  {
    id: "miso-glazed-salmon",
    name: "Miso-Glazed Salmon",
    description:
      "Pan-seared salmon with sweet miso glaze, served over jasmine rice with sautéed bok choy and sesame seeds. A perfect balance of umami and freshness.",
    price: 18,
    image: "/miso-glazed-salmon-with-bok-choy.jpg",
  },
]

export function FeaturedDishesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="featured-dishes" className="py-24 px-4 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Featured Dishes</h2>
          <p className="text-lg text-muted-foreground text-balance">
            Handcrafted meals that bring Michelin-quality to your dorm
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/menu/${dish.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={dish.image || "/placeholder.svg"}
                      alt={dish.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-balance">{dish.name}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{dish.description}</p>
                    <p className="text-2xl font-bold">${dish.price}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/menu">
            <Button size="lg" variant="outline" className="group bg-transparent">
              Explore Full Menu
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
