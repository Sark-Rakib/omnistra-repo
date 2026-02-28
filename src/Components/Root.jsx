import React from 'react'
import Navbar from "./Navbar";
import Footer from './Footer';
import Home from "./Home"
import IntegrationsSection from "../Components/Integrations/IntegrationsSection";


export default function Root() {
  return (
    <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />
      <Home></Home>
      <IntegrationsSection />
      <Footer />

    </div>

  )
}
