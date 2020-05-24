import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Header from '../Header';
import Navigation from '../Navigation';
import GlobalStyles from '../GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import {
  Grid,
  themes,
  CustomThemeProps,
} from '@4ools/design-system-components';

const SiteWrapper = styled.div`
  height: 100%;
  background-color: ${(props: CustomThemeProps) => props.theme.backgroundColor};
  color: ${(props: CustomThemeProps) => props.theme.textColor};
`;

const Aside = styled.aside`
  border-right: 1px solid
    ${(props: CustomThemeProps) => props.theme.borderColor};
  width: 100%;
  padding: 0 20px 0 0;
  height: 100%;
`;

const Layout: React.SFC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [currentTheme, setCurrentTheme] = React.useState('light');

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <GlobalStyles />
      <SiteWrapper>
        <Grid.Container
          cols="1fr"
          rows="80px 1fr"
          rowGap="0"
          style={{ height: '100%' }}
        >
          <Header
            setTheme={setCurrentTheme}
            theme={currentTheme}
            siteTitle={data.site.siteMetadata.title}
          />

          <Grid.Container cols="250px auto" style={{ height: '100%' }}>
            <Aside>
              <Navigation />
            </Aside>
            <main>{children}</main>
          </Grid.Container>
        </Grid.Container>
      </SiteWrapper>
    </ThemeProvider>
  );
};

export default Layout;
