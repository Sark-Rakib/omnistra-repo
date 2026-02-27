import { useState } from "react";
import { NavLink, Link } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
   <header className="w-11/12 mx-auto sticky top-3 text-white z-50">
  {/* Navbar container */}
  <div className="bg-linear-to-r from-zinc-900 to-black rounded-full flex items-center justify-between px-6 py-4">

    {/* Left: Brand */}
    <div className="flex items-center gap-4">
      <Link to="/" className="text-lg font-bold">Omnistra</Link>
    </div>

    {/* Center: Nav Links */}
    <nav className="hidden md:flex items-center gap-6">
      <NavLink to="/" className="hover:text-gray-300">Home</NavLink>
      <NavLink to="about" className="hover:text-gray-300">About</NavLink>

      {/* Desktop hover dropdown */}
      <div className="relative group">
        <span className="cursor-pointer hover:text-gray-300">Services</span>
        <div className="absolute -right-20 mt-1 w-48 bg-zinc-900 rounded-lg shadow-lg py-2 hidden group-hover:block text-center">
          <NavLink to="design" className="block px-4 py-2 hover:bg-zinc-800">Design</NavLink>
          <NavLink to="development" className="block px-4 py-2 hover:bg-zinc-800">Development</NavLink>
          <NavLink to="marketing" className="block px-4 py-2 hover:bg-zinc-800">Marketing</NavLink>
        </div>
      </div>

      <NavLink to="contact" className="hover:text-gray-300">Contact</NavLink>
    </nav>

    {/* Right: Login */}
    <div className="hidden md:block">
      <button className="bg-green-400 py-2 px-5 rounded">Login</button>
    </div>

    {/* Hamburger (mobile only) */}
    <button
      className="md:hidden flex flex-col gap-1"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <span className="w-6 h-1 bg-white rounded"></span>
      <span className="w-6 h-1 bg-white rounded"></span>
      <span className="w-6 h-1 bg-white rounded"></span>
    </button>
  </div>

  {/* Mobile Dropdown */}
  {menuOpen && (
    <div className="md:hidden bg-zinc-900 mt-2 rounded-lg px-6 py-4 space-y-3 text-center">
      <NavLink to="/" className="block">Home</NavLink>
      <NavLink to="about" className="block">About</NavLink>

      {/* Mobile services toggle */}
      <div>
        <button
          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
          className="block w-full cursor-pointer"
        >
          Services
        </button>
        {mobileServicesOpen && (
          <div className="mt-4 mb-4 space-y-2 text-purple-400">
            <NavLink to="design" className="block text-sm">Design</NavLink>
            <NavLink to="development" className="block text-sm">Development</NavLink>
            <NavLink to="marketing" className="block text-sm">Marketing</NavLink>
          </div>
        )}
      </div>

      <NavLink to="contact" className="block">Contact</NavLink>

      {/* Mobile login */}
      <button className="bg-green-400 py-2 px-5 rounded block w-full">
        Login
      </button>
    </div>
  )}
</header>
  );
}