import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
const [mobileContactOpen, setMobileContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Navbar container */}
      <div className="w-11/12 mx-auto py-4 flex items-center justify-between text-white">

        {/* company */}
        <Link to="/" className="text-xl font-semibold tracking-wide">
          Omnistra
        </Link>

        {/* Desktop Nav */}
       <nav className="hidden md:flex items-center gap-8 text-sm font-medium">

  {/* Home */}
  <NavLink to="#home" className="hover:text-gray-300 transition-colors">
    Home
  </NavLink>

  {/* About Dropdown */}
  <div className="relative group">
    <span className="cursor-pointer hover:text-gray-300 transition-colors">
      About
    </span>

    <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-56 bg-zinc-900 rounded-xl shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
      <NavLink to="#company" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Company
      </NavLink>
      <NavLink to="#team" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Team
      </NavLink>
      <NavLink to="#careers" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Careers
      </NavLink>
    </div>
  </div>

  {/* Services Dropdown */}
  <div className="relative group">
    <span className="cursor-pointer hover:text-gray-300 transition-colors">
      Services
    </span>

    <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-56 bg-zinc-900 rounded-xl shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
      <NavLink to="#design" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Design
      </NavLink>
      <NavLink to="#development" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Development
      </NavLink>
      <NavLink to="#marketing" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Marketing
      </NavLink>
    </div>
  </div>

  {/* Contact Dropdown */}
  <div className="relative group">
    <span className="cursor-pointer hover:text-gray-300 transition-colors">
      Contact
    </span>

    <div className="absolute left-1/2 -translate-x-1/2 mt-6 w-56 bg-zinc-900 rounded-xl shadow-xl opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-300">
      <NavLink to="#support" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Support
      </NavLink>
      <NavLink to="#sales" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Sales
      </NavLink>
      <NavLink to="#livechat" className="block px-5 py-3 hover:bg-zinc-800 transition">
        Live Chat
      </NavLink>
    </div>
  </div>

</nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="bg-green-400 text-black font-medium px-6 py-2 rounded-full hover:bg-green-300 transition-all duration-300">
            Login
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-1 bg-white transition-all"></span>
          <span className="w-6 h-1 bg-white transition-all"></span>
          <span className="w-6 h-1 bg-white transition-all"></span>
        </button>
      </div>

      {/* Mobile Menu */}
     <div
  className={`md:hidden bg-black/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
    menuOpen ? "max-h-800px py-6" : "max-h-0"
  }`}
>
  <div className="px-6 space-y-4 text-white text-center">

    {/* Home */}
    <NavLink to="#home" className="block hover:text-gray-300">
      Home
    </NavLink>

    {/* About Accordion */}
    <div>
      <button
        onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
        className="w-full"
      >
        About
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          mobileAboutOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <NavLink to="#company" className="block text-sm py-1">
          Company
        </NavLink>
        <NavLink to="#team" className="block text-sm py-1">
          Team
        </NavLink>
        <NavLink to="#careers" className="block text-sm py-1">
          Careers
        </NavLink>
      </div>
    </div>

    {/* Services Accordion */}
    <div>
      <button
        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
        className="w-full"
      >
        Services
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          mobileServicesOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <NavLink to="#design" className="block text-sm py-1">
          Design
        </NavLink>
        <NavLink to="#development" className="block text-sm py-1">
          Development
        </NavLink>
        <NavLink to="#marketing" className="block text-sm py-1">
          Marketing
        </NavLink>
      </div>
    </div>

    {/* Contact Accordion */}
    <div>
      <button
        onClick={() => setMobileContactOpen(!mobileContactOpen)}
        className="w-full"
      >
        Contact
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          mobileContactOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <NavLink to="#support" className="block text-sm py-1">
          Support
        </NavLink>
        <NavLink to="#sales" className="block text-sm py-1">
          Sales
        </NavLink>
        <NavLink to="#livechat" className="block text-sm py-1">
          Live Chat
        </NavLink>
      </div>
    </div>

    {/* Login */}
    <button className="bg-green-400 text-black font-medium px-6 py-2 rounded-full w-full mt-4">
      Login
    </button>
  </div>
</div>
    </header>
  );
}