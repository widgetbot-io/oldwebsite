import * as React from 'react'

import { demo } from '../modules/paths'
import { Button, Content, Embed, Root, Title } from '../styles'

const Home = () => (
  <Root>
    <Content.Left>
      <div style={{ opacity: 0.3 }}>
        This website is currently under construction!
      </div>
      <Title.Primary>WidgetBot</Title.Primary>
      <Title.Secondary>Discord widgets for your website</Title.Secondary>
      <Button.Primary to="/configurator/">Create</Button.Primary>
      <Button.Secondary to="/configurator/">Aasd</Button.Secondary>
    </Content.Left>
    <Content.Right>
      <Embed>
        <iframe src={demo} />
      </Embed>
    </Content.Right>
  </Root>
)

export default Home
