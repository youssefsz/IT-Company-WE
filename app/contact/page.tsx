import { ContactForm } from "@/components/sections/contact-form"
import { ContactInfo } from "@/components/sections/contact-info"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with TechFlow Solutions. Contact us for IT consulting, project inquiries, or to discuss your digital transformation needs.",
  openGraph: {
    title: "Contact Us - TechFlow Solutions",
    description:
      "Get in touch with us for IT consulting, project inquiries, or to discuss your digital transformation needs.",
    url: "https://techflow-solutions.com/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Contact Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Ready to start your next project? We'd love to hear from you. Contact us today to discuss how we can help
              transform your business with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
    </>
  )
}
