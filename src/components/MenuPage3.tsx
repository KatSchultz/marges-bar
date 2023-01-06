import React from "react";
import { dogs, sandwiches } from "../data/MenuItems";
import MenuItemDisplay from "./MenuItemDisplay";

export default function MenuPage3() {
  return (
    <div className="menu-holder bg-white m-6 ">
      <div className="third-page p-2">
        <div className="border-div border-2 border-red-600 p-4 m-4 ">
          <div className="sandwiches">
            <div className="title flex flex-col justify-center items-center">
              <h3 className="menu-title font-black text-3xl text-red-600">
                Blue Line Sandwiches
              </h3>
              <div className="p-4">
                <h3 className="text-red-600 text 2xl text-lg font-bold">
                  DELUXE IT!
                </h3>
                <p className="text-red-600 text 2xl font-bold">
                  Add Fries - $4.00
                </p>
                <p className="text-red-600 text 2xl font-bold">
                  Onion Rings - $6.00
                </p>
              </div>
              {/* <div className="info-divider border-b-2 border-gray-500 m-2 w-5/6"></div> */}
            </div>
            <div className="sandwiches flex flex-col md:grid md:grid-cols-2 ">
              {sandwiches.map((food) => (
                <MenuItemDisplay food={food} key={food.id} />
              ))}
            </div>
          </div>
          <div className="hot-dogs  border-2 border-red-600 mt-4 m-auto p-4 w-full">
            <h3 className="menu-title font-black text-3xl text-red-600">
              Marge's Famous Hot Dogs!
            </h3>
            <h4 className="font-bold text-3xl text-red-600">
              (Natural Casing Snappers)
            </h4>

            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {dogs.map((food) => (
                  <MenuItemDisplay food={food} key={food.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
