import * as React from "react";
import styled from "styled-components";
import Header from "../../styleguide/Header";
import Spacer from "../../styleguide/Spacer";
import Button from "../../styleguide/Button";
import { getSpacing } from "../../../constants/spacing";

const CenterBloc = styled.div`
  padding: ${getSpacing(10)}px;
  max-width: 600px;
  margin: 0 auto;
`;

const ContributeSection = () => {
  return (
    <CenterBloc>
      <Header size="l" bold uppercase align="center">
        Notre collection croît grace à vous
      </Header>
      <Spacer spacing={4} />
      <Button centered>Proposez un mot</Button>
    </CenterBloc>
  );
};

export default ContributeSection;
