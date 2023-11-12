"use client";
import { Product } from "@/service/resources/products";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext<{
  products: Array<Product>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}>({
  products: [],
  setProducts: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Array<Product>>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      {children}
    </CartContext.Provider>
  );
};
