import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

import NavBar from "./NavBar";
import About from "./About";
import Contact from "./Contact";
import Works from "./Works";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Link to="/about">About</Link>
        <br />
        <Link to="/works">Works</Link>
        <br />
        <Link to="/contact">Contact</Link>
        <br />

        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/works" element={<Works />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
