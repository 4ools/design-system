import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import { Typography } from '@4ools/design-system-components';

const IndexPage = () => (
  <Layout>
    <Typography.HeadingOne>
      The quick brown fox jumped over the lazy dog
    </Typography.HeadingOne>
    <Typography.HeadingThree>This is a smaller heading</Typography.HeadingThree>

    <Typography.BodyCopy>This is some copy text</Typography.BodyCopy>
  </Layout>
);

export default IndexPage;
