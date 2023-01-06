import { useLoadScript } from "@react-google-maps/api";
import React from "react";
import Map from "../components/Map";

export default function Contact() {
  // const {isLoaded} = useLoadScript({})
  const location = {
    address: "15300 Mack Ave, Grosse Pointe Park, MI 48230",
    lat: 42.38803,
    lng: -82.9425,
  };
  const zoom = 10;
  const center = { lat: location.lat, lng: location.lng };

  return (
    <div className="about-body bg-white w-full m-6 p-4 flex flex-col md:flex-row justify-around items-center">
      <div className="contact-info p-4">
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
