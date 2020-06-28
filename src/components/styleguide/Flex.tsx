import * as React from "react";
import styled from "styled-components";

interface Props {
  justifyContent?: string;
  alignItems?: string;
}

const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }: Props) => alignItems || "center"};
  justify-content: ${({ justifyContent }: Props) =>
    justifyContent || "flex-start"};
`;

export default Flex;
