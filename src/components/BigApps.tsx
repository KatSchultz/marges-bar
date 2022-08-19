import React from "react";
import { MenuItem } from "../types";

interface Props {
  food: MenuItem;
}

export default function BigApps({ food }: Props) {
  return (
    <div>
      <div className="name">{food.name}</div>
      <div className="description-price">
        <div>
          <div>{food.description}</div>
          <div>{food.price}</div>
          <div>{food.multiPrice1}</div>
          <div>{food.mulitPrice2}</div>
        </div>
      </div>
    </div>
  );
}
