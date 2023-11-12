"use client";
import { useListProducts } from "@/hooks/productsQuery/useQuery";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import { ProductCard } from "./Card";
import { Product } from "@/service/resources/products";

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch } = useListProducts({ page });
  const [products, setProducts] = useState<Array<Product>>([]);

  console.log(products.length);
  console.log(data?.count);

  useEffect(() => {
    if (data) {
      setPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  return (
    <div className="flex flex-col gap-4">
      {isLoading ? (
        Array(2)
          .fill(null)
          .map((_, index) => <ProductCard key={index} />)
      ) : (
        <InfiniteScroll
          dataLength={Number(data?.count)} //This is important field to render the next data
          next={refetch}
          hasMore={Number(data?.count) > products.length}
          loader={<ProductCard />}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};
