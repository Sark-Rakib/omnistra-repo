import React, { useState, useEffect } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center py-25">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Build Smarter{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">
              Workflows
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            Streamline your business processes and connect your favorite tools seamlessly.
  Automate repetitive tasks and focus on what matters most.
          </p>

          <div className="flex gap-4">
            <button className="px-8 py-3 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="px-8 py-3 border-2 border-slate-400 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }`}
        >
          <div className="relative">

            {/* Animated Background */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>

            {/* Image Container */}
            <div className="relative bg-linear-to-br from-slate-700 to-slate-800 rounded-2xl p-1 overflow-hidden">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E0BAQGQQgtiYcAFNw/company-logo_200_200/B4EZsjdjTaHEAI-/0/1765826509626?e=2147483647&v=beta&t=Zdbdn7CmC1Jwf0YrbDNwbvwbvFLFcize01sN8c-U2xY"
                alt="Demo"
                className="w-full h-100 rounded-xl object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-1 bg-white rounded-full p-2 shadow-2xl animate-bounce">
              <div className="text-center">
                <p className="text-xs text-slate-600 font-semibold">
                  Omnistra
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}