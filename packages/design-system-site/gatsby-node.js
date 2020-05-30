const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');
const mdxFileName = 'story';

const isStoryMDX = new RegExp(`${mdxFileName}.mdx`, 'g');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // if it is the right type of file, not just an mdx one
  if (isStoryMDX.test(node.fileAbsolutePath)) {
    // if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    // set the slug we will later modify
    createNodeField({
      name: 'slug',
      node,
      value: `${value}`,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const rootRequestResult = await graphql(`
    query {
      allSitePlugin(filter: { name: { eq: "gatsby-source-git" } }) {
        edges {
          node {
            pluginOptions {
              root
            }
          }
        }
      }
    }
  `);

  // did the user set a custom root for the path to the component files?
  const root =
    rootRequestResult && rootRequestResult.data
      ? rootRequestResult.data.allSitePlugin.edges[0].node.pluginOptions.root
      : '';

  // get all the pages that where created from github and grab the relative path
  // and the page content
  // also grab that new field we just made for the slug
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/${mdxFileName}.mdx/g" } }) {
        edges {
          node {
            body
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create all the story pages
  const stories = result.data.allMdx.edges;

  // you'll call `createPage` for each result
  stories.forEach(({ node }) => {
    createPage({
      path: node.fields.slug.replace(root, '').replace(`${mdxFileName}/`, ''),
      component: path.resolve('./src/components/Story/index.tsx'),
      context: { content: node.body },
    });
  });
};
