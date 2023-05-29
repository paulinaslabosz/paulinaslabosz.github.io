import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.almond};
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
`;
