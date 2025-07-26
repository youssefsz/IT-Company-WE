"use client"

import { motion } from "framer-motion"

export function AboutHero() {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            About <span className="text-blue-600">TechFlow Solutions</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            We are a team of passionate technologists dedicated to helping businesses harness the power of technology to
            achieve their goals and drive innovation.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
