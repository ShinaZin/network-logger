import * as React from 'react';
import * as bc from 'devtools/styles/base';
import styled from 'styled-components';

interface StyledProps extends Omit<Props, 'spacing'> {
  spacingM?: Props['spacing'];
}

const StyledDiv = styled.div<StyledProps>`
  display: flex;
  flex-grow: ${p => p.grow ? 1 : 0};
  flex-direction: ${p => p.row ? 'row' : 'column'};
  & > *:not(:first-child) {
    margin-top: ${p => p.col && getMarginValue(p)};
    margin-left: ${p => p.row && getMarginValue(p)};
  }
  padding-left: ${p => (p.padding == 'h' || p.padding === true) && bc.spacing};
  padding-right: ${p => (p.padding == 'h' || p.padding === true) && bc.spacing};
  padding-top: ${p => (p.padding == 'v' || p.padding === true) && bc.spacing};
  padding-bottom: ${p => (p.padding == 'v' || p.padding === true) && bc.spacing};
`;

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  row?: boolean;
  col?: boolean;
  grow?: boolean;
  spacing?: boolean;
  spacingSm?: boolean;
  padding?: 'v' | 'h' | true;
}

export const Box: React.FC<Props> = props => {
  const { spacing, ...rest } = props;
  return (
    <StyledDiv spacingM={spacing} {...rest}>
      {props.children}
    </StyledDiv>
  );
};

function getMarginValue(props: StyledProps) {
  return (props.spacingM && bc.spacing) || (props.spacingSm && bc.spacingSm);
}
