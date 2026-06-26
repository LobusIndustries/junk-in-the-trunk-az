const steps = [
  {
    num: "1",
    title: "Call or Request a Quote",
    desc: "Give us a call at 480-234-9404 or fill out our online form. We'll ask a few quick questions about what needs to go.",
  },
  {
    num: "2",
    title: "We Show Up & Give a Price",
    desc: "We arrive on time, take a look at the junk, and give you a firm upfront price. No hidden fees, ever.",
  },
  {
    num: "3",
    title: "We Haul It Away",
    desc: "You say yes, we get to work. We load everything up and leave the space clean. You don't lift a finger.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-3">
          How It <span className="text-orange-500">Works</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12">Simple, fast, and stress-free.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-black mb-4 shadow-lg shadow-orange-500/40">
                {step.num}
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="tel:480-234-9404"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black text-lg px-8 py-4 rounded-full transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call Now — 480-234-9404
          </a>
        </div>
      </div>
    </section>
  );
}
