import Link from 'gatsby-link'
import * as React from 'react'
import { Nav, Logo, Root } from './elements'

const Header = () => (
  <Root>
    <Nav.Left>
      <Link to="/">
        <Logo src={require('./logo.svg')} />
      </Link>
    </Nav.Left>
    <Nav.Right>
      <Nav.Action to="/">API</Nav.Action>
      <Nav.Action to="/">Crate</Nav.Action>
      <Nav.Action to="/">GitHub</Nav.Action>
    </Nav.Right>
  </Root>
)

export default Header
