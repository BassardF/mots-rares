import * as React from "react";
import styled from "styled-components";
import { getSize } from "../../constants/sizes";
import { LIGHT_PURPLE, GREY } from "../../constants/colors";
import { getSpacing } from "../../constants/spacing";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: ${getSize("m")}px ${getSize("l")}px;
  background-color: ${LIGHT_PURPLE};
  border: none;
  border-radius: 2px;
  outline: none;
`;

export default StyledInput;
