import * as React from "react";
import Register from "./Register";
import Spacer from "../styleguide/Spacer";
import Modal from "../styleguide/Modal";
import LPTitle from "../commons/LPTitle";
import CardSection from "../commons/sections/CardSection";
import BenefitsSections from "../commons/sections/BenefitsSections";
import ContributeSection from "../commons/sections/ContributeSection";

import { RegisterContext } from "../../contexts/register.js";

const Main = () => {
  return (
    <RegisterContext.Consumer>
      {({ setIsRegister, showRegisterModal, setShowRegisterModal }) => (
        <>
          <Modal
            isOpen={showRegisterModal}
            onRequestClose={() => setShowRegisterModal(false)}
          >
            <Register />
          </Modal>
          <Spacer spacing={5} />
          <LPTitle
            side="left"
            title="Extrait de notre collection"
            description={
              <>
                <div>Découvrez notre collection aléatoirement</div>
                <Spacer spacing={1} />
                <div>mot par mot</div>
              </>
            }
          />
          <Spacer spacing={20} />
          <CardSection
            openRegister={() => {
              setIsRegister(true);
              setShowRegisterModal(true);
            }}
          />
          <Spacer spacing={20} />
          <LPTitle
            side="right"
            title="Rejoignez-nous gratuitement"
            description={
              <>
                <div>Pour profiter pleinement des capacités</div>
                <Spacer spacing={1} />
                <div>de notre plateforme</div>
              </>
            }
          />
          <Spacer spacing={20} />
          <BenefitsSections />
          <Spacer spacing={20} />
          <LPTitle
            side="left"
            title="Contribuez a la collection"
            description={<div>Partagez vos découvertes avec nous</div>}
          />
          <Spacer spacing={8} />
          <ContributeSection />
        </>
      )}
    </RegisterContext.Consumer>
  );
};

export default Main;
