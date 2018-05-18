import './index.css'

import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import { Root, Stars } from './elements'

const Layout = ({ children, data, location }) => (
  <Root>
    <Stars params={require('./particles.json')} />
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Discord widgets for your website' },
        {
          name: 'keywords',
          content:
            'discord, widgets, widgetbot, titanembeds, titanembeds alternatives, samdd, voakie, embed discord on website'
        }
      ]}
    />
    <Header withText={location.pathname !== '/'} />
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
