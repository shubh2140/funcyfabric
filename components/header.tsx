// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { Menu, Search, ShoppingBag, User, X } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

// export default function Header() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 bg-white border-b">
//       <div className="container mx-auto px-4 flex h-16 items-center justify-between">
//         {/* Mobile Menu */}
//         <Sheet>
//           <SheetTrigger asChild>
//             <Button variant="ghost" size="icon" className="md:hidden">
//               <Menu className="h-6 w-6" />
//               <span className="sr-only">Open menu</span>
//             </Button>
//           </SheetTrigger>
//           <SheetContent side="left" className="w-[300px] sm:w-[400px]">
//             <nav className="flex flex-col gap-6 mt-10">
//               <Link href="/" className="text-lg font-medium hover:text-gray-600 transition-colors">
//                 Home
//               </Link>
//               <Link href="/products?product=men" className="text-lg font-medium hover:text-gray-600 transition-colors">
//                 Men
//               </Link>
//               <Link href="/products?product=women" className="text-lg font-medium hover:text-gray-600 transition-colors">
//                 Women
//               </Link>
//               <Link href="/products?product=all" className="text-lg font-medium hover:text-gray-600 transition-colors">
//                 All
//               </Link>
//               <Link href="/about" className="text-lg font-medium hover:text-gray-600 transition-colors">
//                 About
//               </Link>
//               <Link href="/contact" className="text-lg font-medium hover:text-gray-600 transition-colors">
//                 Contact
//               </Link>
//             </nav>
//           </SheetContent>
//         </Sheet>

//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <span className="text-xl font-bold">FUNCY FABRIC</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-8">
//           <Link href="/" className="text-sm font-medium hover:text-gray-600 transition-colors">
//             HOME
//           </Link>
//           <Link href="/products?product=men" className="text-sm font-medium hover:text-gray-600 transition-colors">
//             MEN
//           </Link>
//           <Link href="/products?product=women" className="text-sm font-medium hover:text-gray-600 transition-colors">
//             WOMEN
//           </Link>
//           <Link href="/products?product=all" className="text-sm font-medium hover:text-gray-600 transition-colors">
//             ALL
//           </Link>
//           <Link href="/about" className="text-sm font-medium hover:text-gray-600 transition-colors">
//             ABOUT
//           </Link>
//           <Link href="/contact" className="text-sm font-medium hover:text-gray-600 transition-colors">
//             CONTACT
//           </Link>
//         </nav>

//         {/* Actions */}
//         <div className="flex items-center space-x-4">
//           {isSearchOpen ? (
//             <div className="fixed inset-0 bg-white z-50 flex items-center p-4">
//               <div className="container mx-auto flex items-center">
//                 <input
//                   type="search"
//                   placeholder="Search products..."
//                   className="flex-1 border-b-2 border-black py-2 px-4 text-lg focus:outline-none"
//                   autoFocus
//                 />
//                 <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)} className="ml-2">
//                   <X className="h-6 w-6" />
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
//               <Search className="h-5 w-5" />
//               <span className="sr-only">Search</span>
//             </Button>
//           )}
//           <Link href="/account">
//             <Button variant="ghost" size="icon">
//               <User className="h-5 w-5" />
//               <span className="sr-only">Account</span>
//             </Button>
//           </Link>
//           <Link href="/cart">
//             <Button variant="ghost" size="icon" className="relative">
//               <ShoppingBag className="h-5 w-5" />
//               <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
//                 3
//               </span>
//               <span className="sr-only">Cart</span>
//             </Button>
//           </Link>
//         </div>
//       </div>
//     </header>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingBag, User, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

export default function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Function to load cart count from localStorage
    const loadCartCount = () => {
      const storedCart = localStorage.getItem("cart");
      const cartItems = storedCart ? JSON.parse(storedCart) : [];
      setCartCount(cartItems.length);
    };

    loadCartCount();

    // Listen for storage updates (for when cart updates from other components)
    const handleStorageChange = () => {
      loadCartCount();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
              <Link
                href="/"
                className="text-lg font-medium hover:text-gray-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products?product=men"
                className="text-lg font-medium hover:text-gray-600 transition-colors"
              >
                Men
              </Link>
              <Link
                href="/products?product=women"
                className="text-lg font-medium hover:text-gray-600 transition-colors"
              >
                Women
              </Link>
              <Link
                href="/products?product=all"
                className="text-lg font-medium hover:text-gray-600 transition-colors"
              >
                All
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium hover:text-gray-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-lg font-medium hover:text-gray-600 transition-colors"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Logo */}
        <Link href="/" className="h-28 pl-4 md:pl-0 flex items-center">
          <img
            src="/logo.svg"
            alt="FUNCY FABRIC Logo"
            className="w-full h-full object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            HOME
          </Link>
          <Link
            href="/products?product=men"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            MEN
          </Link>
          <Link
            href="/products?product=women"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            WOMEN
          </Link>
          <Link
            href="/products?product=all"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            ALL
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            CONTACT
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center md:space-x-4 space-x-2">
          <a
            href="https://www.instagram.com/funcyfabric" // Replace with your Instagram link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 text-black transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>

          <a
            href="https://wa.me/91990297151" // Replace with your actual WhatsApp number
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-600 text-black transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12c0 2.21.72 4.26 1.96 5.96L2 22l4.27-1.13A9.962 9.962 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.82 0-3.53-.5-5-1.35l-.35-.21-2.53.67.67-2.46-.22-.36A7.92 7.92 0 014 12c0-4.41 3.59-8 8-8s8 3.59 8 8-3.59 8-8 8zm4.13-5.17c-.23-.12-1.36-.67-1.57-.74s-.36-.12-.51.12-.58.74-.72.89-.26.17-.49.05c-.23-.12-.95-.35-1.8-1.1a6.767 6.767 0 01-1.25-1.55c-.13-.23-.01-.36.1-.48.11-.11.23-.26.35-.38.12-.13.16-.23.24-.38s.04-.28-.02-.38-.51-1.23-.7-1.69c-.19-.46-.38-.4-.51-.41-.13-.01-.28-.01-.42-.01s-.38.05-.57.28c-.19.23-.74.72-.74 1.75s.76 2.03.86 2.17c.1.13 1.5 2.29 3.64 3.21.51.22.91.35 1.23.45.52.16.99.13 1.37.08.42-.06 1.36-.56 1.55-1.1.19-.54.19-1.01.13-1.1-.05-.1-.21-.16-.44-.28z" />
            </svg>
          </a>
          {/* <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-white text-[10px] flex items-center justify-center">
                  {cartCount}
                </span>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link> */}
        </div>
      </div>
    </header>
  );
}
