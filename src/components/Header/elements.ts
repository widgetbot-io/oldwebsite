import Link from 'gatsby-link'
import styled from 'react-emotion'

export const Root = styled('header')`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  flex-shrink: 0;
`

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
      color: #6E84D2;
    }
  `
}

export const Logo = styled('img')`
  height: 50px;
  width: 50px;
`