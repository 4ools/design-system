import * as React from 'react';

// import { graphql } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link } from 'gatsby';

interface StoryPageProps {
  data: {
    mdx: {
      body: string;
    };
  };
}

const shortcodes = { Link }; // Provide common components here

const StoryPage: React.SFC<StoryPageProps> = ({ data: { mdx } }) => (
  <MDXProvider components={shortcodes}>
    <MDXRenderer>{mdx.body}</MDXRenderer>
  </MDXProvider>
);

export default StoryPage;
