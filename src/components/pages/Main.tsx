import * as React from "react";
import Spacer from "../styleguide/Spacer";
import LPTitle from "../commons/LPTitle";
import CardSection from "../commons/sections/CardSection";
import BenefitsSections from "../commons/sections/BenefitsSections";
import ApplicationsSection from "../commons/sections/ApplicationsSection";
import ContributeSection from "../commons/sections/ContributeSection";

import { WaitingListContext } from "../../contexts/waitingList";

const Main = () => {
  const { setShowWaitingListModal } = React.useContext(WaitingListContext);
  return (
    <>
      <Spacer spacing={5} />
      <LPTitle
        side="left"
        title="Extrait de notre collection"
        description={<></>}
      />
      <Spacer spacing={15} />
      <CardSection
        openWaitingList={() => {
          setShowWaitingListModal(true);
        }}
      />
      <Spacer spacing={15} />
      <LPTitle
        side="right"
        title="Telechargez l’application mobile"
        description={<></>}
      />
      <Spacer spacing={15} />
      <ApplicationsSection />
      <Spacer spacing={15} />
      <LPTitle
        side="left"
        title="Fonctionnalités sur mobile"
        description={<></>}
      />
      <Spacer spacing={15} />
      <BenefitsSections />
      <Spacer spacing={15} />
      <LPTitle
        side="right"
        title="Contribuez a la collection"
        description={<></>}
      />
      <Spacer spacing={8} />
      <ContributeSection />
    </>
  );
};

export default Main;
