// import Image from "next/image";
// import Link from "next/link";

// const ProductCard = ({ product }: any) => {
//   const hasDiscount =
//     product.discountPrice && product.discountPrice < product.price;
//   const discountPercentage = hasDiscount
//     ? Math.round(
//         ((product.price - product.discountPrice) / product.price) * 100
//       )
//     : 0;

//   return (
//     <Link href={`/products/${product.id}`} className="group">
//       <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 rounded-xl shadow-md transition-all duration-300 hover:shadow-lg">
//         <Image
//           src={product.image || "/placeholder.svg"}
//           alt={product.name}
//           fill
//           className="object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         {product.isNew && (
//           <div className="absolute top-2 left-2 bg-black text-white text-xs px-3 py-1 rounded-full">
//             NEW
//           </div>
//         )}
//         {hasDiscount && (
//           <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
//             -{discountPercentage}%
//           </div>
//         )}
//       </div>
//       <h3 className="font-medium text-lg mt-2">{product.name}</h3>
//       <p className="text-gray-600 text-sm">{product.category}</p>
//       <div className="mt-1 flex items-center space-x-2">
//         {hasDiscount ? (
//           <>
//             <span className="text-gray-500 line-through text-sm">
//               {product.price}
//             </span>
//             <span className="font-bold text-red-500 text-lg">
//               {product.discountPrice}
//             </span>
//           </>
//         ) : (
//           <span className="font-bold text-lg">{product.price}</span>
//         )}
//       </div>
//     </Link>
//   );
// };

// export default ProductCard;

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const ProductCard = ({ product }: any) => {
  const hasDiscount =
    product.discountPrice && product.discountPrice < product.price;
  const discountPercentage = hasDiscount
    ? Math.round(
        ((product.price - product.discountPrice) / product.price) * 100
      )
    : 0;

  return (
    <Link
      href={`/products/${product.id}`}
      className="group block rounded-md border shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
    >
      <div className="relative overflow-hidden rounded-t-md aspect-[3/4] bg-gray-100">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          // fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
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
      <div className="mt-1 md:mt-3 lg:mt-3 xl:mt-3 text-start md:text-center lg:text-center xl:text-center px-2 md:px-0 lg:px-0 xl:px-0">
        <h3 className="font-bold text-xs md:text-lg lg:text-lg xl:text-lg text-gray-900">
          {product.name}
        </h3>
        <p className="mt-2 md:mt-0 lg:mt-0 xl:mt-0 text-[12px] md:text-sm lg:text-sm xl:text-sm flex md:flex-col xl:flex-col lg:flex-col text-gray-500">
          {product.category}
        </p>
        <div className="md:mt-2 lg:mt-2 xl:mt-2 flex md:justify-center lg:justify-center xl:justify-center md:items-center lg:items-center xl:items-center space-x-2 text-[12px] md:text-sm lg:text-sm xl:text-sm">
          {hasDiscount ? (
            <>
              <span className="text-gray-400 line-through text-[12px] md:text-sm lg:text-sm xl:text-sm">
                ₹{product.price}
              </span>
              <span className="text-red-500 font-bold text-sm md:text-lg lg:text-lg xl:text-lg">
                ₹{product.discountPrice}
              </span>
            </>
          ) : (
            <span className="font-bold text-lg text-gray-900">
              ₹{product.price}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
