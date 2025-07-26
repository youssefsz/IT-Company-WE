import { AboutHero } from "@/components/sections/about-hero"
import { Mission } from "@/components/sections/mission"
import { Team } from "@/components/sections/team"
import { Values } from "@/components/sections/values"
import { Timeline } from "@/components/sections/timeline"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about TechFlow Solutions - our mission, vision, expert team, and commitment to delivering exceptional IT services and digital solutions.",
  openGraph: {
    title: "About Us - TechFlow Solutions",
    description: "Learn about our mission, vision, expert team, and commitment to delivering exceptional IT services.",
    url: "https://techflow-solutions.com/about",
  },
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Mission />
      <Team />
      <Values />
      <Timeline />
    </>
  )
}
