const path = require('path')

//creating slug for markdown page
// module.exports.onCreateNode = ({ node, actions}) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = path.basename(node.fileAbsolutePath, '.md')
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug
//     })
//   }
// }

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const blogTemplate = path.resolve('./src/templates/blog.js')
  const projectTemplate = path.resolve('./src/templates/projects.js')
  const res = await graphql(`
    query {
      allContentfulProjects {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
  res.data.allContentfulProjects.edges.forEach((edge) => {
    createPage({
      component: projectTemplate,
      path: `/projects/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}