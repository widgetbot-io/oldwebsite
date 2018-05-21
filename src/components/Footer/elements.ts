import styled, { css } from '../../modules/emotion'

export const Root = styled('footer')`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background-color: #111213;
  box-shadow: 0px -1px 54px rgba(0, 0, 0, 0.3);
  transform: translateY(100px);
  padding: 20px 30px;
  transition: opacity 0.2s ease;

  ${({ theme }) =>
    !theme.footer &&
    css`
      opacity: 0;
    `};
`
