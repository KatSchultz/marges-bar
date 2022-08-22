import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Photos from "./pages/Photos";
import About from "./pages/About";

function App() {
  return (
    <div className="App min-h-screen flex flex-col ">
      <header className="App-header bg-red-600 w-full fixed z-10">
        <div className=" flex flex-col place-content-center h-full">
          <h1 className="large-title text-white text-4xl">Marge's</h1>
          <h2 className="med-title text-white text-xl">Bar and Grill</h2>
        </div>
        <nav className="shadow-lg z-10 ">
          <ul className="text-white flex flex-row justify-around mt-4">
            <li className="w-full">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="w-full">
              <Link to={"/menu"}>Menu</Link>
            </li>
            <li className="w-full">
              <Link to={"/about"}>About Us</Link>
            </li>
            <li className="w-full">
              <Link to={"/contact"}>Contact Us</Link>
            </li>
            {/* <li>
              <Link to={"/events"}>Events</Link>
            </li>
            <li>
              <Link to={"/photos"}>Photos</Link>
            </li> */}
          </ul>
        </nav>
      </header>
      <section className="routes flex items-stretch justify-center align-center h-full w-full">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
        </Routes>
      </section>
    </div>
  );
}

export default App;
