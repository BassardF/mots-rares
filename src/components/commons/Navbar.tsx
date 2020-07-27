import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import WaitingList from "../pages/WaitingList";
import Modal from "../styleguide/Modal";
import Header from "../styleguide/Header";
import Text from "../styleguide/Text";
import Spacer from "../styleguide/Spacer";
import Flex from "../styleguide/Flex";
import FlexGrow from "../styleguide/FlexGrow";
import { GREY, PURPLE } from "../../constants/colors";
import { getSpacing } from "../../constants/spacing";

import { WaitingListContext } from "../../contexts/waitingList";
import { UserContext } from "../../contexts/user";

const NavbarWrapper = styled.div`
  padding: ${getSpacing(10)}px;
`;

const LinksWrapper = styled.div`
  min-width: 300px;
`;

const ActionsWrapper = styled.div`
  & > * {
    margin-left: 15px;
  }
`;

const Navbar = () => {
  const { showWaitingListModal, setShowWaitingListModal } = React.useContext(
    WaitingListContext
  );
  const { user } = React.useContext(UserContext);
  return (
    <NavbarWrapper>
      <Modal
        isOpen={showWaitingListModal}
        onRequestClose={() => setShowWaitingListModal(false)}
      >
        <WaitingList />
      </Modal>
      <Flex>
        <FlexGrow flexGrow={1}>
          <Header size="xxl" align="left">
            Mots-Rares
          </Header>
          <Spacer spacing={2} />
          <Text color={GREY} align="left">
            Etendez votre vocabulare, mot par mot.
          </Text>
        </FlexGrow>

        {!user && (
          <FlexGrow flexGrow={0}>
            <ActionsWrapper>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => {
                  setShowWaitingListModal(true);
                }}
              >
                Joindre la liste d'attente
              </Button>
            </ActionsWrapper>
          </FlexGrow>
        )}
        {user && (
          <FlexGrow flexGrow={1}>
            <Flex justifyContent="space-evenly">
              <Header size="l" bold>
                <Link
                  to="/aleatoire"
                  style={{ textDecoration: "none", color: PURPLE }}
                >
                  Aléatoire
                </Link>
              </Header>
              <Header size="l" bold>
                <Link
                  to="/dictionnaire"
                  style={{ textDecoration: "none", color: PURPLE }}
                >
                  Dictionnaire
                </Link>
              </Header>
              <Header size="l" bold>
                <Link
                  to="/favoris"
                  style={{ textDecoration: "none", color: PURPLE }}
                >
                  Favoris
                </Link>
              </Header>
            </Flex>
          </FlexGrow>
        )}
      </Flex>
    </NavbarWrapper>
  );
};

export default Navbar;
