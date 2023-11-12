"use client";
import { useListProducts } from "@/hooks/productsQuery/useQuery";
import React, { useState } from "react";
import { ProductCard } from "./Card";

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useListProducts({ page });

  return (
    <div className="flex flex-col gap-4">
      {isLoading
        ? Array(2)
            .fill(null)
            .map((_, index) => <ProductCard key={index} />)
        : data?.products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
    </div>
  );
};
