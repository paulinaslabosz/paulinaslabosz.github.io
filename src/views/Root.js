import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/styles/theme.js';
import { GlobalStyle } from '../assets/styles/GlobalStyle.js';
import { Background } from './Root.styles.js';
import Card from './Card.js';

function Root() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Background>
          <Card />
        </Background>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Root;
