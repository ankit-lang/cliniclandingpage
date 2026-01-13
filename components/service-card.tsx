"use client"

interface ServiceCardProps {
  category: {
    title: string
    description: string
    services: string[]
    color: string
  }
  index: number
  isActive: boolean
  isVisible: boolean
  onClick: () => void
}

export default function ServiceCard({ category, index, isActive, isVisible, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className={`group cursor-pointer transition-all duration-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`h-64 rounded-2xl p-6 flex flex-col justify-end relative overflow-hidden transition-all duration-300 border ${
          isActive
            ? "bg-gradient-to-br from-accent to-accent/80 border-accent text-white shadow-xl scale-105"
            : "bg-gradient-to-br from-card to-muted border-border text-foreground hover:border-accent"
        }`}
      >
        {/* Background decoration */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 ${isActive ? "opacity-10" : ""}`}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 50%, currentColor 0%, transparent 50%)",
          }}
        ></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-serif font-bold mb-2">{category.title}</h3>
          <p className={`text-sm transition-colors ${isActive ? "text-white/90" : "text-muted-foreground"}`}>
            {category.description}
          </p>

          {isActive && (
            <div className="mt-4 pt-4 border-t border-white/20 animate-slide-up">
              <div className="text-xs space-y-2">
                {category.services.slice(0, 3).map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/60"></span>
                    <span className="text-white/80">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
