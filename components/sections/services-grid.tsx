"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, Settings, Database, Shield, Monitor, Zap, Users, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks like React, Next.js, and Vue.js. We create responsive, fast, and SEO-optimized websites that drive results.",
    features: ["Responsive Design", "SEO Optimization", "Performance Tuning", "Modern Frameworks"],
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter. From concept to App Store deployment.",
    features: ["iOS & Android", "Cross-Platform", "App Store Deployment", "Push Notifications"],
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure on AWS, Google Cloud, and Azure. Migration, optimization, and management of cloud resources for maximum efficiency.",
    features: ["Cloud Migration", "Auto Scaling", "Cost Optimization", "24/7 Monitoring"],
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Settings,
    title: "DevOps & Automation",
    description:
      "Streamline your development process with CI/CD pipelines, automated testing, and infrastructure as code. Faster deployments, fewer errors.",
    features: ["CI/CD Pipelines", "Automated Testing", "Infrastructure as Code", "Monitoring"],
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    description:
      "Transform your data into actionable insights with custom dashboards, reporting systems, and machine learning solutions.",
    features: ["Custom Dashboards", "Real-time Analytics", "Machine Learning", "Data Visualization"],
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Comprehensive security solutions to protect your digital assets. Security audits, penetration testing, and compliance management.",
    features: ["Security Audits", "Penetration Testing", "Compliance", "Threat Monitoring"],
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Monitor,
    title: "UI/UX Design",
    description:
      "User-centered design that creates intuitive and engaging digital experiences. From wireframes to high-fidelity prototypes.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    color: "bg-pink-100 text-pink-600",
  },
  {
    icon: Zap,
    title: "Digital Transformation",
    description:
      "End-to-end digital transformation consulting to modernize your business processes and technology stack.",
    features: ["Process Automation", "Legacy Modernization", "Change Management", "Training"],
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Users,
    title: "IT Consulting",
    description:
      "Strategic IT consulting to align technology with your business goals. Architecture planning, technology selection, and roadmap development.",
    features: ["Technology Strategy", "Architecture Planning", "Vendor Selection", "Roadmap Development"],
    color: "bg-teal-100 text-teal-600",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 mb-4">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
