"use client";
import { styled } from "styled-components";

export const Span = styled.span<{
  $textColor?: string;
  $fontSize?: number;
  $fontWeight?: 600 | 300 | 700 | number;
}>`
  color: ${(props) => props.$textColor || "#FFFFFF"};
  font-weight: ${(props) => props.$fontWeight || 400};
  font-size: ${(props) => props.$fontSize || 16}px;
`;
