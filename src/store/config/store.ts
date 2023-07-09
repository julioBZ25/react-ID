import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "../order/orderSlice.ts";

const store = configureStore({
  reducer: {
    orders: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
