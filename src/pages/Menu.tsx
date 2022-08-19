import React from "react";
import BigApps from "../components/BigApps";
import SmallApp from "../components/SmallApp";
import Soups from "../components/Soups";
import { appetizers, bigApps, soups, salad } from "../data/MenuItems";

export default function Menu() {
  return (
    <div className="menu-holder bg-white mx-12">
      <div className="first-page border-2 border-red-600 p-4 m-4">
        <div className="apps">
          <h3 className="menu-title font-black text-3xl text-red-600">
            Pre-Game Pleasers
          </h3>
          <div className="small-apps">
            {appetizers.map((food) => (
              <Soups food={food} />
            ))}
          </div>
          <div className="big-apps">
            {bigApps.map((food) => (
              <Soups food={food} />
            ))}
          </div>
        </div>
        <div className="soup-salad">
          <h3>Soups & Salads</h3>
          <div className="flex flex-col ">
            <div className="soups">
              {soups.map((food) => (
                <Soups food={food} />
              ))}
            </div>
            <div className="soups">
              {salad.map((food) => (
                <Soups food={food} />
              ))}
              <div className="carry-out border-2 border-red-600 max-w-sm">
                <div>Carry-Out Available</div>
                <div>Additional 25c per item</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
