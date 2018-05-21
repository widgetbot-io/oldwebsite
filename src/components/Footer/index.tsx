import * as React from 'react'

import {
  Chin,
  Copyright,
  Credits,
  Links,
  Place,
  Root,
  Section
} from './elements'

const Footer = () => (
  <Root>
    <Links>
      <Section name="WidgetBot">
        <Place.Href href="https://status.widgetbot.io" target="_blank">
          Server status
        </Place.Href>
      </Section>
      <Section name="About">
        <Place.Href href="https://github.com/widgetbot-io" target="_blank">
          GitHub
        </Place.Href>
        <Place.Href href="https://discord.gg/zyqZWr2" target="_blank">
          Discord server
        </Place.Href>
        <Place.Href href="mailto:hello-widgetbot@samdd.me" target="_blank">
          Contact us
        </Place.Href>
      </Section>
      <Section name="Legal">
        <Place.Route to="/legal/privacy-policy/">Privacy</Place.Route>
        <Place.Route to="/legal/terms-and-conditions/">
          Terms and conditions
        </Place.Route>
      </Section>
    </Links>
    <Chin>
      <Copyright
      >{`© ${new Date().getFullYear()} WidgetBot. Not affiliated with Discord`}</Copyright>
      <Credits>
        By <a href="https://samdd.me">Sam Denty</a> and{' '}
        <a href="https://voakie.com">Voakie</a>
      </Credits>
    </Chin>
  </Root>
)

export default Footer
