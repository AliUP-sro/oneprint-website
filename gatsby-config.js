const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://oneprint.cz/',
    title: `onePRINT`,
    description: 'Mladé grafické a tiskové studio. Tvoříme věci, které fungují, máme cit pro kvalitní práci. Naší misí jste vy a vaše spokojenost.',
    keywords: 'oneprint,print,tisk,velkoformátový tisk,gravírování,reklamní textil,digitální tisk,web design,samolepky,eshop,graficke studio',
    author: `AliUP s.r.o. <aliup.cz>`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-XLZ2TS83ZB", // Google Analytics / GA
        ],
        pluginConfig: {
          head: true,
          anonymize_ip: true,
        },
      }
    },
    // {
    //   resolve: `gatsby-plugin-facebook-pixel`,
    //   options: {
    //     pixelId: "312701116856638",
    //   },
    // },
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
