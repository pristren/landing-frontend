import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";

import { cn } from "@/lib/utils";

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full   rounded-full bg-black ", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full  flex-1 overflow-hidden bg-white  transition-transform duration-1000 ease-[cubic-bezier(0.65, 0, 0.35, 1)] "
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
