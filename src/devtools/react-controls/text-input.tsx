import * as React from 'react';
import * as bc from 'devtools/styles/base';
import styled from 'styled-components';

export const StyledInput = styled.input<Props>`
  background-color: ${bc.controlBgColor};
  color: ${bc.textColor};
  border: 1px solid transparent;
  padding: 1px;
  flex-grow: ${p => p.grow ? Number(p.grow) : 0};

  :focus {
    border-color: ${bc.focusedBorder};
  }

  :hover {
    border-color: ${bc.hoveredBorder};
  }
`;

const enum KeyCodes {
  ENTER = 13
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement>  {
  onEnter?: (value: string) => void;
  grow?: boolean;
}

export class TextInput extends React.Component<Props> {

  private onEnter = (text: string) => {
    this.props.onEnter?.(text);
  };


  private onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode == KeyCodes.ENTER && this.props.onEnter) {
      e.preventDefault();
      this.onEnter(e.currentTarget.value);
    }
    this.props.onKeyDown?.(e);
  };

  render() {
    const { onEnter, value, ...props } = this.props;

    return (
      <StyledInput
        value={value}
        type='text'
        {...props}
        onKeyDown={this.onKeyDown}
      />
    );
  }
}