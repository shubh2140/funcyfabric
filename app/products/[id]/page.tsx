"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart, Share2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import allProductData from "../../../data/allProduct.json";
import { useEffect, useState } from "react";
import ProductCard from "@/components/pages/home/ProductCard";

export default function ProductPage({ params }: { params: { id: any } }) {
  // In a real app, you would fetch the product data based on the ID
  // For now, we'll use static data

  const [product, setProduct] = useState({} as any);
  useEffect(() => {
    setProduct(allProductData.filter((item) => item.id == params.id)[0]);
    console.log(params.id);
  }, []);
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="flex items-center text-sm mb-8">
        <Link href="/" className="text-gray-500 hover:text-black">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <Link href="/products" className="text-gray-500 hover:text-black">
          Products
        </Link>
        <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
        <span className="font-medium">{product?.name}</span>
      </div>

      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden bg-gray-100">
            <Image
              src={product?.image || "/placeholder.svg"}
              alt={product?.name || "Unkown"}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product?.images?.map((image: any, index: any) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
              >
                <Link href={`/products/${image.id}`}>
                  <Image
                    src={image.image || "/placeholder.svg"}
                    alt={`${image.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
            <p className="text-gray-500 mb-4">{product?.category}</p>
            <p className="text-2xl font-bold">{product?.discountPrice}</p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex space-x-2">
                {product?.colors?.map((color: any) => (
                  <div
                    key={color}
                    className="w-8 h-8 rounded-full border border-gray-300 cursor-pointer flex items-center justify-center"
                    style={{
                      backgroundColor:
                        color.toLowerCase() === "white" ? "white" : "",
                    }}
                  >
                    {color.toLowerCase() === "black" && (
                      <div className="w-6 h-6 rounded-full bg-black"></div>
                    )}
                    {color.toLowerCase() === "white" && (
                      <div className="w-6 h-6 rounded-full bg-white"></div>
                    )}
                    {color.toLowerCase() === "gray" && (
                      <div className="w-6 h-6 rounded-full bg-gray-400"></div>
                    )}
                    {color.toLowerCase() === "navy" && (
                      <div className="w-6 h-6 rounded-full bg-blue-900"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Size</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a size" />
                </SelectTrigger>
                <SelectContent>
                  {product?.sizes?.map((size: any) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Link
                href="/size-guide"
                className="text-sm underline mt-2 inline-block"
              >
                Size Guide
              </Link>
            </div>

            <div className="flex space-x-4 pt-4">
              <Button className="flex-1 h-12">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Add to Wishlist</span>
              </Button>
              <Button variant="outline" size="icon" className="h-12 w-12">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="description" className="pt-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-gray-700">{product?.description}</p>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {product?.features?.map((feature: any, index: any) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <div className="space-y-4 text-gray-700">
                {/* <p>Free standard shipping on all orders over $100.</p>
                <p>Express shipping available for an additional fee.</p>
                <p>
                  Returns accepted within 30 days of delivery. Item must be
                  unworn, unwashed, and with original tags attached.
                </p> */}
                {product?.shipping?.map((shipping: any, index: any) => (
                  <p key={index}>{shipping}</p>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="py-12 border-t">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {product?.relatedProducts?.map((relatedProduct: any) => (
            <Link
              href={`/products/${relatedProduct.id}`}
              key={relatedProduct.id}
              className="group"
            >
              {/* <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-4">
                <Image
                  src={relatedProduct.src || "/placeholder.svg"}
                  alt={relatedProduct?.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-1">{relatedProduct?.name}</h3>
              <p className="text-gray-700 mb-1">{relatedProduct?.category}</p>
              <p className="font-bold">${relatedProduct?.price}</p> */}

              <ProductCard product={relatedProduct} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
