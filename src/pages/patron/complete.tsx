import * as React from 'react'
import { CardElement, Elements, injectStripe } from 'react-stripe-elements'

import { Root } from '../../styles'

class _CardForm extends React.Component<any> {
  handleSubmit = ev => {
    ev.preventDefault()
    this.props.stripe.createToken().then(payload => console.log(payload))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Card details
          <CardElement
            style={{
              base: {
                fontSize: '18px',
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, Menlo, monospace',
                '::placeholder': {
                  color: '#aab7c4'
                }
              },
              invalid: {
                color: '#9e2146'
              }
            }}
          />
        </label>
        <button>Pay</button>
      </form>
    )
  }
}

const CardForm = injectStripe(_CardForm)

const Patron = () => (
  <Elements>
    <Root>
      hi <CardForm />
    </Root>
  </Elements>
)

export default Patron
