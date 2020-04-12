import * as React from 'react'
import Product from '../../components/Product'
import { Root } from '../../styles'

export const products = [
  {
    name: 'Free',
    id: 'free',
    processor: 'tutorial',
    button: 'Get started',
    price: 0,
    zIndex: 1,
    tip: "Use all of WidgetBot's core features for free!",
    features: [
      'Read and send messages (optional)',
      'Multiple channels (optional)',
      'Unlimited widgets',
      'Easy to set up',
      'Fast support',
      "You're awesome"
    ]
  },
  {
    name: 'WidgetBot Red',
    id: 'red',
    processor: 'red',
    button: 'Click Me!',
    price: 2.5,
    zIndex: 3,
    tip:
      'For just $2.50 you can get the following snazzy additions to your widget!',
    features: [
      'All Free features!',
      'Custom colors for your widget',
      'The ability to remove the branding from the widget',
      'Role in Discord',
      "You're more awesome"
    ]
  },
  {
    name: 'WidgetBot Gold',
    id: 'gold',
    processor: 'gold',
    button: 'Click Me!',
    highlight: true,
    price: 7.5,
    zIndex: 4,
    tip:
      'If you want to support us even more and allow us to grow and get better we will bless you with the following perks, all for $7.50!',
    features: [
      'All the amazing features listed in the first tier!!',
      'Read-only mode to restrict your channels from angry people.',
      'Restrict your guild to your domain to stop those pesky impersonators.',
      'A powerful CSS customization system with beautiful docs to guide you at every step',
      'Role in Discord',
      "You're even more awesome"
    ]
  },
  {
    name: 'WidgetBot Emerald',
    id: 'emerald',
    processor: 'emerald',
    button: 'Click Me!',
    price: 15,
    zIndex: 2,
    tip: 'Support us a bit more to unlock more cool features for your widget!',
    features: [
      'All Red and Gold perks!',
      'Let users on your site directly upload files from the widget, Useful for screenshots! (Coming after release)',
      'Set a default avatar for all guests!',
      'Role in Discord',
      "You're the best, thanks for supporting us!"
    ]
  }
];

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
        highlight={false}
        onClick={() =>
          product.processor === 'red'
              ? window.open('https://www.patreon.com/join/widgetbot/checkout?rid=4124117')
              : product.processor === 'gold'
              ? window.open('https://www.patreon.com/join/widgetbot/checkout?rid=4124125')
              : product.processor === 'emerald'
                  ? window.open('https://www.patreon.com/join/widgetbot/checkout?rid=4124130')
                  : (window.location.href = 'https://docs.widgetbot.io/tutorial')
        }
      />
    ))}
  </Root>
);

export default Patron
