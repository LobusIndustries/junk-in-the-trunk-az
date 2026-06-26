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
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Get a <span className="text-orange-500">Free Quote</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Fill out the form and we'll get back to you fast — usually within the hour.
          </p>
        </div>

        {status === "success" ? (
          <div className="bg-green-900/40 border border-green-500 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold text-green-400 mb-2">Message Received!</h3>
            <p className="text-gray-300">We'll be in touch shortly. Or call us now at{" "}
              <a href="tel:480-234-9404" className="text-orange-400 font-bold">480-234-9404</a>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Name *</label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Phone *</label>
                <input
                  name="phone"
                  required
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input
                name="email"
                type="email"
                placeholder="your@email.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">City / Area *</label>
              <select
                name="city"
                required
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
              >
                <option value="">Select your city</option>
                <option>Gilbert</option>
                <option>Mesa</option>
                <option>Chandler</option>
                <option>Queen Creek</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">What needs to go? *</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Describe what you need hauled away (e.g. old couch, refrigerator, garage full of stuff...)"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please call us directly at 480-234-9404.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-white font-black text-lg py-4 rounded-full transition-colors shadow-lg shadow-orange-500/30"
            >
              {status === "sending" ? "Sending..." : "Send My Quote Request →"}
            </button>

            <p className="text-center text-gray-500 text-sm">
              Prefer to call?{" "}
              <a href="tel:480-234-9404" className="text-orange-400 font-bold hover:underline">
                480-234-9404
              </a>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
