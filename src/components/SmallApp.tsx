import React from "react";
import { MenuItem } from "../types";

interface Props {
  food: MenuItem;
}

export default function SmallApp({ food }: Props) {
  return (
    <div>
      <h4>{food.name}</h4>
      <p>{food.price}</p>
    </div>
  );
}
