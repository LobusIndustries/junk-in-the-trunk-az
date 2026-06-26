"use client";
import { useState, useEffect } from "react";

const PHONE = "480-234-9404";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top announcement bar */}
      <div className="bg-orange-500 text-white text-center text-sm font-medium py-2 px-4">
        ⚡ Same-day service available &nbsp;·&nbsp; Serving Gilbert, Mesa, Chandler & Queen Creek &nbsp;·&nbsp;
        <a href={`tel:${PHONE}`} className="underline font-bold">{PHONE}</a>
      </div>

      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-black/95 shadow-2xl backdrop-blur-sm" : "bg-black"}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white" fill="currentColor">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <div>
              <div className="font-display text-white font-bold text-lg leading-tight">JUNK IN THE TRUNK</div>
              <div className="text-orange-400 text-xs font-medium tracking-widest">ARIZONA</div>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-orange-400 transition-colors">How It Works</a>
            <a href="#reviews" className="hover:text-orange-400 transition-colors">Reviews</a>
            <a href="#service-areas" className="hover:text-orange-400 transition-colors">Service Areas</a>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="text-sm font-semibold text-gray-300 hover:text-white transition-colors px-4 py-2">
              Free Quote
            </a>
            <a
              href={`tel:${PHONE}`}
              className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-5 py-2.5 rounded text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
              </svg>
              {PHONE}
            </a>
          </div>

          <button className="lg:hidden text-white p-1" onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {open && (
          <div className="lg:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
            <a href="#services" onClick={() => setOpen(false)} className="text-gray-300 hover:text-orange-400 font-medium py-1">Services</a>
            <a href="#how-it-works" onClick={() => setOpen(false)} className="text-gray-300 hover:text-orange-400 font-medium py-1">How It Works</a>
            <a href="#reviews" onClick={() => setOpen(false)} className="text-gray-300 hover:text-orange-400 font-medium py-1">Reviews</a>
            <a href="#service-areas" onClick={() => setOpen(false)} className="text-gray-300 hover:text-orange-400 font-medium py-1">Service Areas</a>
            <a href={`tel:${PHONE}`} className="bg-orange-500 text-white text-center font-bold px-4 py-3 rounded">
              Call {PHONE}
            </a>
          </div>
        )}
      </header>
    </>
  );
}
