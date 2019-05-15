module.exports = {
  siteMetadata: {
    title: 'Austin J Blake-Full Stack Web Development',
    author: 'Austin Blake' 
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'y2epqr6dn7hj',
        accessToken: 'JgleBy-Z2x1D_LjD3qfeea9HvS0zlfHfN6mMeTJJEmo'
      }
    },
    'gatsby-plugin-sass',
    `gatsby-plugin-playground`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    }
  ]
}

require("dotenv").config({
  path: `.env.development`,
})