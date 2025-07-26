"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Clock, Linkedin, Twitter, Download, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Contact Information */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Contact Information</h3>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-slate-900">Email</p>
                <a
                  href="mailto:contact@techflow-solutions.com"
                  className="text-slate-600 hover:text-blue-600 transition-colors"
                >
                  contact@techflow-solutions.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Phone className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-slate-900">Phone</p>
                <a href="tel:+1-555-0123" className="text-slate-600 hover:text-blue-600 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-slate-900">Address</p>
                <p className="text-slate-600">
                  123 Tech Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-slate-900">Business Hours</p>
                <p className="text-slate-600">
                  Monday - Friday: 9:00 AM - 6:00 PM PST
                  <br />
                  Saturday: 10:00 AM - 4:00 PM PST
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Quick Actions</h3>

          <div className="space-y-3">
            <Button asChild className="w-full justify-start bg-transparent" variant="outline">
              <a href="tel:+1-555-0123">
                <Phone className="mr-2 h-4 w-4" />
                Schedule a Call
              </a>
            </Button>

            <Button asChild className="w-full justify-start bg-transparent" variant="outline">
              <a href="mailto:contact@techflow-solutions.com">
                <MessageCircle className="mr-2 h-4 w-4" />
                Live Chat Support
              </a>
            </Button>

            <Button asChild className="w-full justify-start bg-transparent" variant="outline">
              <a href="/company-profile.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Company Profile
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Social Media */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Follow Us</h3>

          <div className="flex space-x-4">
            <Button size="sm" variant="outline" asChild>
              <a href="https://linkedin.com/company/techflow-solutions" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="https://twitter.com/techflowsolutions" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Map Placeholder */}
      <Card>
        <CardContent className="p-0">
          <div className="h-64 bg-slate-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-slate-400 mx-auto mb-2" />
              <p className="text-slate-500">Interactive Map</p>
              <p className="text-sm text-slate-400">San Francisco, CA</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <Card className="border-red-200 bg-red-50">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-red-900 mb-2">Emergency Support</h3>
          <p className="text-red-700 text-sm mb-3">For critical system issues outside business hours</p>
          <Button size="sm" variant="destructive" asChild>
            <a href="tel:+1-555-0199">
              <Phone className="mr-2 h-3 w-3" />
              Emergency Line: +1 (555) 019-9999
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
