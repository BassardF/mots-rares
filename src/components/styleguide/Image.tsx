import * as React from "react";
import styled from "styled-components";

interface Props {
  src: string;
  maxWidth?: string;
}

const StyledImage = styled.img`
  max-width: ${({ maxWidth }: { maxWidth: string }) => maxWidth};
`;

const Image = ({ src, maxWidth = "100%" }: Props) => (
  <StyledImage src={src} maxWidth={maxWidth} />
);

export default Image;
