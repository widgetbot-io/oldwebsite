import * as React from 'react'

import { Button, Content, Embed, Root, Title } from '../styles'

const Home = () => (
  <Root>
    <Content.Left>
      <div style={{ opacity: 0.3 }}>
        This website is currently under construction!
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
    </Content.Left>
    <Content.Right>
      <Embed>
        <iframe src="https://canary.widgetbot.io/channels/299881420891881473/355719584830980096/" />
      </Embed>
    </Content.Right>
  </Root>
)

export default Home
