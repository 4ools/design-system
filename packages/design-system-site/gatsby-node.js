// const { createFilePath } = require('gatsby-source-filesystem')
const path = require('path');

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   if (node.internal.type === 'Mdx') {
//     console.log('----------');
//     console.log(node);
//     console.log('----------');
//     // const value = createFilePath({ node, getNode });
//     createNodeField({
//       name: 'body',
//       node,
//       value: `${node.internal.rawBody}`,
//     });
//   }
// };

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // we will use this later to strip off the root of the repo if there is one defined
  // allSitePlugin(filter: { name: { eq: "gatsby-source-git" } }) {
  //   edges {
  //     node {
  //       pluginOptions {
  //         root
  //       }
  //     }
  //   }
  // }

  // get all the pages that where created from github and grab the relative path
  // and the page content
  const result = await graphql(`
    query {
      allMdx(filter: { fileAbsolutePath: { regex: "/story.mdx/g" } }) {
        edges {
          node {
            body
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
  stories.forEach(({ node }, index) => {
    createPage({
      // @TODO make these links dynamic
      path: 'test',
      // This component will wrap our MDX content
      component: path.resolve('./src/components/Story/index.tsx'),
      context: { content: node.body },
    });
  });
};
