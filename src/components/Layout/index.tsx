import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header';
import Navigation from '../Navigation';
import styled from 'styled-components';
import { Container } from '../Grid';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
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
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Wrapper>
        <Container cols="200px 1fr">
          <aside>
            <Navigation />
          </aside>
          <main>{children}</main>
        </Container>
      </Wrapper>
    </>
  );
};

export default Layout;
