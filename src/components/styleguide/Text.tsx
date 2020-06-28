import * as React from "react";
import styled from "styled-components";
import { getSize, Sizes } from "../../constants/sizes";
import { DARK } from "../../constants/colors";

interface Props {
  children: React.ReactNode;
  size?: Sizes;
  color?: string;
  align?: "center" | "left" | "right" | "justify";
  bold?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  pointer?: boolean;
  underline?: boolean;
}

interface StyledTextProps {
  size: Sizes;
  color: string;
  align: "center" | "left" | "right" | "justify";
  bold: boolean;
  pointer: boolean;
  underline: boolean;
}

const StyledText = styled.div`
  font-size: ${({ size }: StyledTextProps) => getSize(size)}px;
  color: ${({ color }: StyledTextProps) => color};
  font-family: libre_baskervilleregular;
  letter-spacing: 0.5px;
  ${({ align }: StyledTextProps) => `text-align: ${align};`}
  ${({ bold }: StyledTextProps) => `font-weight: ${bold ? "bold" : "normal"};`}
  ${({ pointer }: StyledTextProps) => (pointer ? "cursor:pointer;" : "")}
  ${({ underline }: StyledTextProps) =>
    underline ? "text-decoration:underline;" : ""}
`;

const Text = ({
  size = "m",
  align = "center",
  color = DARK,
  bold = false,
  children,
  onClick,
  pointer = false,
  underline = false,
}: Props) => (
  <StyledText
    bold={bold}
    size={size}
    color={color}
    align={align}
    onClick={onClick}
    pointer={pointer}
    underline={underline}
  >
    {children}
  </StyledText>
);

export default Text;
