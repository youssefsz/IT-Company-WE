"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const categories = ["All", "Web Development", "Mobile Apps", "Cloud Solutions", "E-commerce", "Healthcare"]

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with advanced features including real-time inventory, payment processing, and analytics dashboard.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    category: "E-commerce",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    results: ["300% increase in sales", "50% faster page load", "99.9% uptime"],
  },
  {
    title: "Healthcare Management System",
    description:
      "Comprehensive patient management system with telemedicine capabilities, appointment scheduling, and medical records.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    category: "Healthcare",
    technologies: ["React Native", "Firebase", "WebRTC", "HIPAA Compliant"],
    liveUrl: "#",
    githubUrl: "#",
    results: ["10,000+ patients managed", "40% reduction in wait times", "HIPAA compliant"],
  },
  {
    title: "Cloud Migration Project",
    description:
      "Enterprise cloud migration from on-premises to AWS with improved scalability, security, and cost optimization.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    category: "Cloud Solutions",
    technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
    liveUrl: "#",
    githubUrl: "#",
    results: ["60% cost reduction", "99.9% uptime", "Auto-scaling enabled"],
  },
  {
    title: "Financial Dashboard",
    description:
      "Real-time financial analytics dashboard with advanced reporting, data visualization, and automated insights.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "Web Development",
    technologies: ["Vue.js", "Python", "PostgreSQL", "D3.js"],
    liveUrl: "#",
    githubUrl: "#",
    results: ["Real-time data processing", "Custom analytics", "Automated reporting"],
  },
  {
    title: "Food Delivery App",
    description:
      "Cross-platform mobile app for food delivery with real-time tracking, payment integration, and restaurant management.",
    image:
      "https://images.unsplash.com/photo-1526367790999-0150786686a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    category: "Mobile Apps",
    technologies: ["Flutter", "Firebase", "Google Maps", "Payment Gateway"],
    liveUrl: "#",
    githubUrl: "#",
    results: ["50,000+ downloads", "4.8 star rating", "Real-time tracking"],
  },
  {
    title: "Learning Management System",
    description:
      "Comprehensive LMS with video streaming, interactive quizzes, progress tracking, and certification management.",
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    category: "Web Development",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Video.js"],
    liveUrl: "#",
    githubUrl: "#",
    results: ["1,000+ courses", "Video streaming", "Progress tracking"],
  },
]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-slate-800 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                      <Button size="sm" variant="secondary" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                  <p className="text-slate-600 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result) => (
                        <li key={result} className="flex items-center text-sm text-slate-600">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
