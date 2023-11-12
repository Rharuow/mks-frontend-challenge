import { api } from "../api";

export type Product = {
  id: number;
  name: string;
  brand: string;
  description: string;
  photo: string;
  price: string;
  createdAt: string;
  updatedAt: string;
};

export type ProductParams = {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
};

export const listProducts = async (params: ProductParams) => {
  const products = await api.get<Product>("/products", {
    params,
  });

  return products.data;
};
