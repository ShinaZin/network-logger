import * as React from 'react';
import { TextInput } from '../react-controls/text-input';
import { Container } from './styles';

export const App: React.FC = () => (
  <Container>
    <TextInput defaultValue = 'some text' />
    <TextInput placeholder = 'some text' />
  </Container>
);
