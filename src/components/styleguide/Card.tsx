import * as React from "react";
import styled from "styled-components";
import { GREY, PURPLE, LIGHT_PURPLE } from "../../constants/colors";
import Header from "../styleguide/Header";
import Text from "../styleguide/Text";
import Flex from "../styleguide/Flex";
import Spacer from "../styleguide/Spacer";
import Entry from "../../models/Entry";

import { makeStyles } from "@material-ui/core/styles";

import MuiCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    width: "300px",
    padding: "5px 15px",
    backgroundColor: LIGHT_PURPLE,
  },
});

interface Props {
  center: boolean;
  entry: Entry;
  actions?: React.ReactNode;
  entriesCount: number;
}

const StyledHeaderWrapper = styled.div`
  background-color: ${PURPLE};
`;

const Card = ({ entry, actions, entriesCount }: Props) => {
  const classes = useStyles();

  return (
    <Flex justifyContent="center" alignItems="flex-start">
      <MuiCard className={classes.root}>
        <CardContent>
          <Header color={PURPLE} size="xxl" align="left">
            {entry.word}
          </Header>
          <Spacer spacing={2} />
          <Text size="s" color={GREY} align="justify">
            <b>definition: </b> {entry.definition}
          </Text>
          <Spacer spacing={2} />
          <Text size="s" color={GREY} align="right">
            <b>
              #{entry.id}/{entriesCount}
            </b>
          </Text>
          <div>{actions}</div>
        </CardContent>
      </MuiCard>
    </Flex>
  );
};
export default Card;
