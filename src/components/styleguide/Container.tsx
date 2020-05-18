import * as React  from 'react';
import styled from 'styled-components';
import { getSize } from '../../constants/sizes';

interface Props {
    children: React.ReactNode;
}

const StyledContainer = styled.div`
    Padding: ${getSize('l')}px;
`;
  
const Container = ({ children } : Props) => <StyledContainer>{children}</StyledContainer>;

export default Container;