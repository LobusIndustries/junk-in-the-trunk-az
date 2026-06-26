const services = [
  {
    icon: "🛋️",
    title: "Furniture Removal",
    desc: "Couches, beds, dressers, tables, chairs — we haul it all, no matter how heavy.",
  },
  {
    icon: "🏠",
    title: "Appliance Removal",
    desc: "Refrigerators, washers, dryers, stoves, dishwashers. We do the heavy lifting.",
  },
  {
    icon: "🏗️",
    title: "Construction Debris",
    desc: "Drywall, lumber, tiles, flooring, roofing shingles — post-renovation cleanups made easy.",
  },
  {
    icon: "📦",
    title: "Estate Cleanouts",
    desc: "Clearing out a home after a move, sale, or loss. We handle it quickly and respectfully.",
  },
  {
    icon: "🌿",
    title: "Yard Waste & Debris",
    desc: "Tree branches, old lumber, dirt, rocks, and general outdoor cleanup.",
  },
  {
    icon: "🏢",
    title: "Office & Commercial",
    desc: "Old desks, chairs, electronics, filing cabinets, and office equipment removed fast.",
  },
  {
    icon: "🗑️",
    title: "Garage Cleanouts",
    desc: "Years of accumulated clutter? We'll clear your garage so you can actually use it again.",
  },
  {
    icon: "🛁",
    title: "Hot Tub & Spa Removal",
    desc: "We break down and remove old hot tubs, spas, and pool equipment safely.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            We Haul <span className="text-orange-500">Everything</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            If you can point at it, we can haul it. No job too big or too small.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-md hover:border-orange-200 transition-all group"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-orange-500 transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
