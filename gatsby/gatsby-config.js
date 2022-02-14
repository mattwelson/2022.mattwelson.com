module.exports = {
  siteMetadata: {
      title: `2022.mattwelson.com`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "kmafv4yi",
      "dataset": ""
    }
  }, "gatsby-plugin-postcss", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap"]
};