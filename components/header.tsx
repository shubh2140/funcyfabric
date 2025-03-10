"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-10">
              <Link href="/" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Home
              </Link>
              <Link href="/products?product=men" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Men
              </Link>
              <Link href="/products?product=women" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Women
              </Link>
              <Link href="/products" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Accessories
              </Link>
              <Link href="/about" className="text-lg font-medium hover:text-gray-600 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-lg font-medium hover:text-gray-600 transition-colors">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold">FUNCY FABRIC</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
            HOME
          </Link>
          <Link href="/products?product=men" className="text-sm font-medium hover:text-gray-600 transition-colors">
            MEN
          </Link>
          <Link href="/products?product=women" className="text-sm font-medium hover:text-gray-600 transition-colors">
            WOMEN
          </Link>
          <Link href="/products" className="text-sm font-medium hover:text-gray-600 transition-colors">
            ACCESSORIES
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="fixed inset-0 bg-white z-50 flex items-center p-4">
              <div className="container mx-auto flex items-center">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="flex-1 border-b-2 border-black py-2 px-4 text-lg focus:outline-none"
                  autoFocus
                />
                <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
                  <X className="h-6 w-6" />
                </Button>
              </div>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Link href="/account">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                3
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
