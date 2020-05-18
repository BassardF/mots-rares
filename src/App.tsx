import * as React  from 'react';
import styled from 'styled-components';

import Main from "./components/pages/Main";
import Navbar from "./components/commons/Navbar";
import { WHITE } from "./constants/colors";


const StyledApp = styled.div`
    background-color: ${WHITE};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-family: robotoregular;
`;

const App = () => <StyledApp>
        <Navbar/>
        <Main/>
    </StyledApp>;

export default App;