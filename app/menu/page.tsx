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
    image: "/mediterranean-chicken-rice-bowl.jpg",
  },
  {
    id: "truffle-mac-cheese",
    name: "Truffle Mac & Cheese",
    description: "Creamy three-cheese blend with black truffle oil, topped with crispy panko breadcrumbs.",
    price: 14,
    category: "Comfort",
    image: "/truffle-mac-and-cheese.jpg",
  },
  {
    id: "miso-glazed-salmon",
    name: "Miso-Glazed Salmon",
    description: "Pan-seared salmon with sweet miso glaze, served over jasmine rice with sautéed bok choy.",
    price: 18,
    category: "Seafood",
    image: "/miso-glazed-salmon.jpg",
  },
  {
    id: "korean-beef-bowl",
    name: "Korean BBQ Beef Bowl",
    description: "Marinated beef bulgogi over rice with kimchi, pickled vegetables, and gochujang aioli.",
    price: 17,
    category: "Bowls",
    image: "/korean-bbq-beef-bowl.jpg",
  },
  {
    id: "pesto-pasta",
    name: "Basil Pesto Pasta",
    description: "Fresh pasta tossed in house-made basil pesto with cherry tomatoes and pine nuts.",
    price: 13,
    category: "Pasta",
    image: "/basil-pesto-pasta.jpg",
  },
  {
    id: "chicken-parmesan",
    name: "Chicken Parmesan",
    description: "Breaded chicken breast with marinara and melted mozzarella, served with spaghetti.",
    price: 15,
    category: "Italian",
    image: "/chicken-parmesan.png",
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item) => (
              <Link key={item.id} href={`/menu/${item.id}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-card px-3 py-1 rounded-full text-sm font-medium">
                      {item.category}
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="font-serif text-xl font-semibold text-balance">{item.name}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{item.description}</p>
                    <div className="flex items-center justify-between pt-2">
                      <p className="text-2xl font-bold">${item.price}</p>
                      <Button>Add to Cart</Button>
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
