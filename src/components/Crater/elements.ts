import styled, { css } from 'react-emotion'

interface Props {
  proportions: number[]
  fadeIn: boolean
}

export const Root = styled<Props, 'svg'>('svg')`
  height: 434px;
  width: 434px;
  overflow: visible;
  opacity: ${({ proportions }) => (proportions ? 1 : 0)};
  transition: opacity 0.3s ease;

  .crater > path:not(.background) {
    transition: opacity 0.3s ease,
      transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    opacity: ${({ fadeIn }) => (fadeIn ? 1 : 0)};
    transform: ${({ fadeIn }) => (fadeIn ? '' : `translate(-200px, -200px)`)};
  }

  .background,
  .button {
    transform-origin: 77% 78%;
    transform: scale(0.4) rotate(45deg);
    transition: ${({ fadeIn }) => fadeIn && `transform 1.4s ease`};

    ${({ fadeIn, proportions }) => {
      if (fadeIn) {
        return css`
          transform: initial;
        `
      }

      if (proportions) {
        const [x, y] = proportions
        return css`
          transform: translate(${x}px, ${y}px) scale(0.4) rotate(405deg);
        `
      }

      return null
    }};
  }
`

export const Crater = styled('g')``

export const Button = styled('g')``
