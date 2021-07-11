import * as React from 'react';
import { TextInput } from 'devtools/react-controls/text-input';
import { Container } from 'devtools/app/styles';

export const App: React.FC = () => (
  <Container>
    <TextInput defaultValue = 'some text' />
    <TextInput placeholder = 'some text' />
  </Container>
);
