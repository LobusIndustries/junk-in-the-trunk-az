import Image from "next/image";

const PHONE = "480-234-9404";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-black">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1800&q=80"
        alt="Junk removal team at work"
        fill
        className="object-cover opacity-35"
        priority
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Orange accent bar left edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/30 text-orange-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            Gilbert's #1 Rated Junk Removal
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold text-white leading-none mb-6">
            WE HAUL<br />
            <span className="text-orange-500">ANY</span>THING.
          </h1>

          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed mb-10 max-w-xl">
            Fast, honest, and locally owned. We clear out furniture, appliances, debris, and full estates — same day, no hidden fees.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href={`tel:${PHONE}`}
              className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold text-xl px-8 py-5 rounded transition-all duration-200 shadow-2xl shadow-orange-500/30"
            >
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Call {PHONE}
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-5 rounded border border-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Get a Free Quote →
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6">
            {[
              { val: "500+", label: "Jobs Completed" },
              { val: "4.9★", label: "Average Rating" },
              { val: "Same Day", label: "Service Available" },
              { val: "$0", label: "Quote Cost" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-display text-2xl font-bold text-orange-400">{stat.val}</span>
                <span className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs uppercase tracking-widest">
        <span>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent" />
      </div>
    </section>
  );
}
