const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   // you only want to operate on `Mdx` nodes. If you had content from a
//   // remote CMS you could also check to see if the parent node was a
//   // `File` node here
//   if (node.internal.type === 'Mdx') {
//     const value = createFilePath({ node, getNode });
//     createNodeField({
//       // Name of the field you are adding
//       name: 'slug',
//       // Individual MDX node
//       node,
//       // Generated value based on filepath with "blog" prefix. you
//       // don't need a separating "/" before the value because
//       // createFilePath returns a path with the leading "/".
//       value: `${value}`,
//     });
//   }
// };

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

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
      allFile(filter: { relativePath: { glob: "**/story.mdx" } }) {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  // Create all the story pages
  const stories = result.data.allFile.edges;

  // console.log(stories);

  // we need to know if there is a root as we strip the root from the path of the node

  // you'll call `createPage` for each result
  stories.forEach(({ node }, index) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: 'test',
      // This component will wrap our MDX content
      component: path.resolve('./src/components/Story/index.tsx'),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};
