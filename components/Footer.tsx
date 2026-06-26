import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <Logo size={36} />
          <p className="text-sm">Gilbert, AZ — Serving the East Valley</p>
        </div>

        <div className="flex flex-col items-center gap-1 text-sm">
          <a href="tel:480-234-9404" className="text-orange-400 font-bold text-lg hover:underline">
            480-234-9404
          </a>
          <p>Gilbert · Mesa · Chandler · Queen Creek</p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 text-sm">
          <nav className="flex gap-4">
            <a href="#services" className="hover:text-orange-400 transition-colors">Services</a>
            <a href="#service-areas" className="hover:text-orange-400 transition-colors">Areas</a>
            <a href="#contact" className="hover:text-orange-400 transition-colors">Contact</a>
          </nav>
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Junk in the Trunk AZ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
