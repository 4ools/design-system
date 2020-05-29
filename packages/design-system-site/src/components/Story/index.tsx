import * as React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

interface StoryPageProps {
  pageContext: {
    content: string;
  };
}

const StoryPage: React.SFC<StoryPageProps> = ({ pageContext: { content } }) => (
  <MDXRenderer>{content}</MDXRenderer>
);

export default StoryPage;
