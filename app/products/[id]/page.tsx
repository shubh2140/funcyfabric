"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import ProductCard from "@/components/pages/home/ProductCard";
import allProducts from "../../../data/allProduct.json";
import { Badge } from "@/components/ui/badge";

export default function ProductPage({ params }: { params: { id: any } }) {
  const [product, setProduct] = useState({} as any);
  const [quantity, setQuantity] = useState(1);
  const [productSize, setProductSize] = useState(null as any);

  const handleOrder = () => {
    if (!productSize) {
      alert("Please select a size before ordering.");
      return;
    }

    const message = encodeURIComponent(
      `Hey, I wanna buy this product. Product Name: ${product?.name}, Product ID: ${product?.id}, Product Size: ${productSize}, Product Quantity: ${quantity}, Product Price: ${product?.discountPrice}`
    );

    window.open(`https://wa.me/919902972151?text=${message}`, "_self");
  };

  const hasDiscount =
    product.discountPrice && product.discountPrice < product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountPrice) / product.price) * 100
      )
    : 0;

  useEffect(() => {
    setProduct(allProducts.filter((item) => item.id == params.id)[0]);
  }, [params]);
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
            {product.isNew && (
              <Badge className="absolute top-1 left-1 bg-black text-white text-xs font-bold">
                NEW
              </Badge>
            )}
            {hasDiscount && (
              <Badge className="absolute top-1 right-1 bg-red-500 text-white text-xs font-bold">
                -{discountPercentage}%
              </Badge>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product?.relatedProducts?.map(
              (relatedProduct: any, index: any) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden bg-gray-100 cursor-pointer"
                >
                  <Link href={`/products/${relatedProduct.id}`}>
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={`${relatedProduct.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </div>
              )
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* <div>
            <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
            <p className="text-gray-500 mb-4">{product?.category}</p>
            <p className="text-2xl font-bold">{product?.discountPrice}</p>
          </div> */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product?.name}</h1>
            <p className="text-gray-500 mb-4">{product?.category}</p>
            <div className="flex items-center space-x-3">
              <p className="text-2xl font-bold text-red-500">
                ₹{product?.discountPrice}
              </p>
              <p className="text-lg text-gray-500 line-through">
                ₹{product?.price}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {/* <div>
              <h3 className="font-medium mb-2">Color : {selectedColor}</h3>
              <div className="flex space-x-2">
                {product?.colors?.map((color: any) => (
                  <div
                    key={color}
                    onClick={() => setSelectedColor(color)} // Set selected color
                    className={`w-8 h-8 rounded-full border cursor-pointer flex items-center justify-center ${
                      selectedColor === color
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                    }}
                  >
                    <div
                      className={`w-6 h-6 rounded-full`}
                      style={{
                        backgroundColor: color.toLowerCase(),
                        border:
                          selectedColor === color ? "2px solid black" : "none",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              
            </div> */}

            <div className="">
              <h3 className="font-medium">Size</h3>
              <Select onValueChange={(value) => setProductSize(value)}>
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
            </div>
            <div className="pt-4 md:pt-0">
              <h3 className="font-medium">Quantity</h3>
              <Select onValueChange={(value) => setQuantity(Number(value))}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={quantity.toString()} />
                </SelectTrigger>
                <SelectContent>
                  {[...Array(10).keys()].map((num) => (
                    <SelectItem key={num + 1} value={(num + 1).toString()}>
                      {num + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Link
              href="/size-guide"
              className="text-sm underline mt-2 inline-block"
            >
              Size Guide
            </Link>

            {/* <div className="flex space-x-4 pt-4">
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
            </div> */}
            <div className="pt-4">
              <p className="text-sm text-gray-600">
                *We are facing some issues while accepting payments here. To
                place an order, please contact us on WhatsApp.
              </p>
              <div className="flex space-x-4 pt-2">
                <Button
                  className="flex-1 h-14 text-lg font-semibold flex items-center justify-center"
                  onClick={handleOrder}
                >
                  <span className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 mr-2 text-green-500"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      style={{ width: 28, height: 28 }}
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 2.21.72 4.26 1.96 5.96L2 22l4.27-1.13A9.962 9.962 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.82 0-3.53-.5-5-1.35l-.35-.21-2.53.67.67-2.46-.22-.36A7.92 7.92 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.13-5.17c-.23-.12-1.36-.67-1.57-.74s-.36-.12-.51.12-.58.74-.72.89-.26.17-.49.05c-.23-.12-.95-.35-1.8-1.1a6.767 6.767 0 01-1.25-1.55c-.13-.23-.01-.36.1-.48.11-.11.23-.26.35-.38.12-.13.16-.23.24-.38s.04-.28-.02-.38-.51-1.23-.7-1.69c-.19-.46-.38-.4-.51-.41-.13-.01-.28-.01-.42-.01s-.38.05-.57.28c-.19.23-.74.72-.74 1.75s.76 2.03.86 2.17c.1.13 1.5 2.29 3.64 3.21.51.22.91.35 1.23.45.52.16.99.13 1.37.08.42-.06 1.36-.56 1.55-1.1.19-.54.19-1.01.13-1.1-.05-.1-.21-.16-.44-.28z" />
                    </svg>
                    Order on WhatsApp
                  </span>
                </Button>
                {/* <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 flex items-center justify-center"
                >
                  <Share2 className="h-6 w-6" />
                  <span className="sr-only">Share</span>
                </Button> */}
                <Button
                  variant="outline"
                  size="icon"
                  className="h-14 w-14 flex items-center justify-center"
                  onClick={() => {
                    if (navigator.share) {
                      navigator
                        .share({
                          title: product?.name,
                          text: `Check out this product: ${product?.name} at ${product?.discountPrice}`,
                          url: window.location.href,
                        })
                        .catch((error) =>
                          console.error("Error sharing:", error)
                        );
                    } else {
                      alert("Sharing is not supported on this browser.");
                    }
                  }}
                >
                  <Share2 className="h-6 w-6" />
                  <span className="sr-only">Share</span>
                </Button>
              </div>
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
          {product?.youCanAlsoLike?.map((likedProduct: any) => (
            <Link
              href={`/products/${likedProduct.id}`}
              key={likedProduct.id}
              className="group"
            >
              <ProductCard product={likedProduct} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
