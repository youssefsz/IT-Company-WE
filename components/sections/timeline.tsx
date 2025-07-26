"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Award, Globe } from "lucide-react"
import { motion } from "framer-motion"

const timelineEvents = [
  {
    year: "2014",
    title: "Company Founded",
    description: "TechFlow Solutions was established with a vision to transform businesses through technology.",
    icon: Calendar,
    color: "bg-blue-600",
  },
  {
    year: "2016",
    title: "Team Expansion",
    description: "Grew to 20+ team members and established our core service offerings.",
    icon: Users,
    color: "bg-green-600",
  },
  {
    year: "2018",
    title: "Industry Recognition",
    description: "Received 'Best IT Services Company' award and completed 100+ projects.",
    icon: Award,
    color: "bg-purple-600",
  },
  {
    year: "2020",
    title: "Global Reach",
    description: "Expanded internationally and launched cloud transformation services.",
    icon: Globe,
    color: "bg-orange-600",
  },
  {
    year: "2024",
    title: "Innovation Leader",
    description: "Leading the industry with AI/ML solutions and 500+ successful projects.",
    icon: Award,
    color: "bg-red-600",
  },
]

export function Timeline() {
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
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A decade of growth, innovation, and success in delivering exceptional technology solutions.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-slate-200 hidden lg:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex-col lg:space-x-8`}
              >
                <div className="flex-1 lg:max-w-md">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 ${event.color} rounded-full flex items-center justify-center mr-4`}>
                          <event.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-900">{event.year}</div>
                          <div className="text-lg font-semibold text-slate-700">{event.title}</div>
                        </div>
                      </div>
                      <p className="text-slate-600">{event.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10 hidden lg:block">
                  <div className={`w-4 h-4 ${event.color} rounded-full border-4 border-white shadow-lg`} />
                </div>

                <div className="flex-1 lg:max-w-md" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
