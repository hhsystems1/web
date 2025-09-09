import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:outline-2 focus-visible:outline-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#5AE3FF] to-[#9B8CFF] text-[#070A12] font-semibold hover:from-[#4DD8F7] hover:to-[#8F7FFF] hover:shadow-lg hover:-translate-y-0.5",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-600",
        outline:
          "border border-[#5AE3FF]/30 bg-[#0D1321]/50 text-[#E6EAF2] hover:bg-[#5AE3FF]/10 hover:border-[#5AE3FF]/50 backdrop-blur-sm",
        secondary:
          "bg-[#0F172A] text-[#E6EAF2] hover:bg-[#1E293B] border border-[#334155]",
        ghost:
          "text-[#E6EAF2] hover:bg-[#5AE3FF]/10 hover:text-[#5AE3FF]",
        link: "text-[#5AE3FF] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
