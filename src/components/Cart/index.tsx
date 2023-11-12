"use client";
import React from "react";
import Lottie from "lottie-react";

import { SheetContent, SheetHeader, SheetTitle } from "../ui/Sheet";
import { P, Span } from "../styledComponents/Text";

import empty from "@public/no-product.json";
import { useCartContext } from "../providers/CartProvider";
import { ProductCartComponent } from "./ProductCart";

export const CartComponent = () => {
  const { products } = useCartContext();
  return (
    <SheetContent className="flex flex-col gap-4 overflow-scroll bg-[var(--primary)]">
      <SheetHeader>
        <SheetTitle>
          <P $fontWeight={700} $fontSize={27} className="text-left">
            Carrinho de compras
          </P>
        </SheetTitle>
      </SheetHeader>
      {products.length <= 0 ? (
        <div className="flex flex-col items-center justify-center">
          <Lottie className="w-[220px]" animationData={empty} loop={true} />
          <Span className="text-slate text-center">
            Seu carrinho ta vazio...
          </Span>
        </div>
      ) : (
        products.map((product) => (
          <ProductCartComponent key={product.id} product={product} />
        ))
      )}
    </SheetContent>
  );
};
