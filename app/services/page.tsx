import { ServicesHero } from "@/components/sections/services-hero"
import { ServicesGrid } from "@/components/sections/services-grid"
import { ProcessSection } from "@/components/sections/process-section"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive IT services including web development, mobile applications, cloud solutions, DevOps, and digital transformation consulting.",
  openGraph: {
    title: "Services - TechFlow Solutions",
    description:
      "Comprehensive IT services including web development, mobile applications, cloud solutions, and digital transformation.",
    url: "https://techflow-solutions.com/services",
  },
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
    </>
  )
}
