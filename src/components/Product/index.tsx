import * as React from 'react'

import { Button, Contract, Details, Price, Root, Title } from './elements'

export { Item, Tip } from './elements'

interface Props {
  name: string
  price: number
  zIndex: number
  onClick: Function
  button?: string
  highlight?: boolean
}

class Product extends React.PureComponent<Props> {
  render() {
    const { name, price, zIndex, button, onClick, highlight } = this.props
    return (
      <Root position={zIndex} highlight={highlight}>
        <Title>{name}</Title>
        <Price>
          {`€${price}`}
          <Contract>{`/mo`}</Contract>
        </Price>
        <Details>{this.props.children}</Details>
        <Button onClick={() => onClick()}>{button || `Purchase`}</Button>
      </Root>
    )
  }
}

export default Product
