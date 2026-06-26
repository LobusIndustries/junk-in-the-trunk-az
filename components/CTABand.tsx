export default function CTABand() {
  return (
    <section className="bg-orange-500 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
          READY TO CLEAR IT OUT?
        </h2>
        <p className="text-orange-100 text-xl mb-8">
          Call or text now for a free, no-pressure quote. We usually pick up same day.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:480-234-9404"
            className="flex items-center justify-center gap-3 bg-white text-orange-500 hover:bg-orange-50 font-black text-2xl px-10 py-5 rounded transition-colors shadow-xl"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            480-234-9404
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg px-8 py-5 rounded transition-colors"
          >
            Request a Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
