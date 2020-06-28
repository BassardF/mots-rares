import * as React from "react";
import styled from "styled-components";
import Flex from "../../styleguide/Flex";
import Header from "../../styleguide/Header";
import Text from "../../styleguide/Text";
import Image from "../../styleguide/Image";
import Spacer from "../../styleguide/Spacer";
import { getSpacing } from "../../../constants/spacing";
import { GREY } from "../../../constants/colors";

const TextBloc = styled.div`
  padding: ${getSpacing(10)}px;
  max-width: 300px;
`;

const BenefitsSections = () => {
  return (
    <>
      <Flex justifyContent="center">
        <TextBloc>
          <Header size="l" bold uppercase>
            Votre propre collection
          </Header>
          <Spacer spacing={1} />
          <Text size="s" color={GREY} align="justify">
            Sauvegardez les mots qui vous interessent pour concevoir votre
            propre liste.
          </Text>
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
          <Header size="l" bold uppercase>
            Accedez au dictionnaire
          </Header>
          <Spacer spacing={1} />
          <Text size="s" color={GREY} align="justify">
            Parcourir alphabetiquement notre collection
          </Text>
        </TextBloc>
      </Flex>
      <Spacer spacing={8} />
      <Flex justifyContent="center">
        <TextBloc>
          <Header size="l" bold uppercase>
            Acceder a l'ensemble de notre collection
          </Header>
          <Spacer spacing={1} />
          <Text size="s" color={GREY} align="justify">
            Avec l'outil aleatoire.
          </Text>
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
