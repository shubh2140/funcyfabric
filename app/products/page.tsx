// import Link from "next/link"
// import Image from "next/image"
// import { Filter } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
// import { Checkbox } from "@/components/ui/checkbox"

// export default function ProductsPage() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col space-y-4">
//         <h1 className="text-3xl font-bold">All Products</h1>

//         {/* Filters and Sort */}
//         <div className="flex justify-between items-center py-4 border-b">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="outline" className="flex items-center gap-2">
//                 <Filter className="h-4 w-4" />
//                 Filters
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="left" className="w-[300px] sm:w-[400px]">
//               <SheetHeader>
//                 <SheetTitle>Filters</SheetTitle>
//                 <SheetDescription>Narrow down your product search</SheetDescription>
//               </SheetHeader>
//               <div className="py-6 space-y-6">
//                 <div className="space-y-4">
//                   <h3 className="font-medium">Category</h3>
//                   <div className="space-y-2">
//                     {["T-Shirts", "Hoodies", "Sweatshirts", "Accessories"].map((category) => (
//                       <div key={category} className="flex items-center space-x-2">
//                         <Checkbox id={`category-${category}`} />
//                         <label htmlFor={`category-${category}`} className="text-sm">
//                           {category}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <h3 className="font-medium">Gender</h3>
//                   <div className="space-y-2">
//                     {["Men", "Women", "Unisex"].map((gender) => (
//                       <div key={gender} className="flex items-center space-x-2">
//                         <Checkbox id={`gender-${gender}`} />
//                         <label htmlFor={`gender-${gender}`} className="text-sm">
//                           {gender}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <h3 className="font-medium">Size</h3>
//                   <div className="space-y-2">
//                     {["S", "M", "L", "XL", "XXL"].map((size) => (
//                       <div key={size} className="flex items-center space-x-2">
//                         <Checkbox id={`size-${size}`} />
//                         <label htmlFor={`size-${size}`} className="text-sm">
//                           {size}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <h3 className="font-medium">Color</h3>
//                   <div className="space-y-2">
//                     {["Black", "White", "Gray", "Blue", "Red"].map((color) => (
//                       <div key={color} className="flex items-center space-x-2">
//                         <Checkbox id={`color-${color}`} />
//                         <label htmlFor={`color-${color}`} className="text-sm">
//                           {color}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="space-y-4">
//                   <h3 className="font-medium">Price</h3>
//                   <div className="space-y-2">
//                     {["Under $50", "$50 - $100", "$100 - $150", "Over $150"].map((price) => (
//                       <div key={price} className="flex items-center space-x-2">
//                         <Checkbox id={`price-${price}`} />
//                         <label htmlFor={`price-${price}`} className="text-sm">
//                           {price}
//                         </label>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex gap-2 mt-4">
//                 <Button className="flex-1">Apply Filters</Button>
//                 <Button variant="outline" className="flex-1">
//                   Reset
//                 </Button>
//               </div>
//             </SheetContent>
//           </Sheet>

//           <Select>
//             <SelectTrigger className="w-[180px]">
//               <SelectValue placeholder="Sort by" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="newest">Newest</SelectItem>
//               <SelectItem value="price-low">Price: Low to High</SelectItem>
//               <SelectItem value="price-high">Price: High to Low</SelectItem>
//               <SelectItem value="popular">Most Popular</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>

