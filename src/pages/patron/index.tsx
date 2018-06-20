import * as React from 'react'

import Product, { Item, Tip } from '../../components/Product'
import { Root } from '../../styles'
import { navigateTo } from 'gatsby-link'

export const products = [
  {
    name: 'Free',
    id: 'free',
    processor: false,
    button: 'Get started',
    price: 0,
    zIndex: 1,
    tip: 'Fully usable, feature-rich',
    features: [
      'Guest chat',
      'Channel switching',
      '5,000 requests a day',
      '100 concurrent connections, with realtime updates for all users'
    ]
  },
  {
    name: 'Supporter',
    id: 'supporter',
    processor: 'patreon',
    button: 'Subscribe',
    price: 2,
    zIndex: 3,
    tip: 'All that plus',
    features: [
      '15,000 requests a day',
      '500 concurrent connections, with realtime updates for all users',
      'Custom embed colors',
      'Embed analytics'
    ]
  },
  {
    name: 'Pro',
    id: 'pro',
    processor: 'patreon',
    button: 'Subscribe',
    highlight: true,
    price: 5,
    zIndex: 4,
    tip: 'All that plus',
    features: [
      '45,000 requests a day',
      '1000 concurrent connections, with realtime updates for all users',
      'Custom embed CSS',
      'Instantly display an alert to all of your visitors',
      'Option to remove branding'
    ]
  },
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
  }
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
          product.processor === 'stripe'
            ? navigateTo(`./complete/?product=${product.id}`)
            : product.processor === 'patreon'
              ? window.open('https://www.patreon.com/bePatron?u=5594164')
              : navigateTo('/')
        }
      />
    ))}
  </Root>
)

export default Patron
