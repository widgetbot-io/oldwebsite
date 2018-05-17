import './index.css'

import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import { Root, Stars } from './elements'

const Layout = ({ children, data }) => (
  <Root>
    <Stars params={require('./particles.json')} />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    {children()}
  </Root>
)

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
