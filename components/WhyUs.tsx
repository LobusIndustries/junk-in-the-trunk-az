const reasons = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Same-Day Service",
    desc: "Need it gone today? We offer same-day and next-day appointments across the East Valley.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Upfront Pricing",
    desc: "We quote you before we start. What we say is what you pay — no surprises on the bill.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Locally Owned",
    desc: "We're your Gilbert neighbors. We care about this community and treat every job like it's our own home.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Eco-Friendly Disposal",
    desc: "We recycle and donate what we can. Your junk doesn't always end up in a landfill.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
            Why Choose <span className="text-orange-500">Junk in the Trunk AZ</span>
          </h2>
          <p className="text-gray-500 text-lg">We make junk removal the easiest part of your day.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 items-start">
              <div className="text-orange-500 shrink-0 mt-1">{r.icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">{r.title}</h3>
                <p className="text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
