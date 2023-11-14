"use client";

import styled from "styled-components";

type Variant = "primary" | "secondary" | "dark" | "outline" | "black";

export const Button = styled.button<{
  $borderRadius?: "sm" | "none";
  $rounded?: boolean;
  $borderTop?: number;
  $borderBottom?: number;
  $variant?: Variant | string;
  $color?: string;
  $paddingX?: number;
  $paddingY?: number;
  $padding?: number;
}>`
  background-color: ${(props) =>
    props.$variant
      ? `var(--${props.$variant})`
      : props.$color ?? "var(--primary)"};
  padding: ${(props) =>
    props.$padding
      ? `${props.$padding}px`
      : `${props.$paddingY || 8}px ${props.$paddingX || 8}px`};
  border-radius: ${(props) =>
    props.$rounded
      ? "100%"
      : props.$borderRadius === "sm"
      ? `${5}px`
      : props.$borderTop
      ? `${props.$borderTop}px ${props.$borderTop}px 0 0`
      : props.$borderBottom
      ? `0 0 ${props.$borderBottom}px ${props.$borderBottom}px`
      : props.$borderRadius === "none"
      ? 0
      : `${8}px`};
  display: flex;
  align-items: center;
`;
