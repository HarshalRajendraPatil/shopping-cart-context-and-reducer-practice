import React, { createContext, useContext, useReducer } from "react";
import { faker } from "@faker-js/faker";
import { cartReducer, productReducer } from "./Reducers";
import { products } from "./../data/data";

faker.seed(100);
export const Cart = createContext();

const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { products, cart: [] });
  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  return (
    <Cart.Provider value={{ state, dispatch, productDispatch, productState }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;

export const useCartContext = () => {
  return useContext(Cart);
};
