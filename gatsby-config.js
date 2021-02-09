module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `gudiekrq`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: 'sk761S6xAqGT0oJ908GheDq9kkSlnyDIbXKcg3tZ1t0peeVhrtYwrA8s18muwG0Yb1K4aog8YRbHUbqLpVXFE2h7SrGoH7wlYziA9nJuM3Hlu7I629fleU7ABd1E7eCl0caHoKIXEQYtFGZWoF8DMyvIeqrXlRtQDamDspFCzPCNM5pI1vLe',
        watchMode: 'true',
        overlayDrafts: 'true',
        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
