import * as React from 'react';
import * as bc from 'devtools/styles/base';
import styled from 'styled-components';

const StyledDiv = styled.div<Props>`
  display: flex;
  flex-grow: ${p => p.grow ? 1 : 0};
  flex-direction: ${p => p.row ? 'row' : 'column'};
  & > *:not(:first-child) {
    margin-top: ${p => p.col && (p.spacing && bc.spacing) || (p.spacingSm && bc.spacingSm)};
    margin-left: ${p => p.row && (p.spacing && bc.spacing) || (p.spacingSm && bc.spacingSm)};
  }
`;

interface Props {
  row?: boolean;
  col?: boolean;
  grow?: boolean;
  spacing?: boolean;
  spacingSm?: boolean;
}

export const Box: React.FC<Props> = props => {
  return (
    <StyledDiv {...props}>
      {props.children}
    </StyledDiv>
  );
};
