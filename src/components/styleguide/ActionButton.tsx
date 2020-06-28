import * as React from "react";
import styled from "styled-components";
import { getSpacing } from "../../constants/spacing";
import { getSize } from "../../constants/sizes";
import { CLEAR, GREY, PURPLE, LIGHT_PURPLE } from "../../constants/colors";

interface Props {
  children: React.ReactNode;
  icon?: string;
  onClick: () => void;
}

const StyledActionButton = styled.button`
  background-color: ${PURPLE};
  border-radius: 10px;
  border: none;
  outline: none;
  color: ${CLEAR};
  padding: ${getSpacing(2)}px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  margin-right: ${getSpacing(2)}px;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledIcon = styled.i`
  font-size: ${getSize("s")}px;
  margin-right: ${getSpacing(1)}px;

  align: center;
  border-radius: 100%;
`;

const ActionButton = ({ children, icon, onClick }: Props) => (
  <StyledActionButton onClick={onClick}>
    {icon && <StyledIcon className={`fas fa-${icon}`}></StyledIcon>}
    {children}
  </StyledActionButton>
);

export default ActionButton;
