import * as React from 'react'

import { Root, Title, Content, List, Text } from '../../styles'

const Privacy = () => (
  <Root>
    <Content.Left>
      <Title.Primary>Privacy</Title.Primary>
    </Content.Left>
    <Content.Right>
      <Title.Tertiary>
        WidgetBot is an independent team of developers and cares about your
        privacy. As we do not run ads, it is not in our interest to know who you
        are and follow you around the internet.
      </Title.Tertiary>
      <Text.Block>
        What we store about you:
        <List.Unordered>
          <li>Your IP address</li>
        </List.Unordered>
      </Text.Block>
      <Text.Block>
        What we use it for:
        <List.Unordered>
          <li>Abuse prevention</li>
          <li>Identification</li>
        </List.Unordered>
      </Text.Block>
      <Text.Block>
        What we <b>don't</b> use it for:
        <List.Unordered>
          <li>Tracking you in any way</li>
        </List.Unordered>
      </Text.Block>
      <Text.Block>
        Third party policies that also apply:
        <List.Unordered>
          <li>
            <a href="https://sentry.io/privacy/" target="_blank">
              Sentry Error Logging
            </a>
          </li>
        </List.Unordered>
      </Text.Block>

      {/*
      <Text.Block>
        Everything will be deleted after 6 hours of inactivity
      </Text.Block>
      */}
    </Content.Right>
  </Root>
)

export default Privacy
