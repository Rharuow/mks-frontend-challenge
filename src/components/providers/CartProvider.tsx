"use client";
import { Product } from "@/service/resources/products";
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type ProductsCart = Array<Product & { quantity: number }>;

const CartContext = createContext<{
  products: ProductsCart;
  setProducts: React.Dispatch<React.SetStateAction<ProductsCart>>;
  addProductToCart: (prod: Product) => void;
  decreaseProductQuantity: (productId: number) => void;
  increaseProductQuantity: (productId: number) => void;
  removeProductFromCart: (productId: number) => void;
  subTotal: number;
  total: number;
}>({
  products: [],
  setProducts: () => {},
  addProductToCart: () => {},
  decreaseProductQuantity: () => {},
  increaseProductQuantity: () => {},
  removeProductFromCart: () => {},
  subTotal: 0,
  total: 0,
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductsCart>([]);

  const addProductToCart = (prod: Product) =>
    setProducts((prev) => [...prev, { ...prod, quantity: 1 }]);

  const decreaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev
        .map((cartProduct) =>
          cartProduct.id === productId
            ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
            : cartProduct,
        )
        .filter((cartProduct) => cartProduct.quantity > 0),
    );
  };

  const increaseProductQuantity = (productId: number) => {
    setProducts((prev) =>
      prev.map((cartProduct) =>
        cartProduct.id === productId
          ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
          : cartProduct,
      ),
    );
  };

  const removeProductFromCart = (productId: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== productId));
  };

  const subTotal = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + Number(product.price) * product.quantity,
      0,
    );
  }, [products]);

  const total = useMemo(() => {
    return products.reduce(
      (acc, product) => acc + Number(product.price) * product.quantity,
      0,
    );
  }, [products]);

  useEffect(() => {
    setProducts(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
  }, [products]);

  return (
    <CartContext.Provider
      value={{
        products,
        setProducts,
        addProductToCart,
        increaseProductQuantity,
        decreaseProductQuantity,
        removeProductFromCart,
        subTotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