//         {/* Products Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
//           {products.map((product) => (
//             <Link href={`/products/${product.id}`} key={product.id} className="group">
//               <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
//                 <Image
//                   src={product.image || "/placeholder.svg"}
//                   alt={product.name}
//                   fill
//                   className="object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 {product.isNew && (
//                   <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEW</div>
//                 )}
//                 {product.isSale && (
//                   <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1">SALE</div>
//                 )}
//               </div>
//               <h3 className="font-medium mb-1">{product.name}</h3>
//               <p className="text-gray-700 mb-1">{product.category}</p>
//               <div className="flex items-center gap-2">
//                 {product.isSale ? (
//                   <>
//                     <p className="font-bold">${product.salePrice}</p>
//                     <p className="text-gray-500 line-through">${product.price}</p>
//                   </>
//                 ) : (
//                   <p className="font-bold">${product.price}</p>
//                 )}
//               </div>
//             </Link>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center items-center space-x-2 py-8">
//           <Button variant="outline" size="icon" disabled>
//             &lt;
//           </Button>
//           <Button variant="outline" size="sm" className="bg-black text-white hover:bg-black/90">
//             1
//           </Button>
//           <Button variant="outline" size="sm">
//             2
//           </Button>
//           <Button variant="outline" size="sm">
//             3
//           </Button>
//           <Button variant="outline" size="sm">
//             4
//           </Button>
//           <Button variant="outline" size="icon">
//             &gt;
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// // Static product data for frontend
// const products = [
//   {
//     id: "1",
//     name: "Classic Oversized Tee",
//     category: "Men",
//     price: 49.99,
//     image: "/placeholder.svg?height=600&width=450",
//     isNew: true,
//     isSale: false,
//   },
//   {
//     id: "2",
//     name: "Urban Boxy Fit",
//     category: "Women",
//     price: 54.99,
//     salePrice: 39.99,
//     image: "/placeholder.svg?height=600&width=450",
//     isNew: false,
//     isSale: true,
//   },
//   {
//     id: "3",
//     name: "Vintage Wash Oversized",
//     category: "Men",
//     price: 59.99,
//     image: "/placeholder.svg?height=600&width=450",
//     isNew: true,
//     isSale: false,
//   },
//   {
//     id: "4",
//     name: "Graphic Print Tee",
//     category: "Women",
//     price: 64.99,
//     image: "/placeholder.svg?height=600&width=450",
//     isNew: false,
//     isSale: false,
//   },
//   {
//     id: "5",
//     name: "Essential Oversized Tee",
//     category: "Men",
//     price: 44.99,
//     image: "/placeholder.svg?height=600&width=450",
//     isNew: false,
//     isSale: false,
//   },
//   {
//     id: "6",
//     name: "Relaxed Fit Tee",
//     category: "Women",
//     price: 49.99,
//     salePrice: 34.99,
//     image: "/placeholder.svg?height=600&width=450",
//     isNew: false,
//     isSale: true,
//   },
//   {
//     id: "7",
//     name: "Premium Cotton Tee",
//     category: "Men",
//     price: 69.99,
//     image: "/placeholder.svg?height=600&width=450",
//     isNew: false,
//     isSale: false,
//   },
//   {
//     id: "8",
//     name: "Streetwear Oversized",
//     category: "Women",
//     price: 59.99,
//     image: "/placeholder.svg?height=600&width=450",
//     isNew: true,
//     isSale: false,
//   },
// ]

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";

export default function ProductsPage() {
  const [sortBy, setSortBy] = useState(""); // State for sorting option

  // Function to sort products
  const sortedProducts = [...products].sort((a: any, b: any) => {
    if (sortBy === "newest") return b.isNew - a.isNew;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "popular") return 0; // Placeholder for popularity sorting
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">All Products</h1>

        {/* Filters and Sort */}
        <div className="flex justify-between items-center py-4 border-b">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  Narrow down your product search
                </SheetDescription>
              </SheetHeader>
              {/* Filter Options */}
            </SheetContent>
          </Sheet>

          <Select onValueChange={(value) => setSortBy(value)}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8">
          {sortedProducts.map((product) => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className="group"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">
                    NEW
                  </div>
                )}
                {product.isSale && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1">
                    SALE
                  </div>
                )}
              </div>
              <h3 className="font-medium mb-1">{product.name}</h3>
              <p className="text-gray-700 mb-1">{product.category}</p>
              <div className="flex items-center gap-2">
                {product.isSale ? (
                  <>
                    <p className="font-bold">${product.salePrice}</p>
                    <p className="text-gray-500 line-through">
                      ${product.price}
                    </p>
                  </>
                ) : (
                  <p className="font-bold">${product.price}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

// Static product data for frontend
const products = [
  {
    id: "1",
    name: "Classic Oversized Tee",
    category: "Men",
    price: 49.99,
    image: "/placeholder.svg",
    isNew: true,
    isSale: false,
  },
  {
    id: "2",
    name: "Urban Boxy Fit",
    category: "Women",
    price: 54.99,
    salePrice: 39.99,
    image: "/placeholder.svg",
    isNew: false,
    isSale: true,
  },
  {
    id: "3",
    name: "Vintage Wash Oversized",
    category: "Men",
    price: 59.99,
    image: "/placeholder.svg",
    isNew: true,
    isSale: false,
  },
  {
    id: "4",
    name: "Graphic Print Tee",
    category: "Women",
    price: 64.99,
    image: "/placeholder.svg",
    isNew: false,
    isSale: false,
  },
  {
    id: "5",
    name: "Essential Oversized Tee",
    category: "Men",
    price: 44.99,
    image: "/placeholder.svg",
    isNew: false,
    isSale: false,
  },
  {
    id: "6",
    name: "Relaxed Fit Tee",
    category: "Women",
    price: 49.99,
    salePrice: 34.99,
    image: "/placeholder.svg",
    isNew: false,
    isSale: true,
  },
  {
    id: "7",
    name: "Premium Cotton Tee",
    category: "Men",
    price: 69.99,
    image: "/placeholder.svg",
    isNew: false,
    isSale: false,
  },
  {
    id: "8",
    name: "Streetwear Oversized",
    category: "Women",
    price: 59.99,
    image: "/placeholder.svg",
    isNew: true,
    isSale: false,
  },
];
