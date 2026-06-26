"use client";
import { useState } from "react";
import Logo from "./Logo";

const PHONE = "480-234-9404";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-950 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Logo size={40} />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
          <a href="#how-it-works" className="hover:text-orange-400 transition-colors">How It Works</a>
          <a href="#service-areas" className="hover:text-orange-400 transition-colors">Service Areas</a>
          <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
        </nav>

        <a
          href={`tel:${PHONE}`}
          className="hidden md:flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-5 py-2 rounded-full transition-colors text-sm"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
          </svg>
          {PHONE}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-gray-900 px-4 pb-4 flex flex-col gap-4 text-gray-300 font-medium">
          <a href="#services" onClick={() => setOpen(false)} className="hover:text-orange-400">Services</a>
          <a href="#how-it-works" onClick={() => setOpen(false)} className="hover:text-orange-400">How It Works</a>
          <a href="#service-areas" onClick={() => setOpen(false)} className="hover:text-orange-400">Service Areas</a>
          <a href="#contact" onClick={() => setOpen(false)} className="hover:text-orange-400">Contact</a>
          <a href={`tel:${PHONE}`} className="bg-orange-500 text-white text-center font-bold px-4 py-2 rounded-full">
            Call {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
