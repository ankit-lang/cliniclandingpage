export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ["Dental Aesthetics", "Facial Treatments", "Skin Care", "Hair Solutions"],
    Company: ["About Us", "Testimonials", ],
    // Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  }

  return (
    <footer className="bg-foreground text-background pt-20 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold tracking-wider mb-1">SOLEA</h3>
              <p className="text-xs tracking-widest text-background/70 uppercase">Aesthetic Clinic</p>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Premium aesthetic and dental treatments for the discerning individual.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-lg mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-background/80 hover:text-background transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/70 text-sm">© {currentYear} Solea Aesthetic Clinic. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://www.instagram.com/solea.aesthetics?igsh=Mzl3bTNzOGRybGk5" className="text-background/70 hover:text-background transition-colors text-sm">
                Instagram
              </a>
              {/* <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                Facebook
              </a>
              <a href="#" className="text-background/70 hover:text-background transition-colors text-sm">
                LinkedIn
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
