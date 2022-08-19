import React from "react";
import { appetizers, bigApps, salad, soups } from "../data/MenuItems";
import MenuItemDisplay from "./MenuItemDisplay";

export default function MenuPage1() {
  return (
    <div className="menu-holder bg-white m-12 ">
      <div className="first-page p-2">
        <div className="border-div border-2 border-red-600 p-4 m-4 ">
          <div className="apps">
            <h3 className="menu-title font-black text-3xl text-red-600">
              Pre-Game Pleasers
            </h3>
            <div className="small-apps grid grid-cols-2 ">
              {appetizers.map((food) => (
                <MenuItemDisplay food={food} />
              ))}
            </div>
            <div className="big-apps">
              {bigApps.map((food) => (
                <MenuItemDisplay food={food} />
              ))}
            </div>
          </div>
          <div className="soup-salad ">
            <h3 className="menu-title font-black text-3xl text-red-600 mt-4">
              Soups & Salads
            </h3>
            <div className="flex flex-col md:flex-row justify-center  ">
              <div className="soups">
                {soups.map((food) => (
                  <MenuItemDisplay food={food} />
                ))}
              </div>
              <div className="soups flex flex-col justify-center">
                {salad.map((food) => (
                  <MenuItemDisplay food={food} />
                ))}
                <div className="carry-out border-2 border-red-600 max-w-sm mt-3 m-auto p-4 ">
                  <div>Carry-Out Available</div>
                  <div>Additional 25c per item</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
