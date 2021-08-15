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
  filter: brightness(50%);

  :hover {
    filter: brightness(85%);
  }

  :active {
    filter: brightness(50%);
  }
`;

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  src?: string;
}

export const IconButton: React.FC<Props> = props => {
  const { src, ...rest } = props;
  return (
    <StyledButton {...rest}>
      <img src={src} />
    </StyledButton>
  );
};
