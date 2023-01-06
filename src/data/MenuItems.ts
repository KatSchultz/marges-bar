import { MenuItem } from "../types";

export const appetizers: MenuItem[] = [
  {
    id: 1,
    name: "Red Wings",
    description: "",
    price: "(6) $7.00 / (12) $11.25",
  },
  {
    id: 2,
    name: "Wing Dings",
    description: "",
    price: "(6) $6.50 / (12) $11.25",
  },
  {
    id: 3,
    name: "French Fries",
    description: "",
    price: "",
    multiPrice1: "Side $4.00",
    mulitPrice2: "Basket $7.00",
  },
  {
    id: 4,
    name: "Seasoned Fries",
    description: "",
    price: "",
    multiPrice1: "Side $4.50",
    mulitPrice2: "Basket $8.50",
  },
  {
    id: 5,
    name: "Chili Fries",
    description: "",
    price: "",
    multiPrice1: "Side $5.00",
    mulitPrice2: "Basket $6.00",
  },
  {
    id: 6,
    name: "Onion Rings",
    description: "",
    price: "",
    multiPrice1: "Side $6.00",
    mulitPrice2: "Basket $11.00",
  },
  { id: 7, name: "Mozarella Sticks", description: "", price: "$7.00" },
  { id: 8, name: "Mini Tacos", description: "", price: "$8.00" },
];

export const bigApps: MenuItem[] = [
  {
    id: 9,
    name: "Charbroiled Chicken Fingers",
    description: "",
    price: "",
    multiPrice1: "With pita bread and your choice of sauce $10.00",
    mulitPrice2: "Try it with fresh bleu cheese melted on $12.00",
  },
  {
    id: 10,
    name: "Chicken Fajita - Seasoned",
    description:
      "Char-grilled chicken with sauteed green peppers & onions. Served with cheddar cheese, lettuce, tomatoes, warm tortillas and sides of salsa & sour cream",
    price: "$14.00",
  },
  {
    id: 11,
    name: "Chicken Quesadillas",
    description: "",
    price: "",
    multiPrice1: "Chicken and Cheese $10.00  w/lettuce, tomato & onion $11.00",
    mulitPrice2: "Cheese only $7.00  w/lettuce, tomato & onioin $8.50",
  },
];

export const soups: MenuItem[] = [
  { id: 12, name: "Cup of Soup", description: "", price: "5.00" },
  { id: 13, name: "Bowl of Soup", description: "", price: "8.00" },
  {
    id: 14,
    name: "Homemade Chili",
    description: "",
    price: "",
    multiPrice1: "Cup $5.00",
    mulitPrice2: "Bowl $8.00",
    multiPrice3: "w/ the works (Cheddar, Onion, Sour Cream) $9.00",
  },
];

export const salad: MenuItem[] = [
  { id: 15, name: "House Salad", description: "", price: "6.00" },
  {
    id: 16,
    name: "Grilled Chicken Salad",
    description: "Served with pita and your choice of dressing",
    price: "$13.00",
  },
];

export const burgers: MenuItem[] = [
  {
    id: 17,
    name: "The Hat Trick*",
    description: "1/2 pound ground round w/bacon, ham, Swiss & American cheese",
    price: "10.00",
  },
  {
    id: 18,
    name: "Classic Burger*",
    description: "With lettuce, tomato & onion",
    multiPrice1: "1/3 lb. - $7.00",
    mulitPrice2: "1/2 lb. - $8.00",
    price: "$10.00",
  },
  {
    id: 19,
    name: "Mushroom Swiss Burger*",
    description:
      "Smothered with sauteed mushrooms, topped with Swiss cheese. Ask for grilled onion - WOW!",
    multiPrice1: "1/3 lb. - $8.50",
    mulitPrice2: "1/2 lb. - $9.50",
    price: "",
  },
  {
    id: 20,
    name: "Bleu Cheese Burger*",
    description: "Topped with fresh bleu cheese",
    multiPrice1: "1/3 lb. - $8.00",
    mulitPrice2: "1/2 lb. - $8.50",
    price: "",
  },
  {
    id: 21,
    name: "Mexican Burger*",
    description:
      "1/2 pound ground round with cheddar cheese, jalapeno peppers & salsa",
    price: "$9.50",
  },
];

export const sandwiches: MenuItem[] = [
  {
    id: 22,
    name: "Marge's Middle Eastern",
    description:
      "Sauteed ground round with green pepper and green onions topped with cheese & Ranch dressing, wrapped in pita bread",
    price: "$10.00",
  },
  {
    id: 23,
    name: "Italian Sausage Pita",
    description:
      "Loose Italian sausage with green pepper, onion and Swiss, topped with Ranch or Italian dressing and pepperchini peppers, wrapped in pita bread",
    price: "$10.00",
  },
  {
    id: 24,
    name: "Reuben Sandwich",
    description:
      "Thinly sliced corned beef with Swiss, sauerkraut and Russian dressing on grilled rye bread",
    price: "$10.00",
  },
  {
    id: 25,
    name: "Turkey Reuben Sandwich",
    description:
      "Thinly sliced turkey with Swiss, sauerkraut and Russian dressing on grilled rye bread",
    price: "$10.00",
  },
  {
    id: 26,
    name: "Chicken Hana",
    description:
      "Char-broiled chicken strips wrapped in pita with cheese, onion, letuce, tomato, salsa and sour cream",
    price: "$10.00",
  },
  {
    id: 27,
    name: "Marge's Classic Club",
    description:
      "Toasted bread stacked with bacon, turkey, Swiss cheese, lettuce, tomato and mayonaise",
    price: "$11.00",
  },
  { id: 28, name: "Grilled Cheese", description: "", price: "Single - $4.00" },
  { id: 29, name: "BLT", description: "", price: "$8.00" },
];

export const dogs: MenuItem[] = [
  {
    id: 30,
    name: "Coney Dog",
    description: "Coney chili, onions & mustard",
    price: "$4.00",
  },
  {
    id: 31,
    name: "Chicago Dog",
    description: "Spicy brown mustard, onion, tomato, peppers & pickles",
    price: "$4.00",
  },
  {
    id: 32,
    name: "Mexican Dog",
    description: "Jalapenos, bacon, cheddar cheese & salsa",
    price: "$4.00",
  },
  {
    id: 33,
    name: "New Yorker Dog",
    description: "Spicy brown mustard, onion & tomato - grilled",
    price: "$4.00",
  },
];

export const extras: MenuItem[] = [
  { id: 34, name: "Coney Chili", description: "", price: "$3.00" },
  { id: 35, name: "Bleu Cheese", description: "", price: "$1.50" },
  { id: 36, name: "Dressings", description: "", price: "$1.00" },
  { id: 37, name: "Sour Cream", description: "", price: "$1.00" },
  { id: 38, name: "Cheese", description: "", price: "$1.00" },
  { id: 39, name: "Bacon", description: "", price: "$2.50" },
  { id: 40, name: "Ham", description: "", price: "$2.50" },
  { id: 41, name: "Pita Bread", description: "", price: "$2.50" },
  { id: 42, name: "Mushrooms", description: "", price: "$2.50" },
];
