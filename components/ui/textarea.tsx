import * as React from "react"

import { cn } from "../../lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-20 w-full rounded-md border border-[#334155] bg-[#0F172A]/50 px-3 py-2 text-base text-[#E6EAF2] placeholder:text-[#94A3B8] backdrop-blur-sm transition-all outline-none focus:border-[#5AE3FF] focus:ring-2 focus:ring-[#5AE3FF]/20 disabled:cursor-not-allowed disabled:opacity-50 resize-none",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
