import React from "react";
import { CardContainer } from "../styledComponents/Card";
import { ProductCart, useCartContext } from "../providers/CartProvider";
import { Button } from "../styledComponents/Button";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import { Span } from "../styledComponents/Text";
import {
  InputNumericButton,
  InputNumericContainer,
  InputNumericContent,
} from "../styledComponents/Input/Numeric";
import { useDeviseContext } from "../providers/DeviseProvider";
import { Separator } from "../ui/Separator";

export const ProductCartComponent = ({ product }: { product: ProductCart }) => {
  const {
    removeProductFromCart,
    decreaseProductQuantity,
    increaseProductQuantity,
  } = useCartContext();
  const { isMobile } = useDeviseContext();
  return (
    <CardContainer
      key={product.id}
      className="flex flex-col gap-3 p-4 md:relative md:grid md:grid-cols-4 md:flex-row md:justify-between md:gap-2 md:p-1"
    >
      <Button
        $rounded
        $padding={isMobile ? 8 : 4}
        $variant={isMobile ? "outline" : "black"}
        className="self-end md:absolute md:right-[-15px] md:top-[-15px]"
        onClick={() => removeProductFromCart(product.id)}
      >
        <X size={16} className="text-black md:rounded-full md:text-white" />
      </Button>
      <Image
        src={product.photo}
        alt={`Image of ${product.name}`}
        height={0}
        width={0}
        priority
        sizes="100vw"
        className="h-auto w-full px-5 md:w-[80px] md:px-0"
      />
      <div className="flex justify-center md:items-center">
        <Span $textColor="var(--dark)" $fontWeight={400} $fontSize={16}>
          {product.name}
        </Span>
      </div>
      <div className="flex justify-around md:col-span-2 md:items-center">
        <div className="flex flex-col gap-1 md:relative md:justify-center">
          <Span
            className="hidden md:absolute md:top-[-15px] md:inline-block"
            $fontSize={9}
            $textColor="black"
          >
            Qtd:
          </Span>
          <InputNumericContainer>
            <InputNumericButton
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <Span $textColor="var(--dark)">
                <Minus size={12} />
              </Span>
            </InputNumericButton>
            <div className="flex justify-center py-2">
              <Separator className="bg-[#bfbfbf]" orientation="vertical" />
            </div>
            <InputNumericContent>
              <Span $textColor="var(--dark)">{product.quantity}</Span>
            </InputNumericContent>
            <div className="flex justify-center py-2">
              <Separator className="bg-[#bfbfbf]" orientation="vertical" />
            </div>
            <InputNumericButton
              onClick={() => increaseProductQuantity(product.id)}
            >
              <Span $textColor="var(--dark)">
                <Plus size={12} />
              </Span>
            </InputNumericButton>
          </InputNumericContainer>
        </div>

        <div className="flex flex-col justify-center">
          <Button $variant={isMobile ? "dark" : "outline"} disabled>
            <Span
              $fontWeight={700}
              $fontSize={15}
              $textColor={isMobile ? "#fff" : "#000"}
            >
              R$
              {Number(Number(product.price) * product.quantity).toLocaleString(
                "pt-BR",
                {
                  currency: "BRL",
                  maximumFractionDigits: 2,
                },
              )}
            </Span>
          </Button>
        </div>
      </div>
    </CardContainer>
  );
};
