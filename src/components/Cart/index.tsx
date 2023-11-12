"use client";
import React from "react";
import Lottie from "lottie-react";

import { SheetContent, SheetHeader, SheetTitle } from "../ui/Sheet";
import { P, Span } from "../styledComponents/Text";

import empty from "@public/no-product.json";

export const CartComponent = () => {
  return (
    <SheetContent className="bg-[var(--primary)]">
      <SheetHeader>
        <SheetTitle>
          <P $fontWeight={700} $fontSize={27} className="text-left">
            Carrinho de compras
          </P>
        </SheetTitle>
      </SheetHeader>
      <div className="flex flex-col items-center justify-center">
        <Lottie className="w-[220px]" animationData={empty} loop={true} />
        <Span className="text-slate text-center">Seu carrinho ta vazio...</Span>
      </div>
    </SheetContent>
  );
};
