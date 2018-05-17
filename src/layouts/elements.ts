import styled from 'react-emotion'
import Particles from 'react-particles-js'

export const Root = styled('div')`
  display: flex;
  flex-direction: column;
  padding: 0px 1.0875rem 1.45rem;
`

export const Stars = styled(Particles)`
  width: 100%;
  height: 99%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`
