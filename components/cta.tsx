"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("cta")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="cta"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-accent"></div>
            <span className="text-xs font-semibold tracking-widest text-accent uppercase">Get Started Today</span>
            <div className="w-12 h-0.5 bg-accent"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Ready to Transform?
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Book your personalized consultation with our aesthetic specialists and begin your journey to enhanced beauty
            and confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"https://wa.me/918800003118"} >
            <button className="px-10 py-4 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-semibold text-lg hover:shadow-xl hover:cursor-pointer">
              Book Appointment
            </button>
            </Link>
            <a href="tel:+ 8800003118 " >
            <button className="px-10 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary/5 transition-all duration-300 font-semibold text-lg hover:cursor-pointer
            ">
              Contact Us
            </button>
            </a>
              
          </div>

          {/* <p className="text-muted-foreground text-sm mt-8  ">  <a href="tel:+ 8800003118">Call us:  8800003118</a> </p> */}
        </div>
      </div>
    </section>
  )
}
