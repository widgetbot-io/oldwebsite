import './index.css'

import ApolloClient from 'apollo-boost'
import { ThemeProvider } from 'emotion-theming'
import gql from 'graphql-tag'
import * as React from 'react'
import Helmet from 'react-helmet'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { Content, Root, Stars } from './elements'

class App extends React.Component<any> {
  render() {
    const { children, data, location } = this.props

    return (
      <ThemeProvider theme={this.state}>
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
          <Content onClick={this.hideFooter.bind(this)}>
            {(children as any)()}
          </Content>
          <Footer />
        </Root>
      </ThemeProvider>
    )
  }

  state = {
    footer: false
  }
  client: ApolloClient<any>

  componentDidMount() {
    this.client = new ApolloClient({ uri: '/api/graphql' })

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

    this.scrollListener = this.onScroll.bind(this)
    window.addEventListener('scroll', this.scrollListener)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
  }

  scrollListener
  scrolling = false

  onScroll(event) {
    const threshold = 60
    const element = document.documentElement // event.target

    if (
      element.scrollHeight - element.scrollTop <=
      element.clientHeight + threshold
    ) {
      if (!this.scrolling) this.showFooter()
    } else {
      this.hideFooter()
    }
  }

  hideFooter() {
    if (!this.state.footer) return

    this.scrolling = true
    this.setState({ footer: false })

    window.scroll({ top: 0, left: 0, behavior: 'smooth' })

    setTimeout(() => (this.scrolling = false), 200)
  }

  showFooter() {
    if (this.state.footer) return

    this.setState({ footer: true })

    window.scroll({
      top: document.body.clientHeight,
      left: 0,
      behavior: 'smooth'
    })
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
