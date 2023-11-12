"use client";
import { Product } from "@/service/resources/products";
import React, { ReactNode, createContext, useContext, useState } from "react";

const CartContext = createContext<{
  products: Array<Product>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}>({
  products: [],
  setProducts: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Array<Product>>([]);
  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};
