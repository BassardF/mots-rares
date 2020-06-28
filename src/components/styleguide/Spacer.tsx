import * as React from "react";
import styled from "styled-components";
import { getSpacing, Multiplier } from "../../constants/spacing";

interface Props {
  spacing?: Multiplier;
  align?: "center" | "left" | "justify";
}

const StyledSpacer = styled.div`
  width: 100%;
  height: ${({ spacing }: { spacing: Multiplier }) => getSpacing(spacing)}px;
  ${({ align = "left" }: Props) => `text-align: ${align};`}
`;

const Spacer = ({ spacing = 1 }: Props) => <StyledSpacer spacing={spacing} />;

export default Spacer;
