// src/components/integrations/IntegrationCard.jsx
import React from "react";

export default function IntegrationCard({ name, logo }) {
  return (
    <div className="bg-zinc-900 rounded-xl p-6 flex items-center justify-center gap-4 shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer">
      <img src={logo} alt={name} className="w-12 h-12 object-contain" />
      <span className="text-white font-medium">{name}</span>
    </div>
  );
}