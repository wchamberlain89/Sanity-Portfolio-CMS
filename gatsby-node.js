/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.createPages = async ({ actions, graphql }) => {
    const result = await graphql(`
      {
        allSanityProject {
          edges {
            node {
              slug {
                current
              }
            }
          }
        }
      }
    `);
  
    const projects = result.data.allSanityProject.edges.map(({ node }) => node);
  
    projects.forEach(project => {
      actions.createPage({
        path: project.slug.current,
        component: path.resolve('./src/templates/project.js'),
        context: {
          slug: project.slug.current
        }
      });
    });
  };