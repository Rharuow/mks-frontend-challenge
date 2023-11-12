"use client";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import { ProductCard } from "./Card";

import { useListProducts } from "@/hooks/productsQuery/useQuery";
import { Product } from "@/service/resources/products";

import empty from "@public/empty-products.json";
import { Span } from "@/components/styledComponents/Text";

export const ProductList = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading, refetch } = useListProducts({ page });
  const [products, setProducts] = useState<Array<Product>>([]);

  useEffect(() => {
    if (data) {
      setPage((prev) => prev + 1);
      setProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  return (
    <div className="flex h-full grow flex-col gap-4">
      {isLoading ? (
        Array(2)
          .fill(null)
          .map((_, index) => <ProductCard key={index} />)
      ) : products.length > 0 ? (
        <InfiniteScroll
          dataLength={Number(data?.count)} //This is important field to render the next data
          next={refetch}
          style={{ overflow: "visible" }}
          className="flex flex-col gap-4"
          hasMore={Number(data?.count) > products.length}
          loader={<ProductCard />}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </InfiniteScroll>
      ) : (
        <div className="flex grow flex-col items-center justify-center">
          <Lottie className="w-[220px]" animationData={empty} loop={true} />
          <Span
            $textColor="#000"
            $fontWeight={600}
            $fontSize={12}
            className="text-center"
          >
            Nenhum produto cadastrado...
          </Span>
        </div>
      )}
    </div>
  );
};
