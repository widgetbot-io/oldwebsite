import * as React from 'react'

import Product, { Item, Tip } from '../components/Product'
import { Root } from '../styles'

const Pricing = () => (
  <Root>
    <Product
      name="Free"
      button="Get started"
      onClick={console.log}
      price={0}
      zIndex={1}
    >
      <Tip>Fully usable, feature-rich</Tip>
      <Item>Guest chat</Item>
      <Item>Channel switching</Item>
      <Item>5,000 requests a day</Item>
      <Item>
        100 concurrent connections, with realtime updates for all users
      </Item>
    </Product>

    <Product
      name="Supporter"
      onClick={() => window.open('https://www.patreon.com/bePatron?u=5594164')}
      price={2}
      zIndex={3}
    >
      <Tip>All that plus</Tip>
      <Item>15,000 requests a day</Item>
      <Item>
        500 concurrent connections, with realtime updates for all users
      </Item>
      <Item>Custom embed colors</Item>
      <Item>Embed analytics</Item>
    </Product>

    <Product
      name="Pro"
      onClick={() => window.open('https://www.patreon.com/bePatron?u=5594164')}
      price={5}
      zIndex={4}
      highlight={true}
    >
      <Tip>All that plus</Tip>
      <Item>45,000 requests a day</Item>
      <Item>
        1000 concurrent connections, with realtime updates for all users
      </Item>
      <Item>Custom embed CSS</Item>
      <Item>Instantly display an alert to all of your visitors</Item>
      <Item>Option to remove branding</Item>
    </Product>

    <Product
      name="Self-hosted"
      onClick={() => window.open('https://www.patreon.com/bePatron?u=5594164')}
      price={40}
      zIndex={2}
    >
      <Tip>Fast, packaged Node server</Tip>
      <Item>Unlimited requests</Item>
      <Item>Unlimited concurrent users</Item>
      <Item>Priority support</Item>
      <Item>Weekly server updates</Item>
      <Item>Link to your site on our homepage</Item>
    </Product>
  </Root>
)

export default Pricing
