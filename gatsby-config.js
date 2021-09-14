module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    `gatsby-plugin-sass`,
    "gatsby-plugin-fontawesome-css",
    "gatsby-plugin-image",

    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `132tipov`,
        dataset: `production`,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: "default",
      },
    },
  ],
};
