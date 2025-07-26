"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function ContactCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and explore how we can help you achieve your goals with innovative technology
            solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" variant="secondary" asChild className="group">
              <Link href="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              <Link href="tel:+1-555-0123">
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-2xl font-bold mb-2">Free Consultation</div>
              <div className="text-blue-100">Get expert advice for your project</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">24/7 Support</div>
              <div className="text-blue-100">Round-the-clock technical assistance</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Quick Response</div>
              <div className="text-blue-100">We respond within 2 hours</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
