import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from '../header';
import Navigation from '../Navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  flex-direction: row;
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
        <aside style={{ width: '30%' }}>
          <Navigation />
        </aside>
        <main style={{ width: '70%' }}>{children}</main>
      </Wrapper>
    </>
  );
};

export default Layout;
