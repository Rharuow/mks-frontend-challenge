"use client";
import React from "react";
import Lottie from "lottie-react";
import toast from "react-hot-toast";

import { SheetContent, SheetHeader, SheetTitle } from "../ui/Sheet";
import { P, Span } from "../styledComponents/Text";

import empty from "@public/no-product.json";
import { useCartContext } from "../providers/CartProvider";
import { ProductCartComponent } from "./ProductCart";
import { Button } from "../styledComponents/Button";

export const CartComponent = () => {
  const { products, total } = useCartContext();
  return (
    <SheetContent className="flex flex-col gap-4 overflow-scroll bg-[var(--primary)] p-0">
      <SheetHeader className="p-6">
        <SheetTitle>
          <P $fontWeight={700} $fontSize={27} className="text-left">
            Carrinho de compras
          </P>
        </SheetTitle>
      </SheetHeader>
      {products.length <= 0 ? (
        <div className="flex h-full flex-col items-center justify-center">
          <Lottie className="w-[220px]" animationData={empty} loop={true} />
          <Span className="text-slate text-center">
            Seu carrinho ta vazio...
          </Span>
        </div>
      ) : (
        products.map((product) => (
          <div className="px-6" key={product.id}>
            <ProductCartComponent product={product} />
          </div>
        ))
      )}
      {total > 0 && (
        <div className="sticky bottom-0 flex w-full grow flex-col">
          <div className="flex w-full justify-between overflow-x-hidden bg-[var(--primary)] px-6 py-4">
            <Span $fontWeight={700} $fontSize={16}>
              Total:
            </Span>
            <Span $fontWeight={700} $fontSize={16}>
              R$
              {total.toLocaleString("pt-BR", {
                currency: "BRL",
                maximumFractionDigits: 2,
              })}
            </Span>
          </div>
          <Button
            $color="#000"
            $borderRadius="none"
            className="justify-center overflow-x-hidden"
            onClick={() => toast.success("TODO: Payment flow!")}
          >
            <P $fontWeight={700} className="text-center" $fontSize={16}>
              Finalizar Compra
            </P>
          </Button>
        </div>
      )}
    </SheetContent>
  );
};
