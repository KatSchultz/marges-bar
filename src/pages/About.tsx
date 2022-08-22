import React from "react";
import circle1 from "../images/circle1.png";
import round1 from "../images/round-1.png";

export default function About() {
  return (
    <div className="about-body bg-white mx-12 p-4">
      <div className="head-about">
        <h2 className="text-2xl">A Grosse Pointe Establishment Since 1966</h2>
        <h3 className="pb-5 text-xl">Famous for Burgers, Wings and Sports</h3>
      </div>
      <div className="body-about relative">
        <p className="pb-5">
          The friendliest sports bar in the Metro Detroit area caters to fans of
          all ages. Featuring great food, sports, entertainments and drinks. A
          home town favorite where you may spot a famous hockey player.
        </p>
        <p>Everyday 2nd & 4th Thursday of the month 7pm-10pm</p>
        <p>
          Marge's Bar Band continues to bring you live traditional jazz at this
          beloved Eastside Venue.
        </p>
        <img
          className="image relative top-0 right-0 w-56 "
          src={round1}
          alt=""
        />
      </div>
    </div>
  );
}
