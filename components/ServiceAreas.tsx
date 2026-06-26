const areas = [
  {
    city: "Gilbert",
    badge: "Home Base",
    desc: "Where we're based. Fastest response times — often within the hour.",
    zip: "85233, 85234, 85295, 85296, 85297, 85298",
  },
  {
    city: "Mesa",
    badge: "Full Coverage",
    desc: "Serving all of Mesa, from downtown to East Mesa neighborhoods.",
    zip: "85201–85213, 85274–85275",
  },
  {
    city: "Chandler",
    badge: "Full Coverage",
    desc: "North and South Chandler, including Ocotillo and Sun Lakes areas.",
    zip: "85224, 85225, 85226, 85248, 85249",
  },
  {
    city: "Queen Creek",
    badge: "Full Coverage",
    desc: "San Tan Valley, Queen Creek Marketplace area, and surrounding communities.",
    zip: "85140, 85142, 85143",
  },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Where We Work</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              EAST VALLEY<br />COVERED.
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              Based in Gilbert, we serve the entire East Valley. Most appointments are available same day or next day.
            </p>
            <p className="text-gray-400 text-sm">
              Not sure if we service your area?{" "}
              <a href="tel:480-234-9404" className="text-orange-500 font-semibold hover:underline">Call us — 480-234-9404</a>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {areas.map((a) => (
              <div
                key={a.city}
                className="group bg-gray-50 hover:bg-orange-500 rounded-xl p-6 border border-gray-100 hover:border-orange-500 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-2xl font-bold text-gray-900 group-hover:text-white transition-colors">
                    {a.city}
                  </h3>
                  <span className="bg-orange-100 group-hover:bg-white/20 text-orange-600 group-hover:text-white text-xs font-semibold px-2.5 py-1 rounded-full transition-colors">
                    {a.badge}
                  </span>
                </div>
                <p className="text-gray-500 group-hover:text-orange-100 text-sm leading-relaxed mb-3 transition-colors">
                  {a.desc}
                </p>
                <p className="text-gray-300 group-hover:text-orange-200 text-xs transition-colors">
                  Zip codes: {a.zip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
