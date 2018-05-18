import * as React from 'react'

import Crater from '../components/Crater'
import { Content, Root } from '../styles'

class Crate extends React.Component {
  render() {
    return (
      <Root>
        <Content.Left>
          <Crater />
        </Content.Left>
        <Content.Right>
          <h1>Crate</h1>
          <p>
            Crate is a lightweight JS library that embeds WidgetBot on your
            website. Message notifications - displayed in the corner of your
            website. Intuitive API - programmatically add messages, toggle the
            widget or dynamically update the colors.
          </p>
        </Content.Right>
      </Root>
    )
  }

  /**
   * Load the Crate library for demo
   */
  crate

  componentDidMount() {
    setTimeout(() => {
      // Load the crate library
      if (!(window as any).Crate) {
        // From network
        const script = document.createElement('script')
        script.src = 'https://crate.widgetbot.io/v2'
        document.body.appendChild(script)

        window.addEventListener('crate', ({ Crate }: any) =>
          this.mounted(Crate)
        )
      } else {
        // From cache
        this.mounted((window as any).Crate)
      }
    }, 3000)
  }

  componentWillUnmount() {
    if (this.crate) {
      this.crate.remove()
    }
  }

  mounted(Crate) {
    this.crate = new Crate({
      server: '299881420891881473',
      channel: '355719584830980096'
    })

    setTimeout(() => {
      this.crate.pulse()
      setTimeout(() => {
        this.crate.message(`Try it out!`, false)
      }, 1000)
    }, 2000)
  }
}

export default Crate
