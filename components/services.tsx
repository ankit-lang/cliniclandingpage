"use client"

import { useState, useEffect } from "react"
import ServiceCard from "./service-card"
import SoleaServices from "./Service1"
import Service2 from "./Service2"
const serviceCategories = [
  {
    title: "Dental Aesthetics",
    description: "Smile design & enhancement",
    services: [
      "Smile Design & Digital Simulation",
      "Teeth Whitening (Professional)",
      "Veneers & Laminates",
      "Dental Bonding",
      "Crowns & Bridges (Aesthetic)",
      "Full Mouth Makeover",
    ],
    color: "from-accent/20 to-accent/5",
  },
  {
    title: "Facial Aesthetics",
    description: "Non-surgical beauty enhancement",
    services: [
      "Botox for Gummy Smile",
      "Jawline Enhancement",
      "Lip Correction",
      "Anti-wrinkle Treatments",
      "Dermal Fillers",
      "Non-Surgical Face Lift",
    ],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "Skin Treatments",
    description: "Advanced skin care solutions",
    services: [
      "Laser Hair Reduction",
      "Acne & Scar Treatment",
      "Pigmentation Treatment",
      "Melasma & Dark Circle Treatment",
      "Chemical Peels",
      "Microneedling & Derma Roller",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "Hair & Wellness",
    description: "Restoration & rejuvenation",
    services: [
      "PRP for Hair Restoration",
      "GFC for Hair Growth",
      "IV Glutathione Therapy",
      "Vampire Facial / PRP",
      "HIFU Skin Tightening",
      "IPL Skin Rejuvenation",
    ],
    color: "from-accent/20 to-secondary/10",
  },
]

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("services")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
      

        {/* Service Categories Grid */}
        <SoleaServices/>

        {/* Featured Service Detail */}
        <div
          className={`bg-white rounded-3xl mt-4 shadow-lg transition-all duration-500 border border-border ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                {serviceCategories[activeIndex].title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Experience our {serviceCategories[activeIndex].title.toLowerCase()} treatments delivered by our
                experienced professionals using the latest technology and techniques.
              </p>
              <ul className="space-y-3">
                {serviceCategories[activeIndex].services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-accent text-lg mt-1">✓</span>
                    <span className="text-foreground">{service}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-semibold">
                Explore Services
              </button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-secondary/10 rounded-2xl -z-10"></div>
              <img
                src="/premium-aesthetic-treatment-clinic-modern.jpg"
                alt={serviceCategories[activeIndex].title}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
          </div> */}
          <Service2/>
        </div>
      </div>
    </section>
  )
}
