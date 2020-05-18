import * as React  from 'react';
import Header from "../styleguide/Header";
import Text from "../styleguide/Text";
import Spacer from "../styleguide/Spacer";
import Container from "../styleguide/Container";
import HrAnimated from "../styleguide/HrAnimated";
import { TEAL, GREY } from "../../constants/colors";

const Navbar = () => <>
    <Container>
        <Header size="xxl">Mots-Rares</Header>
        <Spacer spacing={1} />
        <Text color={TEAL}>Etendez votre vocabulare, mot par mot.</Text>
    </Container>
</>;

export default Navbar;