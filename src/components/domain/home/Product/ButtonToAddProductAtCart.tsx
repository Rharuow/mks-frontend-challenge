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
  const { addProductToCart, products, increaseProductQuantity } =
    useCartContext();

  return (
    <Button
      disabled={!product}
      $borderBottom={8}
      onClick={() => {
        if (product)
          products.some((prod) => product.id === prod.id)
            ? increaseProductQuantity(product.id)
            : addProductToCart(product);
      }}
      className="flex w-full items-center justify-center gap-4 disabled:bg-slate-400"
    >
      <ShoppingBag size={14} color="#fff" />
      <Span $fontWeight={600} $fontSize={14}>
        Comprar
      </Span>
    </Button>
  );
};
