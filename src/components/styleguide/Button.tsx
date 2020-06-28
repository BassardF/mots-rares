import * as React from "react";
import styled from "styled-components";
import Header from "./Header";
import { getSize } from "../../constants/sizes";
import { PURPLE } from "../../constants/colors";

interface Props {
  children: React.ReactNode;
  centered?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

interface StyledButtonProps {
  centered: boolean;
  fullWidth: boolean;
}

const StyledButton = styled.button`
  padding: ${getSize("m")}px ${getSize("xxl")}px;
  background-color: ${PURPLE};
  border-radius: 10px;
  border: none;
  outline: none;
  ${({ centered }: StyledButtonProps) =>
    centered &&
    `
        margin: 0 auto;
        display: block;
    `}

  ${({ fullWidth }: StyledButtonProps) =>
    fullWidth &&
    `
        width: 100%;
    `}

  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Button = ({
  children,
  centered = false,
  onClick = () => {},
  type,
  disabled = false,
  fullWidth = false,
}: Props) => (
  <StyledButton
    centered={centered}
    onClick={onClick}
    type={type}
    disabled={disabled}
    fullWidth={fullWidth}
  >
    <Header size="s" bold uppercase color="white" align="center">
      {children}
    </Header>
  </StyledButton>
);
export default Button;
