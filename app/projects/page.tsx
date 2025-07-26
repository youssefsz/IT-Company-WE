import { ProjectsHero } from "@/components/sections/projects-hero"
import { ProjectsGrid } from "@/components/sections/projects-grid"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore our portfolio of successful IT projects, web applications, mobile apps, and digital solutions delivered for clients worldwide.",
  openGraph: {
    title: "Projects - TechFlow Solutions",
    description:
      "Explore our portfolio of successful IT projects and digital solutions delivered for clients worldwide.",
    url: "https://techflow-solutions.com/projects",
  },
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGrid />
    </>
  )
}
