import React from "react";
import Skeleton from "react-loading-skeleton";
import Image from "next/image";

import { Button } from "@/components/styledComponents/Button";
import { CardContainer } from "@/components/styledComponents/Card";
import { P, Span } from "@/components/styledComponents/Text";
import { Product } from "@/service/resources/products";

import { ButtonToAddProductAtCart } from "./ButtonToAddProductAtCart";

export const ProductCard = ({ product }: { product?: Product }) => {
  return (
    <CardContainer className="flex flex-col items-center">
      <div className="flex w-full flex-col items-center justify-between p-3">
        {product?.photo ? (
          <Image
            src={product.photo}
            alt={`Image of the ${product.name} `}
            height={0}
            width={0}
            priority
            sizes="100vw"
            className="h-auto w-full px-5"
          />
        ) : (
          <Skeleton width={127} height={158} />
        )}
        <div className="flex w-full justify-between gap-1 p-3">
          {product?.name ? (
            <P $textColor="var(--text-dark)" $fontWeight={400}>
              {product.name}
            </P>
          ) : (
            <Skeleton width={120} className="grow" />
          )}
          {product?.price ? (
            <div className="flex flex-col justify-center">
              <Button $variant="dark" disabled>
                <Span $fontWeight={700} $fontSize={15} $textColor="#fff">
                  R$
                  {Number(product.price).toLocaleString("pt-BR", {
                    currency: "BRL",
                    maximumFractionDigits: 2,
                  })}
                </Span>
              </Button>
            </div>
          ) : (
            <Skeleton width={74} height={30} />
          )}
        </div>
        <div className="w-full p-3">
          {product?.description ? (
            <P
              $textColor="var(--text-dark)"
              $fontSize={10}
              $fontWeight={300}
              className="hyphens-auto whitespace-pre-line text-justify leading-3"
            >
              {product.description}
            </P>
          ) : (
            <Skeleton count={2} />
          )}
        </div>
      </div>
      <ButtonToAddProductAtCart product={product} />
    </CardContainer>
  );
};
