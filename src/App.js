import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ShowProvider } from './ShowContext';
import Homepage from './components/Homepage';

const GlobalStyle = createGlobalStyle`
  body {
    background: #ffffff;
  }
`;

function App() {
  return (
    <ShowProvider>
      <GlobalStyle />
      <Homepage />
    </ShowProvider>
  );
}

export default App;