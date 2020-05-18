import * as React  from 'react';
import styled from 'styled-components';
import { getSpacing, Multiplier } from '../../constants/spacing';

type percent = number; 

interface Props {
    start: percent,
    end: percent,
    duration: number,
    color: string;
}

const StyledHrAnimated = styled.div`
    @keyframes grow {
        from {
            width: ${({ start } : Props) => start }%;
        }
        to {
            width: ${({ end } : Props) => end }%;
        }
    }
    background-color: ${({ color } : Props) => color };
    width: ${({ end } : Props) => end }%;
    height: 5px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    animation-name: grow;
    animation-duration: ${({ duration } : Props) => duration }s;
`;
  
const HrAnimated = StyledHrAnimated;

export default HrAnimated;