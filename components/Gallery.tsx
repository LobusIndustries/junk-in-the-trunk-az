import Image from "next/image";

const photos = [
  {
    // Verified: "People unloading furniture from a moving truck outdoors"
    src: "https://images.unsplash.com/photo-1776885008664-68b2988373e6?auto=format&fit=crop&w=800&q=80",
    alt: "Team unloading furniture from truck",
    caption: "Full furniture removal, Gilbert AZ",
  },
  {
    // Verified: "Workers load trash into a garbage truck on a street"
    src: "https://images.unsplash.com/photo-1762805543729-361d38e78a37?auto=format&fit=crop&w=800&q=80",
    alt: "Workers loading junk into truck",
    caption: "Full truckload haul, Mesa AZ",
  },
  {
    // Verified: "a garage filled with lots of clutter and tools"
    src: "https://images.unsplash.com/photo-1635108198854-26645ffe6714?auto=format&fit=crop&w=800&q=80",
    alt: "Cluttered garage before cleanout",
    caption: "Before: garage cleanout, Chandler AZ",
  },
  {
    // Verified: "A garage filled with lots of different types of items"
    src: "https://images.unsplash.com/photo-1726929219819-b90904f9d329?auto=format&fit=crop&w=800&q=80",
    alt: "Garage packed with junk and items",
    caption: "Estate cleanout, Queen Creek AZ",
  },
  {
    // Verified: "Workers loading trash onto trucks near a building"
    src: "https://images.unsplash.com/photo-1762805543693-5aaa00fadc28?auto=format&fit=crop&w=800&q=80",
    alt: "Crew hauling trash to truck",
    caption: "Commercial cleanout, Mesa AZ",
  },
  {
    // Verified: "A large pile of garbage sitting next to a metal fence"
    src: "https://images.unsplash.com/photo-1721622248626-e7b5c29de4b2?auto=format&fit=crop&w=800&q=80",
    alt: "Large pile of junk and debris",
    caption: "Yard debris removal, Gilbert AZ",
  },
];

export default function Gallery() {
  return (
    <section className="bg-zinc-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h2 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight">
            REAL JOBS.<br />
            <span className="text-orange-500">REAL RESULTS.</span>
          </h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <div key={photo.alt} className="break-inside-avoid group relative overflow-hidden rounded-xl">
              <div className="relative">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{photo.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
