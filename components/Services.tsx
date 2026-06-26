import Image from "next/image";

const services = [
  {
    title: "Furniture Removal",
    desc: "Couches, beds, dressers, tables — we haul it all, no matter the size or weight.",
    // Green sofa — clearly furniture
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Appliance Removal",
    desc: "Refrigerators, washers, dryers, stoves. We disconnect and remove safely.",
    img: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Construction Debris",
    desc: "Drywall, lumber, tiles, roofing shingles. Post-renovation cleanup made easy.",
    img: "https://images.unsplash.com/photo-1616551569669-b60598758c4f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Estate Cleanouts",
    desc: "Clearing a home after a move, sale, or loss. Fast, respectful, thorough.",
    img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Garage Cleanouts",
    desc: "Years of accumulated clutter gone in one visit. We'll clear it so you can use your garage again.",
    img: "https://images.unsplash.com/photo-1635108198322-18c814f9b70f?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Yard Waste & Debris",
    desc: "Branches, rocks, dirt, old lumber — full outdoor cleanup from front to back yard.",
    img: "https://images.unsplash.com/photo-1769340051050-3caa4e4b5baf?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hot Tub Removal",
    desc: "We break down and haul away old hot tubs, spas, and pool equipment.",
    img: "https://images.unsplash.com/photo-1633512424746-0cb5240e064d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Office Cleanouts",
    desc: "Old desks, chairs, electronics, and filing cabinets removed from any commercial space.",
    img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Haul</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
              NO JOB<br />TOO BIG.
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-sm md:text-right">
            If you can point at it, we can haul it. Residential, commercial, or anything in between.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`group relative overflow-hidden rounded-xl bg-zinc-900 ${i === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
            >
              <div className={`relative w-full overflow-hidden ${i === 0 ? "h-80 sm:h-full min-h-64" : "h-48"}`}>
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-white font-bold text-xl mb-1 group-hover:text-orange-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
