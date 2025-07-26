"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Shield, Users, Zap, Award, Heart } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We embrace cutting-edge technologies and creative solutions to solve complex challenges.",
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We conduct business with honesty, transparency, and ethical practices in all our interactions.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and building strong partnerships with our clients.",
    color: "bg-green-100 text-green-600",
  },
  {
    icon: Zap,
    title: "Excellence",
    description: "We strive for the highest quality in everything we do, exceeding expectations consistently.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: Award,
    title: "Client Success",
    description: "Our success is measured by the success of our clients and their business outcomes.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We are passionate about technology and committed to making a positive impact.",
    color: "bg-red-100 text-red-600",
  },
]

export function Values() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            These values guide our decisions, shape our culture, and define how we work with our clients and each other.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
