module.exports = {
  siteMetadata: {
    title: `2022.mattwelson.com`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "kmafv4yi",
        dataset: "production",
      },
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
  ],
};
