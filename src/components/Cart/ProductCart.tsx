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

export const ProductCartComponent = ({ product }: { product: ProductCart }) => {
  const {
    removeProductFromCart,
    decreaseProductQuantity,
    increaseProductQuantity,
  } = useCartContext();
  return (
    <CardContainer key={product.id} className="flex flex-col gap-3 p-4">
      <Button
        $variant="outline"
        className="self-end"
        onClick={() => removeProductFromCart(product.id)}
      >
        <X size={16} />
      </Button>
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
      <div className="flex justify-between">
        <InputNumericContainer>
          <InputNumericButton
            onClick={() => decreaseProductQuantity(product.id)}
          >
            <Span $textColor="var(--dark)">
              <Minus size={12} />
            </Span>
          </InputNumericButton>
          <InputNumericContent>
            <Span $textColor="var(--dark)">{product.quantity}</Span>
          </InputNumericContent>
          <InputNumericButton
            onClick={() => increaseProductQuantity(product.id)}
          >
            <Span $textColor="var(--dark)">
              <Plus size={12} />
            </Span>
          </InputNumericButton>
        </InputNumericContainer>

        <div className="flex flex-col justify-center">
          <Button $variant="dark" disabled>
            <Span $fontWeight={700} $fontSize={15} $textColor="#fff">
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
