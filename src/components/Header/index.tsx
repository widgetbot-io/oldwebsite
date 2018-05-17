import * as React from 'react'

import { Logo, Nav, Root } from './elements'

const Header = ({ withText }) => (
  <Root>
    <Nav.Left>
      <Logo.Root to="/">
        <Logo.Image src={require('./logo.svg')} />
        {withText && <Logo.Title>WidgetBot</Logo.Title>}
      </Logo.Root>
    </Nav.Left>
    <Nav.Right>
      <Nav.Action to="/api/">API</Nav.Action>
      <Nav.Action to="/crate/">Crate</Nav.Action>
      <Nav.Action to="/github/">GitHub</Nav.Action>
    </Nav.Right>
  </Root>
)

export default Header
