import * as React  from 'react';
import styled from 'styled-components';
import { getSize, Sizes } from '../../constants/sizes';
import { DARK } from "../../constants/colors";

interface Props {
    children: React.ReactNode;
    size?: Sizes,
    color?: string,
}

interface StyledTextProps {
    size: Sizes,
    color: string,
};

const StyledText = styled.div`
    font-size: ${({ size } : StyledTextProps) => getSize(size)}px;
    color: ${({ color } : StyledTextProps) => color};
    font-family: libre_baskervilleregular;
`;
  
const Text = ({ size = 'm', color = DARK, children } : Props) => <StyledText size={size} color={color}>{children}</StyledText>;

export default Text;