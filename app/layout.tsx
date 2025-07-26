import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/navigation"
import { Footer } from "@/components/layout/footer"
import { Providers } from "@/components/providers"
import { ScrollReset } from "@/components/scroll-reset"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "TechFlow Solutions - Professional IT Services & Digital Solutions",
    template: "%s | TechFlow Solutions",
  },
  description:
    "Leading IT company providing web development, mobile apps, cloud solutions, and digital transformation services. Expert team delivering innovative technology solutions for businesses.",
  keywords: [
    "IT services",
    "web development",
    "mobile apps",
    "cloud solutions",
    "digital transformation",
    "software development",
  ],
  authors: [{ name: "TechFlow Solutions" }],
  creator: "TechFlow Solutions",
  publisher: "TechFlow Solutions",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://techflow-solutions.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techflow-solutions.com",
    title: "TechFlow Solutions - Professional IT Services & Digital Solutions",
    description:
      "Leading IT company providing web development, mobile apps, cloud solutions, and digital transformation services.",
    siteName: "TechFlow Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechFlow Solutions - IT Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFlow Solutions - Professional IT Services",
    description: "Leading IT company providing innovative technology solutions for businesses.",
    images: ["/og-image.jpg"],
    creator: "@techflowsolutions",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechFlow Solutions",
              description:
                "Leading IT company providing web development, mobile apps, cloud solutions, and digital transformation services.",
              url: "https://techflow-solutions.com",
              logo: "https://techflow-solutions.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-0123",
                contactType: "customer service",
                email: "contact@techflow-solutions.com",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Street",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                postalCode: "94105",
                addressCountry: "US",
              },
              sameAs: ["https://linkedin.com/company/techflow-solutions", "https://twitter.com/techflowsolutions"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <ScrollReset />
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1 pt-16">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
