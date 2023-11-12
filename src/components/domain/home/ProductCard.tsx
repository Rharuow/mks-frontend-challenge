import { ShoppingBag } from "lucide-react";
import React from "react";

import { Button } from "@/components/styledComponents/Button";
import { CardContainer } from "@/components/styledComponents/Card";
import { Span } from "@/components/styledComponents/Text";

export const ProductCard = () => {
  return (
    <CardContainer>
      <Button
        $borderBottom={8}
        className="w-full flex justify-center items-center gap-4"
      >
        <ShoppingBag size={14} className="text-white" />
        <Span>Comprar</Span>
      </Button>
    </CardContainer>
  );
};
