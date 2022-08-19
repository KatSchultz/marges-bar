import React from "react";
import { MenuItem } from "../types";

interface Props {
  food: MenuItem;
}

export default function ExtrasLayout({ food }: Props) {
  return (
    <div className="flex justify-between">
      <div className="min-w-max">{food.name}</div>
      <div className="dotted-line border-b-2 border-gray-500 border-dotted w-full"></div>
      <div>{food.price}</div>
    </div>
  );
}
