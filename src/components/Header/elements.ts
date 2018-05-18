import Link from 'gatsby-link'
import styled from 'react-emotion'

export const Root = styled('header')`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  flex-shrink: 0;
`

export namespace Logo {
  export const Root = styled(Link)`
    display: flex;
    height: 50px;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
  `

  export const Title = styled('h1')`
    margin: 0;
    line-height: 50px;
    font-weight: 400;
    font-size: 1.4rem;
    margin-left: 15px;
    margin-bottom: 9px;
    text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 50px;
  `

  export const Image = styled('img')`
    height: 100%;
    width: 50px;
  `
}

export namespace Nav {
  export const Left = styled('div')`
    display: flex;
    align-items: center;
    flex: 1 1 auto;
  `

  export const Right = styled('div')`
    display: flex;
    align-items: center;
  `

  export const Action = styled(Link)`
    display: inline-flex;
    align-items: center;
    font-size: 1.125rem;
    color: white;
    font-weight: 400;
    transition: color 0.2s ease;
    text-decoration: none;
    margin: 0px 1rem;

    &:hover {
      color: #6e84d2;
    }
  `

  const href = Action.withComponent('a')
  export const Href = styled<any, 'a'>(href)``
}
