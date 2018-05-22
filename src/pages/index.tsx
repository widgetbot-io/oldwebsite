import * as React from 'react'

import { demo } from '../modules/paths'
import { Button, Content, Embed, Root, Title } from '../styles'

const Home = () => (
  <Root>
    <Content.Left>
      <div style={{ opacity: 0.3 }}>
        This website is currently under construction!<br />
        Once you've clicked "Invite", head to
        https://canary.widgetbot.io/channels/YOUR_SERVER_ID
      </div>
      <Title.Primary>WidgetBot</Title.Primary>
      <Title.Secondary>Discord widgets for your website</Title.Secondary>
      {/* <Button.Primary to="/configurator/">Create</Button.Primary> */}
      <Button.Primary
        href={`https://discordapp.com/oauth2/authorize?client_id=293731150239891456&scope=bot&permissions=537218112`}
        target="_blank"
      >
        Invite
      </Button.Primary>
      {/* <Button.Secondary to="/configurator/">Configurator</Button.Secondary> */}
    </Content.Left>
    <Content.Right>
      <Embed>
        <iframe src={demo} />
      </Embed>
    </Content.Right>
  </Root>
)

export default Home
