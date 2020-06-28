import * as React from "react";
import styled from "styled-components";
import { getSize, Sizes } from "../../constants/sizes";
import { DARK } from "../../constants/colors";

interface Props {
  children: React.ReactNode;
  size?: Sizes;
  align?: "center" | "left" | "justify";
  color?: string;
  bold?: boolean;
  uppercase?: boolean;
}

const StyledHeader = styled.div`
    font-family: robotolight;
    font-size: ${({ size = "m" }: Props) => getSize(size)}px;
    ${({ align = "left" }: Props) => `text-align: ${align};`}
    ${({ uppercase }: Props) =>
      uppercase
        ? `
        text-transform: uppercase;
        letter-spacing: 2px;
    `
        : `
        letter-spacing: 1px;
    `}
    color: ${({ color = DARK }: Props) => color};
    font-weight: ${({ bold }: Props) => (bold ? "bold" : "normal")};
`;

const Header = ({
  size = "m",
  align = "left",
  color,
  bold,
  uppercase,
  children,
}: Props) => (
  <StyledHeader
    color={color}
    size={size}
    align={align}
    bold={bold}
    uppercase={uppercase}
  >
    {children}
  </StyledHeader>
);

export default Header;
