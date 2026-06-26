import Image from "next/image";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80",
    alt: "Team hauling furniture",
    caption: "Full furniture removal, Gilbert AZ",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    alt: "Construction debris cleanup",
    caption: "Post-renovation cleanout, Mesa AZ",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    alt: "Full truckload of junk",
    caption: "Estate cleanout, Chandler AZ",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    alt: "Clean garage after removal",
    caption: "Before & after garage cleanout",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80",
    alt: "Clean space after junk removal",
    caption: "Cleared and clean — Queen Creek AZ",
  },
  {
    src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
    alt: "Yard waste cleanup",
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
