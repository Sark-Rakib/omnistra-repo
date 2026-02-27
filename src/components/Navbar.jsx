import { useState } from "react";
import { Link } from "react-router";
import { NavLink } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="bg-linear-to-r from-zinc-900 to-black text-white relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Brand */}
        <Link href="/" className="text-lg font-bold">
          Omnistra
        </Link>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
          <span className="w-6 h-1 bg-white"></span>
        </button>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
          <NavLink to="/about" className="hover:text-gray-300">About</NavLink>

          {/* Desktop Hover Dropdown */}
          <div className="relative group">
            <span className="cursor-pointer hover:text-gray-300">
              Services
            </span>

            <div className="absolute -right-12 mt-1 w-40 bg-zinc-900 rounded-lg shadow-lg py-2 hidden group-hover:block">
              <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Design</a>
              <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Development</a>
              <a href="#" className="block px-4 py-2 hover:bg-zinc-800">Marketing</a>
            </div>
          </div>

          <NavLink href="/contact" className="hover:text-gray-300">Contact</NavLink>
        </nav>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-900 px-6 text-center pb-4 space-y-3">
          <NavLink to="/" className="block">Home</NavLink>
          <NavLink to="/about" className="block">About</NavLink>

          {/* Mobile Services Click Dropdown */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="block w-full"

            >

              Services
            </button>

            {mobileServicesOpen && (
              <div className="mt-4 mb-4 space-y-2 text-purple-400">
                <NavLink href="/design" className="block text-sm">Design</NavLink>
                <NavLink href="/development" className="block text-sm">Development</NavLink>
                <NavLink href="/marketing" className="block text-sm">Marketing</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className="block">Contact</NavLink>
        </div>
      )}
    </header>
  );
}