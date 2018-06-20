import * as URLSearchParams from 'url-search-params'
import * as React from 'react'
import { CardElement, Elements, injectStripe } from 'react-stripe-elements'

import { Root } from '../../styles'
import {
  Form,
  Card,
  Purchase,
  Seperator,
  Paragraph,
  Title
} from '../../styles/patron'
import { navigateTo } from 'gatsby-link'
import { products } from '.'
import Product from '../../components/Product'
import {} from '../../styles/crate'

class _CardForm extends React.Component<any> {
  handleSubmit = ev => {
    ev.preventDefault()
    this.props.stripe.createToken().then(payload => console.log(payload))
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Title>Card details</Title>
        <Paragraph>Your payment will be securely processed by Stripe</Paragraph>
        <Card>
          <CardElement
            style={{
              base: {
                fontSize: '18px',
                color: '#fff',
                letterSpacing: '0.025em',
                fontFamily: `"Helvetica Neue", Helvetica, sans-serif`,
                fontWeight: 200,
                '::placeholder': {
                  color: 'rgba(255, 255, 255, 0.6)'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }}
          />
          <Purchase>Subscribe</Purchase>
        </Card>
      </Form>
    )
  }
}

const CardForm = injectStripe(_CardForm)

const Patron = ({ location }) => {
  const params = new URLSearchParams(location.search.slice(1))
  const product = products.find(product => product.id === params.get('product'))

  if (!product) {
    navigateTo('..')
    return null
  }

  return (
    <Elements>
      <Root>
        <Seperator.Left>
          <Product {...product} />
        </Seperator.Left>
        <Seperator.Right>
          <CardForm product={product} />
        </Seperator.Right>
      </Root>
    </Elements>
  )
}

export default Patron
