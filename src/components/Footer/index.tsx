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
        <Place.Href href="https://up.widgetbot.io">
          Service Uptime
        </Place.Href>
      </Section>
      <Section name="Project">
        <Place.Href href="https://github.com/widgetbot-io" target="_blank" rel="noopener">
          GitHub
        </Place.Href>
        <Place.Href href="mailto:contact@widgetbot.io" target="_blank" rel="noopener">
          Email
        </Place.Href>
        <Place.Href href="https://discord.gg/zyqZWr2" target="_blank" rel="noopener">
          Discord
        </Place.Href>
      </Section>
      <Section name="Legal">
        <Place.Route to="/legal/privacy-policy/">Privacy</Place.Route>
        <Place.Route to="/legal/terms-and-conditions/">Terms</Place.Route>
      </Section>
    </Links>
    <Chin>
      <Copyright
      >{`© ${new Date().getFullYear()} Venix. Not affiliated with Discord.`}</Copyright>
      <Credits>
        {`A project by Venix`}
      </Credits>
    </Chin>
  </Root>
)

export default Footer
