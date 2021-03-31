const path = require('path')

module.exports = {
  siteMetadata: {
    title: `onePRINT`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },

    `gatsby-plugin-react-helmet`,

    // typescript
    `gatsby-plugin-typescript`,

    // images
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    'gatsby-plugin-styled-components',

    // Smooth scroll
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 1000
      }
    }
  ],
}
