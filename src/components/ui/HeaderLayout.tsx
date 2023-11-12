import React from "react";
import { ShoppingCart } from "lucide-react";
import Lottie from "lottie-react";

import { HeaderContainer } from "../styledComponents/Header";
import { Span } from "../styledComponents/Text";
import { Button } from "../styledComponents/Button";
import { Sheet, SheetTrigger } from "./Sheet";
import { CartComponent } from "../Cart";

import empty from "@public/no-product.json";

export const HeaderLayout = () => {
  return (
    <HeaderContainer>
      <Span $fontWeight={600} $fontSize={32}>
        MKS{" "}
        <Span $fontSize={16} $fontWeight={300}>
          Sistemas
        </Span>
      </Span>
      <Sheet>
        <SheetTrigger asChild>
          <Button $variant="secondary" className="gap-[10px]">
            <ShoppingCart size={12} />{" "}
            <Span $textColor="#000" $fontSize={12} $fontWeight={700}>
              0
            </Span>
          </Button>
        </SheetTrigger>

        <CartComponent />
      </Sheet>
    </HeaderContainer>
  );
};
