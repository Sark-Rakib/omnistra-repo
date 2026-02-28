// src/components/integrations/IntegrationsSection.jsx
import React from "react";
import IntegrationCard from "./IntegrationCard";
import { integrations } from "./data";

export default function IntegrationsSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="w-11/12 mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Our Integrations
          </h2>
          <p className="text-slate-300 text-lg">
            Connect with the tools you love and use every day
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={index}
              name={integration.name}
              logo={integration.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}