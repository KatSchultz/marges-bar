import React from "react";
import { dogs, sandwiches } from "../data/MenuItems";
import MenuItemDisplay from "./MenuItemDisplay";

export default function MenuPage3() {
  return (
    <div className="menu-holder bg-white m-12 ">
      <div className="third-page p-2">
        <div className="border-div border-2 border-red-600 p-4 m-4 ">
          <div className="sandwiches">
            <h3 className="menu-title font-black text-3xl text-red-600">
              Blue Line Sandwiches
            </h3>{" "}
            <h3 className="text-red-600 text 2xl text-lg font-bold">
              DELUXE IT!
            </h3>
            <p className="text-red-600 text 2xl font-bold">Add Fries - $4.00</p>
            <p className="text-red-600 text 2xl font-bold">
              Onion Rings - $6.00
            </p>
            <div className="info-divider border-b-2 border-gray-500 m-2 "></div>
            <div className="small-apps flex flex-col md:grid md:grid-cols-2 ">
              {sandwiches.map((food) => (
                <MenuItemDisplay food={food} />
              ))}
            </div>
          </div>
            <div className="hot-dogs  border-2 border-red-600 mt-4 m-auto p-4 w-full md:w-1/2">
              <h3 className="menu-title font-black text-3xl text-red-600">
                Marge's Famous Hot Dogs!
              </h3>
              <h4 className="font-bold text-3xl text-red-600">
                (Natural Casing Snappers)
              </h4>

              <div className="">
                <div className="">
                  {dogs.map((food) => (
                    <MenuItemDisplay food={food} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}