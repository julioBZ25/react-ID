import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import initialState from "./initialState.ts";
import { RootState } from "../config/store.ts";
import { Order, Product } from "./interfaces.ts";

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder: {
      reducer: (state, action: PayloadAction<Order>) => {
        state.orders.push(action.payload);
        state.sortBy = [...state.orders];
      },
      prepare: (products: Product[]) => {
        return {
          payload: {
            id: nanoid(),
            products: [...products],
            complete: false,
            cancel: false,
          },
        };
      },
    },
    completeOrder: (state, action: PayloadAction<string>) => {
      const order = state.orders.find((order) => order.id === action.payload);
      if (!order) return;
      order.complete = true;
      if (state.orders.length === state.sortBy.length) {
        state.sortBy = [...state.orders];
      } else {
        const restOrders = state.sortBy.filter(
          (order) => order.id !== action.payload
        );
        state.sortBy = [...restOrders];
      }
    },
    cancelOrder: (state, action: PayloadAction<string>) => {
      const orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
      if (orders.length === 0) return;
      state.orders = [...orders];
      if (state.orders.length === state.sortBy.length) {
        state.sortBy = [...state.orders];
      } else {
        const restOrders = state.sortBy.filter(
          (order) => order.id !== action.payload
        );
        state.sortBy = [...restOrders];
      }
    },
    sortByOrders: (state, action: PayloadAction<boolean>) => {
      const orders = state.orders.filter(
        (order) => order.complete === action.payload
      );
      if (orders.length === 0) return;
      state.sortBy = orders;
    },
    allOrders: (state) => {
      state.sortBy = state.orders;
    },
  },
});

export const { addOrder, completeOrder, cancelOrder, sortByOrders, allOrders } =
  orderSlice.actions;

export const selectOrder = (state: RootState) => state.orders.sortBy;

export default orderSlice.reducer;
