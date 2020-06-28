import * as React from "react";
import styled from "styled-components";
import { GREY, PURPLE, LIGHT_PURPLE } from "../../constants/colors";
import Header from "../styleguide/Header";
import Text from "../styleguide/Text";
import Flex from "../styleguide/Flex";
import Spacer from "../styleguide/Spacer";
import Entry from "../../models/Entry";

interface Props {
  center: boolean;
  entry: Entry;
  actions?: Array<React.ReactNode>;
  entriesCount: number;
}

const StyledHeaderWrapper = styled.div`
  background-color: ${PURPLE};
`;

const StyledCard = styled.div`
  width: 300px;
  padding: 15px;
  background-color: ${LIGHT_PURPLE};
`;

const Card = ({ center, entry, actions, entriesCount }: Props) => (
  <Flex justifyContent="center" alignItems="flex-start">
    <StyledCard>
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
    </StyledCard>
  </Flex>
);
export default Card;
