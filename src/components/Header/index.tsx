import * as React from 'react'

import { Logo, Nav, Root } from './elements'

const Header = ({ withText }: { withText: boolean }) => (
  <Root>
    <Nav.Left>
      <Logo.Root to="/">
        <Logo.Image src={require('./logo.svg')} alt="WidgetBot" />
        {withText && <Logo.Title>WidgetBot</Logo.Title>}
      </Logo.Root>
    </Nav.Left>
    <Nav.Right>
      <Nav.Action to="/patron/">Patron</Nav.Action>
      <Nav.Action to="/crate/">Crate</Nav.Action>
      <Nav.Href href="https://docs.widgetbot.io" target="_blank" rel="noopener">
        Docs
      </Nav.Href>
      <Nav.Href href="https://discord.gg/zyqZWr2" target="_blank" rel="noopener">
        Discord
      </Nav.Href>
      {/* <Nav.Href href="https://github.com/widgetbot-io/" target="_blank">
        GitHub
      </Nav.Href> */}
    </Nav.Right>
  </Root>
)

export default Header
