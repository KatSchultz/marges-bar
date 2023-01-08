import React from "react";
import Map from "../components/Map";

export default function About() {
  const styles = {
    width: "400px",
    height: "400px",
  };

  return (
    <div className="about-body bg-white w-full m-6 p-4 flex flex-col md:flex-row justify-around items-center ">
      <div className="contact-info p-4">
        <div className="description">
          <h2 className="text-2xl ">Marge's Bar</h2>
          <p className="pb-5">
            The friendliest sports bar in the Metro Detroit area caters to fans
            of all ages. Featuring great food, sports, entertainments and
            drinks. A home town favorite.
          </p>
        </div>
        <div className="hours">
          <h2 className="text-2xl">Hours</h2>
          <p>Monday - Friday: 11AM - 2AM</p>
          <p>Saturday & Sunday: 12PM - 2AM</p>
        </div>
        <div className="phone">
          <h3 className="text-2xl pt-4">Call Us</h3>
          <p>313-881-8895</p>
        </div>
        <div className="address">
          <h3 className="text-2xl pt-4">Visit Us</h3>
          <p>15300 Mack Ave</p>
          <p>Grosse Pointe Park, MI 48230</p>
        </div>
      </div>

      <div className="map p-4">
        <Map />
      </div>
    </div>
  );
}
