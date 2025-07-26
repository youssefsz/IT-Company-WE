import { Hero } from "@/components/sections/hero"
import { AboutPreview } from "@/components/sections/about-preview"
import { ServicesPreview } from "@/components/sections/services-preview"
import { ProjectsPreview } from "@/components/sections/projects-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { Partners } from "@/components/sections/partners"
import { ContactCTA } from "@/components/sections/contact-cta"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Home",
  description:
    "TechFlow Solutions - Your trusted partner for innovative IT services, web development, mobile applications, and digital transformation solutions.",
  openGraph: {
    title: "TechFlow Solutions - Professional IT Services & Digital Solutions",
    description:
      "Your trusted partner for innovative IT services, web development, mobile applications, and digital transformation solutions.",
    url: "https://techflow-solutions.com",
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <ProjectsPreview />
      <Testimonials />
      <Partners />
      <ContactCTA />
    </>
  )
}
