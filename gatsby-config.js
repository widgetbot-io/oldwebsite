module.exports = {
  siteMetadata: {
    title: 'WidgetBot'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-emotion'
  ],
  proxy: {
    prefix: '/api',
    url: 'http://localhost:3000'
  }
}
