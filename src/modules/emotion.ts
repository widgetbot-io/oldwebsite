import styled, { ThemedReactEmotionInterface } from 'react-emotion'

export * from 'react-emotion'

export interface Theme {
  footer: boolean
}

export default styled as ThemedReactEmotionInterface<Theme>
