"use client";

import styled from "styled-components";

type Variant = "primary" | "secondary" | "dark" | "outline";

export const Button = styled.button<{
  $borderRadius?: "sm";
  $borderTop?: number;
  $borderBottom?: number;
  $variant?: Variant | string;
  $paddingX?: number;
  $paddingY?: number;
  $padding?: number;
}>`
  background-color: ${(props) =>
    props.$variant ? `var(--${props.$variant})` : "var(--primary)"};
  padding: ${(props) =>
    props.$padding
      ? `${props.$padding}px`
      : `${props.$paddingY || 8}px ${props.$paddingX || 8}px`};
  border-radius: ${(props) =>
    props.$borderRadius === "sm"
      ? `${5}px`
      : props.$borderTop
      ? `${props.$borderTop}px ${props.$borderTop}px 0 0`
      : props.$borderBottom
      ? `0 0 ${props.$borderBottom}px ${props.$borderBottom}px`
      : `${8}px`};
  display: flex;
  align-items: center;
`;
