"use client";
import { useListProducts } from "@/hooks/productsQuery/useQuery";
import React from "react";

export const ProductList = () => {
  const { data } = useListProducts();

  return <div>ProductList</div>;
};
