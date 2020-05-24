import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../Header';
import Navigation from '../Navigation';
import styled, { ThemeProvider } from 'styled-components';
import { Grid, themes } from '@4ools/design-system-components';

const SiteWrapper = styled.div`
  height: 100%;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  height: 100%;
`;

const Aside = styled.aside`
  border-right: 1px solid ${props => props.theme.borderColor};
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

  return (
    <ThemeProvider theme={themes.dark}>
      <SiteWrapper>
        <Grid.Container cols="1fr" rows="80px 1fr" rowGap="0">
          <Header siteTitle={data.site.siteMetadata.title} />
          <Wrapper>
            <Grid.Container cols="400px 1fr" style={{ height: '100%' }}>
              <Aside>
                <Navigation />
              </Aside>
              <main>{children}</main>
            </Grid.Container>
          </Wrapper>
        </Grid.Container>
      </SiteWrapper>
    </ThemeProvider>
  );
};

export default Layout;
