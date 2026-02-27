import React from 'react'
import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Home from './Home';


export default function Root() {
  return (
    <div>
       <Navbar />
           <Outlet />
           <Footer />
           <Home></Home>
    </div>

  )
}
