"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-0.5 bg-accent"></div>
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Premium Aesthetic Care
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Transform Your Smile
            </h1>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Discover the art of cosmetic dentistry and advanced aesthetic treatments at Solea. We blend cutting-edge
              technology with personalized care to enhance your natural beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:bg-accent transition-all duration-300 font-semibold hover:shadow-lg">
                Book Consultation
              </button>
              <button className="px-8 py-4 border border-primary text-primary rounded-full hover:bg-primary/5 transition-all duration-300 font-semibold">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 delay-200 ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 rounded-3xl -z-10"></div>
              <img
                src="/luxury-dental-clinic-aesthetic-treatment.jpg"
                alt="Solea Dental Clinic"
                className="w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
