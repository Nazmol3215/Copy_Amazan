import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../HomePage/Home';
import AccasorisForcomputer from '../OfCAnvas/AccasorisForcomputer';
import MobaileDetails from '../OtherPagecss/MobailesDetail/MobaileDetails'; 
import AccasorisforMobaile from '../OfCAnvas/AccasorisforMobaile';
import CanteactUs from '../OfCAnvas/CanteactUs';
import About from '../OfCAnvas/About';
import NavBar from '../HeadDatails/NavBar';
import Computer from '../OfCAnvas/Computer';
import Not_found from '../OfCAnvas/Not_found';
import ProductPage from '../OrderDetailsPages/ProductPage ';
import OrderComponent from '../ChatGPTtest/TeastOne';

export default function All() {
  return (
    <div>
      

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductPage" element={<ProductPage />} />
          <Route
            path="/AccasorisForcomputer"
            element={<AccasorisForcomputer />}
          />
          <Route path="/MobaileDetails" element={<MobaileDetails />} />
          <Route
            path="/AccasorisforMobaile"
            element={<AccasorisforMobaile />}
          />
          <Route path="/CanteactUs" element={<CanteactUs />} />
          <Route path="/Computer" element={<Computer />} />
          <Route path="/About" element={<About />} />
          <Route path="*" element={<Not_found />} />
          <Route path="OrderComponent" element={<OrderComponent />} />
        </Routes>
      </BrowserRouter>






    </div>
  )
}
