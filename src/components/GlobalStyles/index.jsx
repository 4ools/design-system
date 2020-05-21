import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    font-size: 16px;
  }
`;

export default GlobalStyle;
