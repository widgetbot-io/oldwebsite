import * as React from 'react'

import Product, { Item, Tip } from '../../components/Product'
import { Root } from '../../styles'
import { navigateTo } from 'gatsby-link'

export const products = [
  {
    name: 'Free',
    id: 'free',
    processor: 'tutorial',
    button: 'Get started',
    price: 0,
    zIndex: 1,
    tip: 'Fully usable, feature-rich',
    features: [
      'Guest chat',
      'Channel switching'//,
      //'5,000 requests a day',
      //'100 concurrent connections, with realtime updates for all users'
    ]
  },
  {
    name: 'Patron',
    id: 'supporter',
    processor: 'patron',
    button: 'Subscribe',
    price: 2.5,
    zIndex: 3,
    tip: 'All that plus',
    features: [
      //'15,000 requests a day',
      //'500 concurrent connections, with realtime updates for all users',
      'Custom embed colors',
      'Patron role in Discord'
      //'Embed analytics'
    ]
  },
  {
    name: 'Ultimate Patron',
    id: 'pro',
    processor: 'ultimate',
    button: 'Subscribe',
    highlight: true,
    price: 5,
    zIndex: 4,
    tip: 'All that plus',
    features: [
      //'45,000 requests a day',
      //'1000 concurrent connections, with realtime updates for all users',
      'Custom embed CSS',
      //'Instantly display an alert to all of your visitors',
      'Option to remove branding',
      'Ultimate Patron role in Discord'
    ]
  }/*,
  {
    name: 'Self-hosted',
    id: 'self-hosted',
    processor: 'stripe',
    button: 'Subscribe',
    price: 40,
    zIndex: 2,
    tip: 'Fast, packaged Node server',
    features: [
      'Unlimited requests',
      'Unlimited concurrent users',
      'Priority support',
      'Weekly server updates',
      'Link to your site on our homepage'
    ]
  }*/
]

const Patron = () => (
  <Root
    style={{
      maxWidth: 1140,
      margin: '0 auto'
    }}
  >
    {products.map(product => (
      <Product
        {...product}
        key={product.id}
        onClick={() =>
          product.processor === 'patron'
            ? window.open('https://www.patreon.com/join/widgetbot/checkout?rid=2875090')
            : product.processor === 'ultimate'
              ? window.open('https://www.patreon.com/join/widgetbot/checkout?rid=1826876')
              : navigateTo('https://docs.widgetbot.io.tutorial')
        }
      />
    ))}
  </Root>
)

export default Patron
