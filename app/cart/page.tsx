"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Classic Oversized Tee",
      color: "Black",
      size: "L",
      price: 49.99,
      quantity: 1,
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: "2",
      name: "Urban Boxy Fit",
      color: "White",
      size: "M",
      price: 54.99,
      quantity: 2,
      image: "/placeholder.svg?height=150&width=150",
    },
  ])

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild>
            <Link href="/products">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border-b pb-4 mb-4 hidden md:grid md:grid-cols-6 text-sm font-medium">
              <div className="md:col-span-3">Product</div>
              <div className="text-center">Price</div>
              <div className="text-center">Quantity</div>
              <div className="text-right">Total</div>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="border-b py-6 grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                <div className="md:col-span-3 flex items-center space-x-4">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">
                      <Link href={`/products/${item.id}`} className="hover:underline">
                        {item.name}
                      </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Color: {item.color}</p>
                    <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="mt-2 flex items-center text-sm text-red-500 hover:text-red-700 md:hidden"
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Remove
                    </button>
                  </div>
                </div>

                <div className="text-center">
                  <span className="md:hidden font-medium">Price: </span>${item.price.toFixed(2)}
                </div>

                <div className="flex items-center justify-center">
                  <div className="flex items-center border rounded-md">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2">
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2">
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="text-right flex items-center justify-between md:justify-end">
                  <span className="md:hidden font-medium">Total: </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700 hidden md:block"
                  >
                    <Trash2 className="h-5 w-5" />
                    <span className="sr-only">Remove</span>
                  </button>
                </div>
              </div>
            ))}

            <div className="flex justify-between items-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/products">Continue Shopping</Link>
              </Button>
              <Button onClick={() => setCartItems([])}>Clear Cart</Button>
            </div>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-gray-50 rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-4 flex justify-between font-bold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="coupon" className="block text-sm font-medium mb-2">
                    Coupon Code
                  </label>
                  <div className="flex space-x-2">
                    <Input id="coupon" placeholder="Enter coupon" />
                    <Button variant="outline">Apply</Button>
                  </div>
                </div>

                <Button className="w-full">Proceed to Checkout</Button>

                <div className="text-center text-sm text-gray-500 mt-4">
                  <p>Secure Checkout</p>
                  <p>Free returns within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
