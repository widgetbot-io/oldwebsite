import * as React from 'react'

import Crater from '../components/Crater'
import { Content, Root, Title } from '../styles'
import { Feature, Paragraph } from '../styles/crate'
import { crate } from '../layouts'

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

          <Paragraph style={{ opacity: 0.3 }}>
            Learn more over at{' '}
            <a href="https://docs.widgetbot.io/embed/crate" target="_blank">
              the documentation
            </a>
          </Paragraph>
        </Content.Right>
      </Root>
    )
  }

  componentDidMount() {
    let timer = setInterval(() => {
      if (crate) {
        clearInterval(timer)
        this.mounted()
      }
    }, 5)
  }

  componentWillUnmount() {
    if (crate) crate.show()
  }

  mounted() {
    crate.hide()

    setTimeout(() => crate.show(), 1000)
    setTimeout(() => crate.notify(`Try it out!`, false), 3000)
  }
}

export default Crate
