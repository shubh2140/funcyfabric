// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import "./globals.css"
// import Header from "@/components/header"
// import Footer from "@/components/footer"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Funcy Fabric | Premium Oversized T-shirts",
//   description: "Experience comfort and style with Funcy Fabric's premium oversized t-shirts",
//     generator: 'v0.dev'
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   )
// }



// import './globals.css'

import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Funcy Fabric | Premium Oversized T-shirts",
  description: "Experience comfort and style with Funcy Fabric's premium oversized t-shirts",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import './globals.css'
