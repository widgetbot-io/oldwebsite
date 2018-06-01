import * as React from 'react'

import { Root, Title, Content, Text } from '../../styles'

const Terms = () => (
  <Root>
    <Content.Left>
      <Title.Primary>Terms and Conditions</Title.Primary>
    </Content.Left>
    <Content.Right>
      <Text.Block>
        By using WidgetBot.io or any services associated with it, you agree to
        abide by the Terms outlined below.
      </Text.Block>

      <Text.Block>
        <Text.Heading>Availability</Text.Heading>
        WidgetBot.io does not guarantee availability for any of its Products
        under any circumstances and may be unavailable for any period of time.
      </Text.Block>

      <Text.Block>
        <Text.Heading>Premium Use</Text.Heading>
        Features that are available after paying certain fees in any order are
        "Premium Features". Premium Features as well as their price are subject
        to change or removal without prior announcement. The Pricing Tiers
        outlined
        <span>
          {' '}
          <a href="/patron" target="_blank">
            here
          </a>{' '}
        </span>
        can change at any time (price change, removal, different features)
        without prior announcement.
      </Text.Block>

      <Text.Block>
        <Text.Heading>Copyright</Text.Heading>
        WidgetBot.io protected by copyright policies of the European Union. Any
        material (code, images, etc.) produced by WidgetBot may strictly be used
        under the principles of fair use
      </Text.Block>
    </Content.Right>
  </Root>
)

export default Terms
