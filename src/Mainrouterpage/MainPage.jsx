import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccasorisForcomputer from '../OfCAnvas/AccasorisForcomputer';
import AccasorisforMobaile from '../OfCAnvas/AccasorisforMobaile';
import CanteactUs from '../OfCAnvas/CanteactUs';
import Computer from '../OfCAnvas/Computer';
import About from '../OfCAnvas/About';
import NavBar from "../HeadDatails/NavBar";





export default function MainRouter() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/AccasorisForcomputer" element={<AccasorisForcomputer />} />
          <Route path="/AccasorisforMobaile" element={<AccasorisforMobaile />} />
          <Route path="/CanteactUs" element={<CanteactUs />} />
          <Route path="/Computer" element={<Computer />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}