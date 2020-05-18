import * as React  from 'react';
import styled from 'styled-components';
import { getSize, Sizes } from '../../constants/sizes';
import { DARK } from "../../constants/colors";

interface Props {
    children: React.ReactNode;
    size?: Sizes,
}

const StyledHeader = styled.div`
    font-size: ${({ size } : { size : Sizes }) => getSize(size)}px;
    color: ${DARK};
`;
  
const Header = ({ size = 'm', children } : Props) => <StyledHeader size={size}>{children}</StyledHeader>;

export default Header;