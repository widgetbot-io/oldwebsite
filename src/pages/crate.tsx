import * as React from 'react'

import Crater from '../components/Crater'
import { Content, Root, Title } from '../styles'
import { Feature, Paragraph } from '../styles/crate'

class Crate extends React.Component {
  render() {
    return (
      <Root>
        <Content.Left>
          <Crater />
        </Content.Left>
        <Content.Right>
          <Title.Primary>Crate</Title.Primary>

          <Paragraph>
            Crate is a JS library that transforms WidgetBot into a <i>sexy </i>
            button, available in the bottom right of your site.
          </Paragraph>

          <Feature.List>
            <Feature.Item description="small interactive chat bubbles, displayed in the corner of your site.">
              Message notifications
            </Feature.Item>
            <Feature.Item description="users will be more inclined to send messages, or join your server.">
              Higher conversion rate
            </Feature.Item>
            <Feature.Item description="add messages, toggle the widget or update the colors.">
              Intuitive API
            </Feature.Item>
          </Feature.List>
        </Content.Right>
      </Root>
    )
  }

  /**
   * Load the Crate library for demo
   */
  crate

  componentDidMount() {
    if ((window as any).Crate) return this.mounted()

    // From network
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3'
    document.body.appendChild(script)

    script.onload = () => this.mounted()
  }

  componentWillUnmount() {
    if (this.crate) {
      this.crate.remove()
    }
  }

  mounted() {
    const { Crate } = window as any

    const crate = new Crate({
      server: '299881420891881473',
      channel: '355719584830980096'
    })

    crate.hide()

    setTimeout(() => crate.show(), 3000)
    setTimeout(() => crate.notify(`Try it out!`, false), 4000)

    this.crate = crate
  }
}

export default Crate
