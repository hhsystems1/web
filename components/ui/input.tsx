import * as React from "react"

import { cn } from "../../lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full min-w-0 rounded-md border border-[#334155] bg-[#0F172A]/50 px-3 py-2 text-base text-[#E6EAF2] placeholder:text-[#94A3B8] backdrop-blur-sm transition-all outline-none focus:border-[#5AE3FF] focus:ring-2 focus:ring-[#5AE3FF]/20 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:border-0 file:bg-transparent file:text-sm file:font-medium",
        className
      )}
      {...props}
    />
  )
}

export { Input }
