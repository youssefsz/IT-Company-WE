import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and Conditions for TechFlow Solutions - Legal terms governing the use of our services.",
}

export default function TermsPage() {
  return (
    <div className="pt-20 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-slate-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using TechFlow Solutions services, you accept and agree to be bound by the terms and
              provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Services</h2>
            <p className="mb-4">
              TechFlow Solutions provides IT consulting, web development, mobile application development, and related
              technology services. We reserve the right to modify or discontinue services at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-4">
              All content, features, and functionality of our services are owned by TechFlow Solutions and are protected
              by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p>
              For questions about these Terms & Conditions, please contact us at{" "}
              <a href="mailto:legal@techflow-solutions.com" className="text-blue-600 hover:underline">
                legal@techflow-solutions.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
