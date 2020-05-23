import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { HeadingOne, HeadingThree, BodyCopy } from '../components/Typography';
import GlobalStyles from '../components/GlobalStyles';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeadingOne>The quick brown fox jumped over the lazy dog</HeadingOne>
    <HeadingThree>This is a smaller heading</HeadingThree>
    <p>
      <BodyCopy>This is some copy text</BodyCopy>
    </p>
    <GlobalStyles />
  </Layout>
);

export default IndexPage;
