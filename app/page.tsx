import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero Image"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-12 lg:p-24 bg-gradient-to-r from-black/70 to-transparent">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            OVERSIZED <br /> REDEFINED
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-md mb-8">
            Experience comfort and style with our premium oversized t-shirts
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              SHOP MEN
            </Button>
            <Button size="lg" className="bg-white text-black hover:bg-white/90">
              SHOP WOMEN
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">FEATURED COLLECTION</h2>
          <Link href="/products" className="flex items-center text-sm font-medium hover:underline">
            VIEW ALL <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link href={`/products/${product.id}`} key={product.id} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEW</div>
                )}
              </div>
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="text-gray-700 mb-1">{product.category}</p>
              <p className="font-bold">${product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">OUR STORY</h2>
            <p className="text-gray-700 mb-6">
              Funcy Fabric was born from a passion for comfort and style. We believe that clothing should be an
              expression of individuality, and our oversized t-shirts provide the perfect canvas for self-expression.
            </p>
            <p className="text-gray-700 mb-6">
              Each piece is crafted with premium materials and attention to detail, ensuring that you not only look good
              but feel good too. Our commitment to quality and sustainability drives everything we do.
            </p>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
              LEARN MORE
            </Button>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Brand Story"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/products?category=${category.slug}`}
              key={category.name}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">JOIN THE FUNCY FAMILY</h2>
          <p className="mb-8">Subscribe to our newsletter for exclusive offers, new releases, and more.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <Button className="bg-white text-black hover:bg-white/90">SUBSCRIBE</Button>
          </form>
        </div>
      </section>
    </div>
  )
}

// Static data for frontend
const featuredProducts = [
  {
    id: "1",
    name: "Classic Oversized Tee",
    category: "Men",
    price: 49.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: true,
  },
  {
    id: "2",
    name: "Urban Boxy Fit",
    category: "Women",
    price: 54.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: false,
  },
  {
    id: "3",
    name: "Vintage Wash Oversized",
    category: "Men",
    price: 59.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: true,
  },
  {
    id: "4",
    name: "Graphic Print Tee",
    category: "Women",
    price: 64.99,
    image: "/placeholder.svg?height=600&width=450",
    isNew: false,
  },
]

const categories = [
  {
    name: "MEN",
    slug: "men",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "WOMEN",
    slug: "women",
    image: "/placeholder.svg?height=800&width=600",
  },
  {
    name: "ACCESSORIES",
    slug: "accessories",
    image: "/placeholder.svg?height=800&width=600",
  },
]
