"use client";
import React from "react";
import Lottie from "lottie-react";
import Image from "next/image";

import { SheetContent, SheetHeader, SheetTitle } from "../ui/Sheet";
import { P, Span } from "../styledComponents/Text";

import empty from "@public/no-product.json";
import { useCartContext } from "../providers/CartProvider";
import { CardContainer } from "../styledComponents/Card";
import { Button } from "../styledComponents/Button";
import { Trash2Icon } from "lucide-react";

export const CartComponent = () => {
  const { products } = useCartContext();
  return (
    <SheetContent className="bg-[var(--primary)]">
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
          <CardContainer key={product.id} className="flex flex-col p-1">
            <div className="self-end rounded-full border-[1px] border-red-500/20 bg-red-500/50 p-2">
              <Trash2Icon size={16} className="text-red-700" />
            </div>
            <Image
              src={product.photo}
              alt={`Image of ${product.name}`}
              height={0}
              width={0}
              priority
              sizes="100vw"
              className="h-auto w-full px-5"
            />
            <div className="flex justify-center">
              <Span $textColor="var(--dark)" $fontWeight={400} $fontSize={16}>
                {product.name}
              </Span>
            </div>
          </CardContainer>
        ))
      )}
    </SheetContent>
  );
};
