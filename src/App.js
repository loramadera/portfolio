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



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<Bio />} />
        <Route path="/uxui" element={<UXUI />} />
        <Route path="/digitalart" element={<Digitalart />} />
        <Route path="/code" element={<Code />} />
        <Route path="/3dmodeling" element={<Modeling />} />
        <Route path="/vaca" element={<VACA />} />
        <Route path="/bookverse" element={<BookVerse />} />
        <Route path="/bestiary" element={<Bestiary />} />
      </Routes>
    </div>
  );
}





export default App;