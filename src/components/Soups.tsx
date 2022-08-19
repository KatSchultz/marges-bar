import React from "react";
import { MenuItem } from "../types";

interface Props {
  food: MenuItem;
}

export default function Soups({ food }: Props) {
  return (
    <div>
      <div className="food-name text-lg font-bold">{food.name}</div>
      <div>{food.description}</div>
      <div>{food.multiPrice1}</div>
      <div>{food.mulitPrice2}</div>
      <div>{food.multiPrice3}</div>
      <div>{food.price}</div>
    </div>
  );
}
