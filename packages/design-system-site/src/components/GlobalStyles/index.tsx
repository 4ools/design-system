import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { CustomThemeProps } from '@4ools/design-system-components';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    font-family: ${(props: CustomThemeProps) => props.theme.primaryFont};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${(props: CustomThemeProps) => props.theme.colors.textColor};
  }

  /* Height 100% fixes for gatsby */
  html, body, #___gatsby, #gatsby-focus-wrapper {
    height: 100%;
  }

  div[role="group"][tabindex] {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: ${(props: CustomThemeProps) => props.theme.colors.textColor};

    &:hover {
      color: ${(props: CustomThemeProps) => props.theme.colors.textHoverColor};
    }
  }
`;

export default GlobalStyle;
