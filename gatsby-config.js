/** @type {import('gatsby').GatsbyConfig} */

module.exports = {
  // siteMetadata: {
  //   title: `Frames Motion project with Web Unlocked youtuber`,
  //   siteUrl: `https://www.yourdomain.tld`
  // },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          "primary-color": "#00BFA6",
        },
      },
    },
  ],
};
