import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Typography } from '@4ools/design-system-components';
import GlobalStyles from '../components/GlobalStyles';

const IndexPage = () => (
  <Layout>
    <Typography.HeadingOne>
      The quick brown fox jumped over the lazy dog
    </Typography.HeadingOne>
    <Typography.HeadingThree>This is a smaller heading</Typography.HeadingThree>
    <p>
      <Typography.BodyCopy>This is some copy text</Typography.BodyCopy>
    </p>
    <GlobalStyles />
  </Layout>
);

export default IndexPage;
