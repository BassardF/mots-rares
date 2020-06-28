import * as React from "react";
import styled from "styled-components";

import Register from "../pages/Register";
import Modal from "../styleguide/Modal";
import Header from "../styleguide/Header";
import Text from "../styleguide/Text";
import Spacer from "../styleguide/Spacer";
import Flex from "../styleguide/Flex";
import Button from "../styleguide/Button";
import { GREY } from "../../constants/colors";
import { getSpacing } from "../../constants/spacing";

import { RegisterContext } from "../../contexts/register.js";

const NavbarWrapper = styled.div`
  padding: ${getSpacing(10)}px;
`;

const ActionsWrapper = styled.div`
  & > * {
    margin-left: 15px;
  }
`;

const Navbar = () => {
  return (
    <RegisterContext.Consumer>
      {({ setIsRegister, showRegisterModal, setShowRegisterModal }) => (
        <NavbarWrapper>
          <Modal
            isOpen={showRegisterModal}
            onRequestClose={() => setShowRegisterModal(false)}
          >
            <Register />
          </Modal>
          <Flex justifyContent="space-between">
            <div>
              <Header size="xxl" align="left">
                Mots-Rares
              </Header>
              <Spacer spacing={2} />
              <Text color={GREY} align="left">
                Etendez votre vocabulare, mot par mot.
              </Text>
            </div>
            <ActionsWrapper>
              <Button
                onClick={() => {
                  setIsRegister(false);
                  setShowRegisterModal(true);
                }}
              >
                Se connecter
              </Button>
              <Button
                onClick={() => {
                  setIsRegister(true);
                  setShowRegisterModal(true);
                }}
              >
                S'enregistrer
              </Button>
            </ActionsWrapper>
          </Flex>
        </NavbarWrapper>
      )}
    </RegisterContext.Consumer>
  );
};

export default Navbar;
