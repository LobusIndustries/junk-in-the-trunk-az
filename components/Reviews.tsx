const reviews = [
  {
    name: "Jake M.",
    location: "Gilbert, AZ",
    rating: 5,
    date: "2 weeks ago",
    text: "These guys came out the same day I called and had my garage completely cleared in under 2 hours. Professional, fast, and the price was exactly what they quoted over the phone. Zero surprises. 100% recommend.",
    avatar: "JM",
    color: "bg-blue-600",
  },
  {
    name: "Sarah T.",
    location: "Chandler, AZ",
    rating: 5,
    date: "1 month ago",
    text: "I was downsizing after 20 years in my house and had SO much accumulated stuff. They handled everything quickly and even swept up after themselves. Worth every single penny. I'll be using them again.",
    avatar: "ST",
    color: "bg-purple-600",
  },
  {
    name: "Mike R.",
    location: "Mesa, AZ",
    rating: 5,
    date: "3 weeks ago",
    text: "Used them for an estate cleanout after my mother passed. They were incredibly respectful, efficient, and made what was already a hard day so much easier. Can't thank them enough.",
    avatar: "MR",
    color: "bg-green-700",
  },
  {
    name: "Jennifer K.",
    location: "Queen Creek, AZ",
    rating: 5,
    date: "5 days ago",
    text: "Best junk removal in the East Valley, period. Called at 8am, they were at my house by noon. Fair pricing, no hidden fees, and they were friendly the whole time. Don't bother calling anyone else.",
    avatar: "JK",
    color: "bg-rose-600",
  },
  {
    name: "David L.",
    location: "Gilbert, AZ",
    rating: 5,
    date: "2 months ago",
    text: "Cleared my entire backyard including an old broken-down hot tub I'd been putting off for years. Couldn't believe how fast they worked. The price was totally fair. Will definitely call again next time.",
    avatar: "DL",
    color: "bg-amber-600",
  },
  {
    name: "Carla N.",
    location: "Mesa, AZ",
    rating: 5,
    date: "3 months ago",
    text: "They helped us with a full home cleanout before listing our house. Showed up on time, worked hard, and knocked out a 3-bedroom house in one afternoon. Seriously impressed. Highly recommend.",
    avatar: "CN",
    color: "bg-teal-600",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Customer Reviews</p>
            <h2 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              DON'T TAKE<br />OUR WORD FOR IT.
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-white rounded-xl px-6 py-4 shadow-sm border border-gray-100">
            <div>
              <div className="font-display text-4xl font-bold text-gray-900">4.9</div>
              <Stars count={5} />
              <div className="text-gray-400 text-xs mt-1">Based on 80+ reviews</div>
            </div>
            <div className="w-px h-14 bg-gray-200" />
            <div className="flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-gray-600 text-sm font-medium">Google Reviews</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white text-sm font-bold`}>
                    {r.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.location}</div>
                  </div>
                </div>
                <span className="text-gray-300 text-xs">{r.date}</span>
              </div>
              <Stars count={r.rating} />
              <p className="text-gray-600 text-sm leading-relaxed mt-3">&ldquo;{r.text}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
