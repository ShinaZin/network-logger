import { Color } from 'devtools/styles/status-colors';
import * as React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<Props>`
  background-color: transparent;
  border-color: transparent;
  border-radius: 2px;
  height: 20px;
  width: 20px;
  padding: 0px;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
  filter: ${p => getIconColorFilters(p, 50)};

  :hover {
    filter: ${p => getIconColorFilters(p, 85)}
  }

  :active {
    filter: ${p => getIconColorFilters(p, 50)}
  }

  :disabled {
    filter: ${p => getIconColorFilters(p, 30)}
  }
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
  status?: Color;
}

export const IconButton: React.FC<Props> = props => {
  const { src, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <img src={src} />
    </StyledButton>
  );
};

function getIconColorFilters(p: { status?: Color }, brightness: number) {
  const bright = `brightness(${brightness}%)`;
  if (!p.status) {
    return bright;
  }

  const hue = (value: number) => `hue-rotate(${value}deg)`;
  const colored = p.status == Color.error ? hue(-50) : '';

  return `${bright} sepia(100%) ${colored} saturate(150%)`;
}
