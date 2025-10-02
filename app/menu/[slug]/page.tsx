import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

// Generate static params for all dish slugs
export async function generateStaticParams() {
  return [
    { slug: "cava-mediterranean-bowl" },
    { slug: "marry-me-chicken" },
    { slug: "miso-glazed-salmon" },
    { slug: "spicy-vodka-rigatoni" },
  ]
}

// Mock data - in real app this would come from database
const dishDetails: Record<string, any> = {
  "cava-mediterranean-bowl": {
    name: "Cava-Inspired Mediterranean Chicken Rice Bowl",
    description:
      "Tender grilled chicken over fluffy basmati rice, topped with fresh cucumber-tomato salad, creamy hummus, tangy tzatziki, and a sprinkle of feta. Finished with a drizzle of lemon-herb vinaigrette.",
    price: 16,
    category: "Bowls",
    image: "/CHICKEN BOWL.png",
    ingredients: [
      "Grilled Chicken",
      "Basmati Rice",
      "Hummus",
      "Tzatziki",
      "Feta Cheese",
      "Cucumber",
      "Tomatoes",
      "Lemon-Herb Vinaigrette",
    ],
    allergens: ["Dairy", "Gluten"],
    nutrition: { calories: 620, protein: "42g", carbs: "58g", fat: "22g" },
  },
  "marry-me-chicken": {
    name: "Marry Me Chicken",
    description:
      "Creamy sun-dried tomato and parmesan chicken served over pasta with fresh herbs and a touch of cream. A dish so good, it'll make you want to propose.",
    price: 17,
    category: "Italian",
    image: "/Marry Me Chicken.png",
    ingredients: [
      "Chicken Breast",
      "Sun-Dried Tomatoes",
      "Parmesan Cheese",
      "Heavy Cream",
      "Pasta",
      "Fresh Basil",
      "Garlic",
      "Olive Oil",
    ],
    allergens: ["Dairy", "Gluten"],
    nutrition: { calories: 580, protein: "38g", carbs: "45g", fat: "28g" },
  },
  "miso-glazed-salmon": {
    name: "Miso-Glazed Salmon Bowl",
    description:
      "Pan-seared salmon with sweet miso glaze, served over jasmine rice with sautéed bok choy and sesame seeds. A perfect balance of umami and freshness.",
    price: 18,
    category: "Seafood",
    image: "/Miso Salmon Bowl.png",
    ingredients: [
      "Salmon Fillet",
      "Miso Paste",
      "Jasmine Rice",
      "Bok Choy",
      "Sesame Seeds",
      "Soy Sauce",
      "Ginger",
      "Green Onions",
    ],
    allergens: ["Fish", "Soy"],
    nutrition: { calories: 520, protein: "45g", carbs: "42g", fat: "18g" },
  },
  "spicy-vodka-rigatoni": {
    name: "Spicy Vodka Rigatoni",
    description:
      "Perfectly cooked rigatoni in a creamy vodka sauce with a kick of spice, finished with fresh basil and parmesan.",
    price: 15,
    category: "Pasta",
    image: "/Spicy Vodka Rigatoni.png",
    ingredients: [
      "Rigatoni Pasta",
      "Vodka",
      "Tomato Sauce",
      "Heavy Cream",
      "Red Pepper Flakes",
      "Parmesan Cheese",
      "Fresh Basil",
      "Garlic",
    ],
    allergens: ["Dairy", "Gluten"],
    nutrition: { calories: 650, protein: "22g", carbs: "68g", fat: "28g" },
  },
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const dish = dishDetails[params.slug] || dishDetails["cava-mediterranean-bowl"]

  return (
    <main>
      <Navigation />
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Menu
          </Link>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-[500px] rounded-2xl overflow-hidden bg-muted/20">
              <img src={dish.image || "/placeholder.svg"} alt={dish.name} className="w-full h-full object-contain" />
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-sm text-muted-foreground mb-2">{dish.category}</div>
                <h1 className="font-serif text-4xl font-bold mb-4 text-balance">{dish.name}</h1>
                <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{dish.description}</p>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-4xl font-bold">${dish.price}</p>
              </div>


              <div className="space-y-4 pt-4">
                <div>
                  <h3 className="font-semibold mb-2">Ingredients</h3>
                  <div className="flex flex-wrap gap-2">
                    {dish.ingredients.map((ingredient: string) => (
                      <span key={ingredient} className="bg-muted px-3 py-1 rounded-full text-sm">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Allergens</h3>
                  <p className="text-muted-foreground">{dish.allergens.join(", ")}</p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Nutrition (per serving)</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Calories: {dish.nutrition.calories}</div>
                    <div>Protein: {dish.nutrition.protein}</div>
                    <div>Carbs: {dish.nutrition.carbs}</div>
                    <div>Fat: {dish.nutrition.fat}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
