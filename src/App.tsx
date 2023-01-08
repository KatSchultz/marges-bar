import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import { LoadScript } from "@react-google-maps/api";
import { config } from "./config";

function App() {
  return (
    <div className="App min-h-screen flex flex-col ">
      <LoadScript googleMapsApiKey={config.apiKey}>
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
            </ul>
          </nav>
        </header>
        <section className="routes flex items-stretch justify-center align-center h-full w-full">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
            <Route path="/about" element={<About />}></Route>
          </Routes>
        </section>
      </LoadScript>
    </div>
  );
}

export default App;
