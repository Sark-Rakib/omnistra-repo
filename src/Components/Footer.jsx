import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-gray-300 py-10">
      <div className="w-11/12 mx-auto">

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-10 mb-10">

          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">About</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Omnistra builds modern, responsive, and pixel-perfect web experiences for startups and businesses worldwide.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#privacy" className="hover:text-white transition-colors duration-200">Privacy</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors duration-200">Terms</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#blog" className="hover:text-white transition-colors duration-200">Blog</a>
              </li>
              <li>
                <a href="#guides" className="hover:text-white transition-colors duration-200">Guides</a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors duration-200">Support</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#careers" className="hover:text-white transition-colors duration-200">Careers</a></li>
              <li><a href="#press" className="hover:text-white transition-colors duration-200">Press</a></li>
              <li><a href="#about-us" className="hover:text-white transition-colors duration-200">About Us</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Twitter</a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Omnistra. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}