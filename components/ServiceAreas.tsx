const areas = [
  { city: "Gilbert", note: "Home base — fastest response times" },
  { city: "Mesa", note: "Serving all of Mesa" },
  { city: "Chandler", note: "North & South Chandler" },
  { city: "Queen Creek", note: "Full service coverage" },
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-gray-50 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
          Service <span className="text-orange-500">Areas</span>
        </h2>
        <p className="text-gray-500 text-lg mb-10">
          Based in Gilbert, we proudly serve the entire East Valley.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {areas.map((a) => (
            <div
              key={a.city}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:border-orange-300 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{a.city}</h3>
              <p className="text-gray-400 text-xs mt-1">{a.note}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-500 text-sm">
          Not sure if we cover your area?{" "}
          <a href="tel:480-234-9404" className="text-orange-500 font-bold hover:underline">
            Give us a call
          </a>{" "}
          and we'll let you know!
        </p>
      </div>
    </section>
  );
}
