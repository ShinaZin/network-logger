import * as React from 'react';
import * as bc from 'devtools/styles/base';
import styled from 'styled-components';

const StyledDiv = styled.div<Props>`
  display: flex;
  flex-grow: ${p => p.grow ? 1 : 0};
  flex-direction: ${p => p.row ? 'row' : 'column'};
  & > *:not(:first-child) {
    margin-top: ${p => p.col && getMarginValue(p)};
    margin-left: ${p => p.row && getMarginValue(p)};
  }
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
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

function getMarginValue(props: Props) {
  return (props.spacing && bc.spacing) || (props.spacingSm && bc.spacingSm);
}
