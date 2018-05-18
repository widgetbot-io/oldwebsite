import './index.css'

import ApolloClient from 'apollo-boost'
import gql from 'graphql-tag'
import * as React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import { Root, Stars } from './elements'

class App extends React.Component<any> {
  client: ApolloClient<any>

  componentDidMount() {
    this.client = new ApolloClient({
      uri: '/api/graphql'
    })

    this.client
      .query({
        query: gql`
          {
            stats {
              onlineGuests
            }
          }
        `
      })
      .then(result => console.log(result))
  }
  render() {
    const { children, data, location } = this.props

    return (
      <Root>
        <Stars params={require('./particles.json')} />
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Discord widgets for your website'
            },
            {
              name: 'keywords',
              content:
                'discord, widgets, widgetbot, titanembeds, titanembeds alternatives, samdd, voakie, embed discord on website'
            }
          ]}
        />
        <Header withText={location.pathname !== '/'} />
        {(children as any)()}
      </Root>
    )
  }
}

export default App

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
