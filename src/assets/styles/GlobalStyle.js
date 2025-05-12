import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.almond};
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
`;
