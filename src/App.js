import * as React from "react";
import logo from './logo.svg';
import { Routes, Route, Link } from "react-router-dom";
import './App.css';

import { Portfolio } from './Portfolio.js';
import { Bio } from './Bio.js';
import { UXUI } from './UXUI.js';
import { Modeling } from './Modeling.js';
import { Digitalart } from './Digitalart.js';
import { Code } from './Code.js';
import { VACA } from './VACA.js';
import { BookVerse } from './Bookverse.js';
import { Bestiary } from './Bestiary.js';
import { Sadhan } from './Sadhan.js';
import { Gaia } from './Gaia.js';
import { MCC } from './MCC.js';

import { ProductDemo } from './productDemo/ProductDemo.js';
import { ProductDemoCart } from './productDemo/ProductDemoCart.js';
import { ProductDemoCheckout } from './productDemo/ProductDemoCheckout.js';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<Bio />} />
        <Route path="/uxui" element={<UXUI />} />
        <Route path="/digitalart" element={<Digitalart />} />
        <Route path="/code" element={<Code />} />
        <Route path="/modeling" element={<Modeling />} />
        <Route path="/vaca" element={<VACA />} />
        <Route path="/bookverse" element={<BookVerse />} />
        <Route path="/bestiary" element={<Bestiary />} />
        <Route path="/sadhan" element={<Sadhan />} />
        <Route path="/gaia" element={<Gaia />} />
        <Route path="/mcc" element={<MCC />} />

        <Route path="/product-demo" element={<ProductDemo />} />
        <Route path="/product-demo-cart" element={<ProductDemoCart />} />
        <Route path="/product-demo-checkout" element={<ProductDemoCheckout />} />
      </Routes>
    </div>
  );
}





export default App;
