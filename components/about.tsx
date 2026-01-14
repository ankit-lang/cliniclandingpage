"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function About() {
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

    const section = document.getElementById("about")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const stats = [
    { number: "500+", label: "Happy Clients" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Expert Team" },
    { number: "100%", label: "Satisfaction" },
  ]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/30 rounded-3xl -z-10 blur-2xl"></div>
              <img src="/2.JPG" alt="Solea Clinic" className="w-full rounded-3xl shadow-2xl" />
            </div>
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">About Solea</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Where Art Meets Science
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Solea represents the pinnacle of aesthetic excellence, combining cutting-edge technology with artistic
              precision. Our team of specialists is dedicated to helping you achieve your beauty goals.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              We believe every client deserves personalized care in a luxurious setting. From initial consultation to
              final results, we ensure an exceptional experience.
            </p>
            <Link href={"https://wa.me/918800003118"} >
            <button  className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-semibold hover:shadow-lg">
              Schedule Your Visit
            </button>
            </Link>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="grid md:grid-cols-4 gap-8 pt-12 border-t border-border">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`text-center transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-accent mb-2">{stat.number}</div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  )
}
