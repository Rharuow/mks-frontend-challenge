"use client";
import React from "react";
import Lottie from "lottie-react";
import { loadStripe } from "@stripe/stripe-js";

import { SheetHeader, SheetTitle } from "../ui/Sheet";
import { P, Span } from "../styledComponents/Text";

import empty from "@public/no-product.json";
import { useCartContext } from "../providers/CartProvider";
import { ProductCartComponent } from "./ProductCart";
import { Button } from "../styledComponents/Button";
import { createCheckout } from "@/actions/checkout";

export const CartComponent = () => {
  const { products, total } = useCartContext();

  const handleFinishPurshaseClick = async () => {
    const checkout = await createCheckout(products);

    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    stripe?.redirectToCheckout({
      sessionId: checkout.id,
    });
  };

  return (
    <>
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
        <div className="sticky bottom-0 flex w-full grow flex-col justify-end ">
          <div className="flex w-full justify-between  bg-[var(--primary)] px-6 py-4">
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
            className="justify-center"
            onClick={handleFinishPurshaseClick}
          >
            <P $fontWeight={700} className="text-center" $fontSize={16}>
              Finalizar Compra
            </P>
          </Button>
        </div>
      )}
    </>
  );
};
