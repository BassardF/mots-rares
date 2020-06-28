import * as React from "react";
import styled from "styled-components";
import { LIGHT_PURPLE } from "../../constants/colors";

interface Props {
  children: React.ReactNode;
}

const ContainerWrapper = styled.div`
  background-color: ${LIGHT_PURPLE};
  padding: 20px;
`;

const StyledContainer = styled.div`
  max-width: 1200px;
  background-color: white;
  margin: 0 auto;
`;

const Container = ({ children }: Props) => (
  <ContainerWrapper>
    <StyledContainer>{children}</StyledContainer>
  </ContainerWrapper>
);

export default Container;
