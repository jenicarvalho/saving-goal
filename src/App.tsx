import React from 'react';
import Header from './components/Header';
import SavingGoal from './pages/SavingGoal';

import { globalStyle as GlobalStyle } from './styles/global';

export function App(): JSX.Element {
  return (
    <div>
      <Header />
      <SavingGoal />
      <GlobalStyle />
    </div>
  );
}
