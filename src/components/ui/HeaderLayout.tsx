"use client";
import React from "react";
import { ShoppingCart } from "lucide-react";

import { HeaderContainer } from "../styledComponents/Header";
import { Span } from "../styledComponents/Text";
import { Button } from "../styledComponents/Button";
import { Sheet, SheetContent, SheetTrigger } from "./Sheet";
import { CartComponent } from "../Cart";
import { useCartContext } from "../providers/CartProvider";

export const HeaderLayout = () => {
  const { products } = useCartContext();

  return (
    <HeaderContainer data-testid="header-container">
      <Span $fontWeight={600} $fontSize={32}>
        MKS{" "}
        <Span $fontSize={16} $fontWeight={300}>
          Sistemas
        </Span>
      </Span>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            data-testid="button-shopping-cart"
            $variant="secondary"
            className="gap-[10px]"
          >
            <ShoppingCart size={12} />{" "}
            <Span $textColor="#000" $fontSize={12} $fontWeight={700}>
              {products.length}
            </Span>
          </Button>
        </SheetTrigger>
        <SheetContent
          data-testid="sheet-content"
          className="flex flex-col gap-4 overflow-y-scroll bg-[var(--primary)] p-0 md:min-w-[486px]"
        >
          <CartComponent />
        </SheetContent>
      </Sheet>
    </HeaderContainer>
  );
};
