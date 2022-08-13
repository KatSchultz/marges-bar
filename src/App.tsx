import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Photos from "./pages/Photos";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Marge's Bar and Grill</h1>
        <Link to={"/"}>Home</Link>
        <Link to={"/menu"}>Menu</Link>
        <Link to={"/contact"}>Contact Us</Link>
        <Link to={"/events"}>Events</Link>
        <Link to={"/photos"}>Photos</Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/events" element={<Events />}></Route>
        <Route path="/photos" element={<Photos />}></Route>
      </Routes>
    </div>
  );
}

export default App;
