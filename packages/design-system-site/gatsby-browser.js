/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import Layout from './src/components/Layout';
import * as React from 'react';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);
