import * as React from 'react';
import { Container } from './styles';
import { Header } from './header';
import { Rules } from './rules-list/rules';

export const App: React.FC = () => (
  <Container>
    <Header />
    <Rules />
  </Container>
);
