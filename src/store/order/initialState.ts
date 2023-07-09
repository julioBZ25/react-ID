import { Order, OrderState } from "./interfaces";

const DATA_ORDERS: Order[] = [
  {
    id: "1",
    products: [
      { quantity: 1, product: "Ceasar salad" },
      { quantity: 1, product: "Hotwings bucket (24)" },
      { quantity: 2, product: "Red Ale" },
    ],
    complete: false,
    cancel: false,
  },
  {
    id: "2",
    products: [
      { quantity: 4, product: "Roast Chicken" },
      { quantity: 4, product: "Red Ale" },
    ],
    complete: true,
    cancel: false,
  },
  {
    id: "3",
    products: [
      { quantity: 1, product: "Ceasar salad" },
      { quantity: 1, product: "Bottle of water" },
    ],
    complete: false,
    cancel: false,
  },
  {
    id: "4",
    products: [
      { quantity: 1, product: "Cheese Burger with Bacon" },
      { quantity: 1, product: "Pilsen" },
    ],
    complete: false,
    cancel: false,
  },
  {
    id: "5",
    products: [
      { quantity: 1, product: "Cheese Burger with Bacon" },
      { quantity: 1, product: "Pilsen" },
    ],
    complete: true,
    cancel: false,
  },
  {
    id: "6",
    products: [
      { quantity: 1, product: "Cheese Burger with Bacon" },
      { quantity: 1, product: "Pilsen" },
    ],
    complete: false,
    cancel: false,
  },
  {
    id: "7",
    products: [
      { quantity: 1, product: "Cheese Burger with Bacon" },
      { quantity: 1, product: "Pilsen" },
    ],
    complete: false,
    cancel: false,
  },
];

const initialState: OrderState = {
  orders: [...DATA_ORDERS],
  sortBy: [...DATA_ORDERS],
};

export default initialState;
