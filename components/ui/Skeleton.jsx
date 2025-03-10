import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils"; // Utility function for class merging

const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <Slot
    ref={ref}
    className={cn("animate-pulse bg-gray-200 rounded", className)}
    {...props}
  />
));

Skeleton.displayName = "Skeleton";

export { Skeleton };
