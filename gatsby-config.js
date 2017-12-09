module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-36532208-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`
  ],
}
