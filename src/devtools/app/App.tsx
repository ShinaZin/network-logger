import * as React from 'react';
import { RulesContextProvider } from 'devtools/store/store';
import { Header } from './header';
import { Rules } from './rules-list/rules';
import { Container } from './styles';

export const App: React.FC = () => (
  <Container>
    <Header />
    <RulesContextProvider>
      <Rules />
    </RulesContextProvider>
  </Container>
);
