import * as React from "react";
import styled from "styled-components";
import { getSize } from "../../constants/sizes";
import { DARK, CLEAR, GREY } from "../../constants/colors";
import Flex from "../styleguide/Flex";
import Text from "../styleguide/Text";

interface Props {
  title: React.ReactNode;
  description: React.ReactNode;
  side: "right" | "left";
}

const StyledLPTitle = styled.div`
  font-size: ${getSize("xl")}px;
  color: ${CLEAR};
  background-color: ${DARK};
  padding: 10px 20px;
  letter-spacing: 1px;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  border-bottom: 47px solid transparent;
  border-left: 47px solid ${DARK};
`;

const ReverseArrow = styled.div`
  width: 0;
  height: 0;
  border-top: 47px solid transparent;
  border-right: 47px solid ${DARK};
`;

const LPTitle = ({ title, description, side }: Props) =>
  side === "left" ? (
    <Flex>
      <StyledLPTitle>{title}</StyledLPTitle>
      <div>
        <Arrow />
      </div>
      <div>
        <Text size="s" align="left" color={GREY}>
          {description}
        </Text>
      </div>
    </Flex>
  ) : (
    <Flex justifyContent="flex-end">
      <div>
        <Text size="s" align="left" color={GREY}>
          {description}
        </Text>
      </div>
      <div>
        <ReverseArrow />
      </div>
      <StyledLPTitle>{title}</StyledLPTitle>
    </Flex>
  );
export default LPTitle;
