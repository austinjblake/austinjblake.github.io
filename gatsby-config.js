module.exports = {
  siteMetadata: {
    title: 'Austin J Blake-Full Stack Web Development',
    author: 'Austin Blake' 
  },
  plugins: [
    'gatsby-plugin-sass',
    `gatsby-plugin-playground`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}