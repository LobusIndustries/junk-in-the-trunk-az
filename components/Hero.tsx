import Logo from "./Logo";

const PHONE = "480-234-9404";

export default function Hero() {
  return (
    <section className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Logo size={64} />
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
          JUNK IN THE TRUNK <span className="text-orange-500">AZ</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 font-medium mb-3">
          East Valley's #1 Junk Removal Service
        </p>
        <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
          We haul it all — furniture, appliances, construction debris, estate cleanouts, and more.
          Fast, affordable, and locally owned in Gilbert, AZ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={`tel:${PHONE}`}
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-black text-xl px-8 py-4 rounded-full transition-colors shadow-lg shadow-orange-500/30"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
            </svg>
            Call {PHONE}
          </a>
          <a
            href="#contact"
            className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold text-lg px-8 py-4 rounded-full transition-colors"
          >
            Get a Free Quote
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Same-Day Service Available
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Free No-Obligation Quotes
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            Locally Owned & Operated
          </span>
        </div>
      </div>
    </section>
  );
}
