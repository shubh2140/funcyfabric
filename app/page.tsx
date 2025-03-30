"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCardSkeleton from "@/components/pages/home/ProductCardSkeleton";
import ProductCard from "@/components/pages/home/ProductCard";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import allImages from "../data/allProduct.json";

export default function Home() {
  const [newArrivals, setNewArrivals] = useState([] as any);
  const [featureProducts, setFeatureProducts] = useState([] as any);
  const [menProducts, setMenProducts] = useState([] as any);
  const [womenProducts, setWomenProducts] = useState([] as any);
  const [newArrivalsLoading, setNewArrivalsLoading] = useState(true);
  const [featureLoading, setFeatureLoading] = useState(true);

  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Submitted");
    setEmail(""); // Clear input field
  };

  useEffect(() => {
    if (!allImages || allImages.length === 0) return; // Prevent running on empty data

    setNewArrivals(allImages.filter((item) => item.isNew));
    setFeatureProducts(allImages.filter((item) => item.isFeature));
    setMenProducts(allImages.filter((item) => item.category === "Men"));
    setWomenProducts(allImages.filter((item) => item.category === "Women"));
  }, [allImages]);

  const heroImages = [
    { desktop: "/home-cover-pc-1.jpg", mobile: "/home-cover-mobile-1.jpg" },
    { desktop: "/home-cover-pc-2.jpg", mobile: "/home-cover-mobile-2.jpg" },
    { desktop: "/home-cover-pc-3.jpg", mobile: "/home-cover-mobile-3.jpg" },
    { desktop: "/home-cover-pc-4.jpg", mobile: "/home-cover-mobile-4.jpg" },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-10 md:pb-20">
      {/* Hero Section */}
      <section className="relative h-[647px] mx-auto w-full">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          className="w-full h-full text-black"
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-[647px] w-full">
                {/* Image for md and larger screens */}
                <Image
                  src={image.desktop}
                  alt={`Hero Image ${index + 1}`}
                  fill
                  className="object-cover hidden md:block"
                />

                {/* Image for mobile screens */}
                <Image
                  src={image.mobile}
                  alt={`Hero Image ${index + 1}`}
                  fill
                  className="object-cover block md:hidden"
                />
              </div>
            </SwiperSlide>

          ))}
        </Swiper>


      </section>

      <section className="pt-8 px-2 md:px-12 lg:px-24 bg-white">
        <div className="flex justify-between items-center mb-4 md:mb-8 lg:mb-8">
          <h2 className="text-md md:text-3xl font-bold">NEW ARRIVALS</h2>
          <Link
            href="/products?product=new-arrival"
            className="flex items-center text-sm font-medium hover:underline"
          >
            VIEW ALL <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-6 xl:gap-6 gap-2">
          {newArrivals && newArrivals.length > 0
            ? newArrivals
              .slice(0, 4)
              .map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            : [...Array(4)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>
      </section>

      {/* Featured Collection */}
      {featureProducts && featureProducts.length > 0 && <section className="pt-8 px-2 md:px-12 lg:px-24 bg-white">
        <div className="flex justify-between items-center mb-4 md:mb-8 lg:mb-8">
          <h2 className="text-md md:text-3xl font-bold">FEATURED COLLECTION</h2>
          <Link
            href="/products?product=feature"
            className="flex items-center text-sm font-medium hover:underline"
          >
            VIEW ALL <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-6 xl:gap-6 gap-2">
          {featureProducts && featureProducts.length > 0
            ? featureProducts
              .slice(0, 4)
              .map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            : [...Array(4)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>
      </section>}

      {menProducts && menProducts.length > 0 && <section className="pt-8 px-2 md:px-12 lg:px-24 bg-white">
        <div className="flex justify-between items-center mb-4 md:mb-8 lg:mb-8">
          <h2 className="text-md md:text-3xl font-bold">MENS COLLECTION</h2>
          <Link
            href="/products?product=men"
            className="flex items-center text-sm font-medium hover:underline"
          >
            VIEW ALL <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-6 xl:gap-6 gap-2">
          {menProducts && menProducts.length > 0
            ? menProducts
              .slice(0, 4)
              .map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            : [...Array(4)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>
      </section>}

      {womenProducts && womenProducts.length > 0 && <section className="pt-8 px-2 md:px-12 lg:px-24 bg-white">
        <div className="flex justify-between items-center mb-4 md:mb-8 lg:mb-8">
          <h2 className="text-md md:text-3xl font-bold">WOMEN COLLECTION</h2>
          <Link
            href="/products?product=women"
            className="flex items-center text-sm font-medium hover:underline"
          >
            VIEW ALL <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-6 xl:gap-6 gap-2">
          {womenProducts && womenProducts.length > 0
            ? menProducts
              .slice(0, 4)
              .map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            : [...Array(4)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
        </div>
      </section>}

      {/* Brand Story */}
      {/* <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Funcy Fabric was born from a passion for comfort and style. We
              believe that clothing should be an expression of individuality,
              and our oversized t-shirts provide the perfect canvas for
              self-expression.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Each piece is crafted with premium materials and attention to
              detail, ensuring that you not only look good but feel good too.
              Our commitment to quality and sustainability drives everything we
              do.
            </p>
            <Button
              variant="outline"
              className="border-black text-black px-6 py-2 rounded-lg transition-all hover:bg-black hover:text-white"
            >
              Learn More
            </Button>
          </div>
          <div className="relative w-full h-80 md:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/my-journey.jpg"
              alt="Brand Story"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* Categories */}
      {/* <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <h2 className="text-xl md:text-3xl font-bold mb-8 text-center">
          SHOP BY CATEGORY
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/products?product=${category.slug}`}
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
                <h3 className="text-white text-md md:text-2xl xl:text-2xl font-bold">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section> */}
      

      {/* Newsletter */}
      {/* <section className="py-16 px-6 md:px-12 lg:px-24 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            JOIN THE FUNCY FABRIC FAMILY
          </h2>
          <p className="mb-8">
            Subscribe to our newsletter for exclusive offers, new releases, and
            more.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <Button
              type="submit"
              className="bg-white text-black hover:bg-white/90"
            >
              SUBSCRIBE
            </Button>
          </form>
        </div>
      </section> */}
    </div>
  );
}

const categories = [
  {
    name: "MEN",
    slug: "men",
    image: "/men.jpg",
  },
  {
    name: "WOMEN",
    slug: "women",
    image: "/women.jpg",
  },
  {
    name: "All",
    slug: "all",
    image: "/all.jpg",
  },
];
