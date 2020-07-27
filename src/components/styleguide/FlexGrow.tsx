import * as React from "react";
import styled from "styled-components";

interface Props {
  flexGrow?: number;
}

const FlexGrow = styled.div`
  flex-grow: ${({ flexGrow }: Props) => flexGrow || 0};
`;

export default FlexGrow;
