import * as React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Header from "../../styleguide/Header";
import Spacer from "../../styleguide/Spacer";
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
      <Grid container justify="center">
        <Button variant="contained" color="primary" size="large">
          Proposez un mot
        </Button>
      </Grid>
    </CenterBloc>
  );
};

export default ContributeSection;
