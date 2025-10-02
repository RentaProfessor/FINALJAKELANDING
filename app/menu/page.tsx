import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const menuItems = [
  {
    id: "cava-mediterranean-bowl",
    name: "Cava-Inspired Mediterranean Chicken Rice Bowl",
    description:
      "Tender grilled chicken over fluffy basmati rice, topped with fresh cucumber-tomato salad, creamy hummus, tangy tzatziki, and a sprinkle of feta.",
    price: 16,
    category: "Bowls",
    image: "/CHICKEN BOWL.png",
  },
  {
    id: "marry-me-chicken",
    name: "Marry Me Chicken",
    description: "Creamy sun-dried tomato and parmesan chicken served over pasta with fresh herbs and a touch of cream.",
    price: 17,
    category: "Italian",
    image: "/Marry Me Chicken.png",
  },
  {
    id: "miso-glazed-salmon",
    name: "Miso-Glazed Salmon Bowl",
    description: "Pan-seared salmon with sweet miso glaze, served over jasmine rice with sautéed bok choy and sesame seeds.",
    price: 18,
    category: "Seafood",
    image: "/Miso Salmon Bowl.png",
  },
  {
    id: "spicy-vodka-rigatoni",
    name: "Spicy Vodka Rigatoni",
    description: "Perfectly cooked rigatoni in a creamy vodka sauce with a kick of spice, finished with fresh basil and parmesan.",
    price: 15,
    category: "Pasta",
    image: "/Spicy Vodka Rigatoni.png",
  },
]

export default function MenuPage() {
  return (
    <main>
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-balance">Our Menu</h1>
            <p className="text-lg text-muted-foreground text-balance">Michelin-quality meals crafted for students</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {menuItems.map((item) => (
              <Link key={item.id} href={`/menu/${item.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="relative h-80 overflow-hidden bg-muted/20">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-balance">{item.name}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                    <div className="pt-2">
                      <p className="text-2xl font-bold">${item.price}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
