import React from "react";
import { burgers, extras } from "../data/MenuItems";
import ExtrasLayout from "./ExtrasLayout";
import MenuItemDisplay from "./MenuItemDisplay";

export default function MenuPage2() {
  return (
    <div className="menu-holder bg-white m-12 ">
      <div className="second-page p-2">
        <div className="border-div border-2 border-red-600 p-4 m-4 ">
          <div className="burgers">
            <h3 className="menu-title font-black text-3xl text-red-600">
              Burgers
            </h3>
            <div className="small-apps flex flex-col md:grid md:grid-cols-2 ">
              {burgers.map((food) => (
                <MenuItemDisplay food={food} />
              ))}
            </div>
          </div>

          <div className="bottom-half flex flex-col items-center md:flex-row">
            <div className="deluxe-it mt-2 p-4 order-last">
              <h3 className="text-red-600 text 2xl text-lg font-bold">
                DELUXE IT!
              </h3>
              <p className="text-red-600 text 2xl font-bold">
                Add Fries - $4.00
              </p>
              <p className="text-red-600 text 2xl font-bold">
                Onion Rings - $6.00
              </p>
              <div className="info-divider border-b-2 border-gray-500 m-2 "></div>
              <h4>*COOKED TO ORDER</h4>
              <p>
                *Consuming raw or uncooked meats may increase your risk of
                foodborne illness
              </p>
            </div>

            <div className="extras-menu  border-2 border-red-600 mt-4 m-auto p-4 w-full md:w-1/2">
              <h3 className="menu-title font-black text-3xl text-red-600">
                Extras
              </h3>

              <div className="">
                <div className="">
                  {extras.map((food) => (
                    <ExtrasLayout food={food} />
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
