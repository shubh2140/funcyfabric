"use client";
import { useEffect, useState } from "react";
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
import ProductCardSkeleton from "@/components/pages/home/ProductCardSkeleton";
import ProductCard from "@/components/pages/home/ProductCard";
import { useSearchParams } from "next/navigation";
import allProducts from "../../../data/allProduct.json";

export default function ProductsPageContent() {
  const [sortBy, setSortBy] = useState(""); // State for sorting option
  const searchParams = useSearchParams();

  const [filterProduct, setFilterProduct] = useState([] as any);

  // Function to sort products
  const sortedProducts = [...filterProduct].sort((a: any, b: any) => {
    if (sortBy === "newest") return b.isNew - a.isNew;
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "popular") return 0; // Placeholder for popularity sorting
    return 0;
  });

  // useEffect(() => {
  //   if (searchParams.get("product") == "new-arrival") {
  //     setFilterProduct(allProducts.filter((item) => item.isNew));
  //   }
  //   if (searchParams.get("product") == "feature") {
  //     setFilterProduct(allProducts.filter((item) => !item.isNew));
  //   }
  //   if (searchParams.get("product") == "men") {
  //     setFilterProduct(allProducts.filter((item) => item.category === "Men"));
  //   }
  //   if (searchParams.get("product") == "women") {
  //     setFilterProduct(allProducts.filter((item) => item.category === "Women"));
  //   }
  //   if (searchParams.get("product") == "all") {
  //     setFilterProduct(allProducts);
  //   }
  // }, [searchParams]);

  useEffect(() => {
    if (!searchParams) return; // Ensure searchParams is available before accessing it

    const productType = searchParams.get("product");

    switch (productType) {
      case "new-arrival":
        setFilterProduct(allProducts.filter((item) => item.isNew));
        break;
      case "feature":
        setFilterProduct(allProducts.filter((item) => !item.isNew));
        break;
      case "men":
        setFilterProduct(allProducts.filter((item) => item.category === "Men"));
        break;
      case "women":
        setFilterProduct(
          allProducts.filter((item) => item.category === "Women")
        );
        break;
      case "all":
      default:
        setFilterProduct(allProducts);
        break;
    }
  }, [searchParams]);

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
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-6 xl:gap-6 gap-2">
          {filterProduct && filterProduct.length > 0
            ? filterProduct.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            : [...Array(4)].map((_, index) => (
                <ProductCardSkeleton key={index} />
              ))}
        </div>
      </div>
    </div>
  );
}
