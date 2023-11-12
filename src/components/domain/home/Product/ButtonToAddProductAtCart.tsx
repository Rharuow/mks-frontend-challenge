"use client";
import React from "react";
import { ShoppingBag } from "lucide-react";

import { Button } from "@/components/styledComponents/Button";
import { Span } from "@/components/styledComponents/Text";
import { Product } from "@/service/resources/products";
import { useCartContext } from "@/components/providers/CartProvider";

export const ButtonToAddProductAtCart = ({
  product,
}: {
  product: Product | undefined;
}) => {
  const { setProducts } = useCartContext();
  return (
    <Button
      disabled={!product}
      $borderBottom={8}
      onClick={() => {
        product && setProducts((prev) => [...prev, product]);
      }}
      className="w-full flex justify-center items-center gap-4 disabled:bg-slate-400"
    >
      <ShoppingBag size={14} color="#fff" />
      <Span $fontWeight={600} $fontSize={14}>
        Comprar
      </Span>
    </Button>
  );
};
