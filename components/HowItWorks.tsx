const steps = [
  {
    num: "01",
    title: "Call or Text Us",
    desc: "Reach out at 480-234-9404 or fill out the quote form. Tell us roughly what you need gone — we'll get you on the schedule fast.",
    detail: "Most calls answered same day",
  },
  {
    num: "02",
    title: "We Show Up & Quote",
    desc: "Our team arrives on time, takes a look at the job, and gives you a firm upfront price. No pressure. No hidden fees. Ever.",
    detail: "Free, no-obligation estimate",
  },
  {
    num: "03",
    title: "We Load It & Leave",
    desc: "You say the word and we get to work. We haul everything out, load the truck, and leave the space cleaner than we found it.",
    detail: "You don't lift a finger",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: heading */}
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Simple Process</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              DONE IN<br />3 STEPS.
            </h2>
            <p className="text-gray-500 text-lg mb-8">
              We make junk removal the easiest part of your day. No surprises, no nonsense — just a clean space and a fair price.
            </p>
            <a
              href="tel:480-234-9404"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-7 py-4 rounded transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              Book a Pickup — 480-234-9404
            </a>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0">
                    <span className="font-display text-orange-500 font-bold text-lg">{step.num}</span>
                  </div>
                  {i < steps.length - 1 && <div className="w-px flex-1 bg-gray-200 my-2" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-display text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed mb-2">{step.desc}</p>
                  <span className="inline-block bg-orange-50 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
