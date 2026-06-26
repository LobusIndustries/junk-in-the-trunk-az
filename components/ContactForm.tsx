"use client";
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xjkvpbdo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) { setStatus("success"); form.reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  }

  return (
    <section id="contact" className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            FREE QUOTE.<br />
            <span className="text-orange-500">NO PRESSURE.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Fill out the form and we'll get back to you fast — usually within the hour. Or just give us a call.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Call or Text</div>
                <a href="tel:480-234-9404" className="text-white font-bold text-xl hover:text-orange-400 transition-colors">480-234-9404</a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Hours</div>
                <div className="text-white font-semibold">Mon–Sat: 7am–7pm · Sun: 8am–5pm</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <div className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">Service Area</div>
                <div className="text-white font-semibold">Gilbert · Mesa · Chandler · Queen Creek</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-2">We Got Your Request!</h3>
              <p className="text-gray-400">We'll be in touch shortly. Or call us at{" "}
                <a href="tel:480-234-9404" className="text-orange-400 font-bold">480-234-9404</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-display text-white text-2xl font-bold mb-6">Request a Free Quote</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Name *</label>
                  <input name="name" required type="text" placeholder="Your name"
                    className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Phone *</label>
                  <input name="phone" required type="tel" placeholder="Your phone"
                    className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">Email</label>
                <input name="email" type="email" placeholder="your@email.com"
                  className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors text-sm" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">City *</label>
                <select name="city" required
                  className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-lg px-4 py-3 text-white outline-none transition-colors text-sm">
                  <option value="">Select your city</option>
                  <option>Gilbert</option>
                  <option>Mesa</option>
                  <option>Chandler</option>
                  <option>Queen Creek</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1.5">What needs to go? *</label>
                <textarea name="message" required rows={4} placeholder="Old couch, garage full of stuff, appliances, construction debris..."
                  className="w-full bg-zinc-800 border border-zinc-700 focus:border-orange-500 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none transition-colors resize-none text-sm" />
              </div>
              {status === "error" && (
                <p className="text-red-400 text-sm">Something went wrong. Please call us at 480-234-9404.</p>
              )}
              <button type="submit" disabled={status === "sending"}
                className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-bold text-base py-4 rounded-lg transition-colors">
                {status === "sending" ? "Sending..." : "Send Quote Request →"}
              </button>
              <p className="text-center text-gray-600 text-xs">
                We typically respond within 30–60 minutes during business hours.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
