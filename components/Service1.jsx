import { motion } from "framer-motion";

const services = [
  {
    title: "Skin Treatments",
    items: [
      "Laser Hair Reduction",
      "Acne & Acne Scar Treatment",
      "Pigmentation Treatment (Face / Underarms / Bikini Area)",
      "Melasma Treatment",
      "Dark Circle Treatment",
      "Freckles Treatment",
      "Scar, Tattoo, Wart & Mole Removal",
      "Strawberry Legs Treatment",
    ],
  },
  {
    title: "Advanced Facials & Skin Care",
    items: [
      "Hydra Facial",
      "Carbon Facial",
      "Photo Facial",
      "Chemical Peels",
      "Derma Roller",
      "Microneedling",
    ],
  },
  {
    title: "Anti-Aging & Aesthetics",
    items: [
      "Botox",
      "Dermal Fillers",
      "HIFU Skin Tightening",
      "IPL Skin Rejuvenation",
      "Non-Surgical Face Lift",
    ],
  },
  {
    title: "Hair Treatments",
    items: ["PRP for Hair", "GFC for Hair", "Hair Restoration Therapies"],
  },
  {
    title: "Wellness & Glow",
    items: ["IV Glutathione Therapy", "Vampire Facial ","PRP For Face","PRP for Hairloss"],
  },
];

export default function SoleaServices() {
  return (
    <section className="bg-gradient-to-br from-[#E7A18C] via-[#D08C78] to-[#3A1F1A] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-white mb-4">
            Solea Cosmetology & Aesthetic Services
          </h1>
          <p className="max-w-2xl text-white/80 text-base">
            Advanced medical aesthetics designed to restore confidence, enhance natural beauty, and deliver visible, lasting results.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <div className="h-full rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow p-8">
                <h2 className="text-lg font-semibold tracking-wide text-[#3A1F1A] mb-5 border-b border-[#E7A18C]/40 pb-3">
                  {service.title}
                </h2>
                <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#D08C78]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
