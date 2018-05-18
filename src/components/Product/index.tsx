import * as React from 'react'

import { Contract, Details, Price, Root, Title } from './elements'

export { Item, Tip } from './elements'

interface Props {
  name: string
  price: number
  zIndex: number
}

class Product extends React.PureComponent<Props> {
  render() {
    const { name, price, zIndex } = this.props
    return (
      <Root position={zIndex}>
        <Title>{name}</Title>
        <Price>
          {`€${price}`}
          <Contract>{`/mo`}</Contract>
        </Price>
        <Details>{this.props.children}</Details>
      </Root>
    )
  }
}

export default Product
