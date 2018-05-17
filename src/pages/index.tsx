import * as React from 'react'

import { Button, Content, Embed, Root, Title } from '../styles'

const Home = () => (
  <Root>
    <Content.Left>
      <Title.Primary>WidgetBot</Title.Primary>
      <Title.Secondary>Discord widgets for your website</Title.Secondary>
      <Button.Primary to="/configurator/">Create</Button.Primary>
    </Content.Left>
    <Content.Right>
      <Embed>
        <iframe src="https://canary.widgetbot.io/channels/299881420891881473/355719584830980096/" />
      </Embed>
    </Content.Right>
  </Root>
)

export default Home
