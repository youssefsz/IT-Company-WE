"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Search, Lightbulb, Code2, Rocket } from "lucide-react"
import { motion } from "framer-motion"

const processSteps = [
  {
    icon: Search,
    title: "Discovery & Analysis",
    description:
      "We start by understanding your business goals, challenges, and requirements through detailed consultation and analysis.",
    step: "01",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description:
      "Our team develops a comprehensive strategy and project roadmap tailored to your specific needs and objectives.",
    step: "02",
  },
  {
    icon: Code2,
    title: "Development & Implementation",
    description:
      "We build your solution using best practices, modern technologies, and agile methodologies for optimal results.",
    step: "03",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    description:
      "After thorough testing, we launch your solution and provide ongoing support and maintenance to ensure success.",
    step: "04",
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We follow a proven methodology to ensure your project is delivered on time, within budget, and exceeds
            expectations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </CardContent>
              </Card>

              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-slate-300 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
