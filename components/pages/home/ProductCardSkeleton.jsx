import { Skeleton } from "@/components/ui/skeleton";

const ProductCardSkeleton = () => {
  return (
    <div className="group block rounded-md border shadow-sm bg-white p-2 animate-pulse">
      {/* Image Skeleton */}
      <Skeleton className="relative overflow-hidden rounded-md aspect-[3/4] bg-gray-200 w-full" />

      {/* Content Skeleton */}
      <div className="mt-3 text-start md:text-center px-2">
        <Skeleton className="h-4 bg-gray-300 rounded w-3/4 mx-auto" />
        <Skeleton className="mt-2 h-3 bg-gray-300 rounded w-1/2 mx-auto" />

        {/* Price Skeleton */}
        <div className="mt-2 flex justify-center space-x-2">
          <Skeleton className="h-4 bg-gray-300 rounded w-1/4" />
          <Skeleton className="h-6 bg-gray-300 rounded w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
