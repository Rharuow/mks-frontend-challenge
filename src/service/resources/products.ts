import { api } from "../api";

export const listProducts = async () => {
  const products = await api.get("/products");

  return products.data;
};
