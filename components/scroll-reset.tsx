"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollReset() {
  const pathname = usePathname()

  useEffect(() => {
    // Immediately scroll to top when route changes
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
