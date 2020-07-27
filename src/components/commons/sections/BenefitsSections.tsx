import * as React from "react";

import styled from "styled-components";
import Flex from "../../styleguide/Flex";
import Image from "../../styleguide/Image";
import Spacer from "../../styleguide/Spacer";
import { getSpacing } from "../../../constants/spacing";

import Typography from "@material-ui/core/Typography";

const TextBloc = styled.div`
  padding: ${getSpacing(10)}px;
  max-width: 300px;
`;

const BenefitsSections = () => {
  return (
    <>
      <Flex justifyContent="center">
        <TextBloc>
          <Typography variant="h4" align="left" gutterBottom>
            Votre propre collection
          </Typography>
          <Spacer spacing={1} />
          <Typography variant="body1" align="left" gutterBottom>
            Sauvegardez les mots qui vous interessent pour concevoir votre
            propre liste.
          </Typography>
        </TextBloc>
        <div>
          <Image
            maxWidth="300px"
            src="https://designshack.net/wp-content/uploads/placeholder-image.png"
          />
        </div>
      </Flex>
      <Spacer spacing={8} />
      <Flex justifyContent="center">
        <div>
          <Image
            maxWidth="300px"
            src="https://designshack.net/wp-content/uploads/placeholder-image.png"
          />
        </div>
        <TextBloc>
          <Typography variant="h4" align="left" gutterBottom>
            Accedez au dictionnaire
          </Typography>
          <Spacer spacing={1} />
          <Typography variant="body1" align="left" gutterBottom>
            Parcourir alphabetiquement notre collection
          </Typography>
        </TextBloc>
      </Flex>
      <Spacer spacing={8} />
      <Flex justifyContent="center">
        <TextBloc>
          <Typography variant="h4" align="left" gutterBottom>
            Acceder a l'ensemble de notre collection
          </Typography>
          <Spacer spacing={1} />
          <Typography variant="body1" align="left" gutterBottom>
            Avec l'outil aleatoire.
          </Typography>
        </TextBloc>
        <div>
          <Image
            maxWidth="300px"
            src="https://designshack.net/wp-content/uploads/placeholder-image.png"
          />
        </div>
      </Flex>
    </>
  );
};

export default BenefitsSections;
