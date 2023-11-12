import React from "react";
import { FooterContainer } from "../styledComponents/Footer";
import { Span } from "../styledComponents/Text";

export const FooterLayout = () => {
  return (
    <FooterContainer>
      <Span $textColor="#000" $fontSize={12}>
        MKS sistemas © Todos os direitos reservados
      </Span>
    </FooterContainer>
  );
};
