module.exports = {
  siteMetadata: {
    title: "Plataformatec Farewell Page",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-8268430-16",
      },
    },
  ],
};
