import styled, { css } from 'react-emotion'
import { Button, Content, Title as $Title } from '.'

export namespace Seperator {
  export const Left = styled(Content.Left)`
    width: 30%;
  `

  export const Right = styled(Content.Right)`
    padding: 0 50px;
  `
}

export const Form = styled('form')`
  width: 100%;
`

export const Title = styled($Title.Secondary)`
  padding-bottom: 1rem;
`

export const Paragraph = styled('p')`
  margin-bottom: 3rem;
  opacity: 0.4;
`

export const Card = styled('div')`
  height: 40px;
  display: flex;

  .StripeElement {
    width: 100%;
    background: linear-gradient(45deg, rgb(168, 186, 251), rgb(137, 157, 226));
    height: 100%;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid transparent;
    box-shadow: rgba(114, 137, 218, 0.7) 0px 0px 70px;
    transition: box-shadow 150ms ease;
  }
`

const button = Button.Primary.withComponent('button')
export const Purchase = styled(button)`
  transition: all 150ms ease;
  background: none;
  background-color: rgb(102, 123, 193);
  padding: 0.75em 1em;
  font-size: 15px;
  margin-left: 15px;

  &:hover {
    transform: translateY(-1px);
    background-color: rgb(84, 101, 156);
  }
`
