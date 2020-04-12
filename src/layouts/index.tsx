import "./index.scss";
import 'regenerator-runtime/runtime'

import ApolloClient from 'apollo-boost'
import { ThemeProvider } from 'emotion-theming'
import * as React from 'react'
import { Helmet } from 'react-helmet'
//import { StripeProvider } from 'react-stripe-elements'

import Footer from '../components/Footer'
import Header from '../components/Header'
import { Content, Root } from './elements'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "../pages";
import Patron from "../pages/patron";
import Crate from "../pages/crate";

export let client: ApolloClient<any>;

export let crate: any;

if (typeof window !== 'undefined') {
  client = new ApolloClient({
    uri: 'https://e.widgetbot.io/api/graphql',
    connectToDevTools: true
  } as any);

  // Crate
  {
    const css = String.raw;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3';
    document.body.appendChild(script);

    script.onload = () => {
      if (!crate) {
        crate = new (window as any).Crate({
          server: '299881420891881473',
          channel: '355719584830980096',
          shard: 'https://e.widgetbot.io',
          css: css`
            * {
              font-family: Whitney, 'Helvetica Neue', Helvetica, Arial,
                'Lucida Grande', sans-serif;
            }
          `
        });

        crate.notify({
          content: 'Welcome! Click below to test out [Crate](/crate/)',
          timeout: 20 * 1000,
          avatar:
            'https://cdn.discordapp.com/avatars/510537630039932948/0e772cd25fc952ccb631caf1bee82864.png?size=256'
        });
      }
    }
  }
}

class App extends React.Component<any> {
  state = {
    footer: false,
    stripe: null
  };
  scrollListener: any;
  scrolling = false;

  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={this.state}>
          <Root>
            <Helmet
              title="WidgetBot"
              meta={[
                {
                  name: 'description',
                  content: 'Discord widgets for your website'
                },
                {
                  name: 'keywords',
                  content:
                    'discord, widgets, widgetbot, titanembeds, titanembeds alternatives, samdd, voakie, embed discord on website'
                }
              ]}
              link={[
                {
                  rel: 'shortcut icon',
                  type: 'image/png',
                  href:
                    'https://cdn.discordapp.com/avatars/510537630039932948/0e772cd25fc952ccb631caf1bee82864.png?size=256'
                }
              ]}
              htmlAttributes={{ lang: 'en-US' }}
            />
            <Header withText={window.location.pathname !== '/'} />
            {/*<StripeProvider stripe={this.state.stripe}>*/}
            <Content onClick={() => this.footer(false)}>
              <Switch>
                <Route exact path="/"><Home/></Route>
                <Route exact path="/patron"><Patron/></Route>
                <Route exact path="/crate"><Crate/></Route>
              </Switch>
            </Content>
            {/*</StripeProvider>*/}
            <Footer />
          </Root>
        </ThemeProvider>
      </BrowserRouter>
    )
  }

  componentDidMount() {
    this.scrollListener = this.onScroll.bind(this);
    window.addEventListener('scroll', this.scrollListener)

    //this.registerStripe()
  }

  /*registerStripe() {
    console.log('Using production key')
    this.setState({
      stripe: (window as any).Stripe('pk_live_ktph9y9wUoV4Q4dgDxPc89Pv')
    })
  }*/

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollListener)
  }

  onScroll() {
    const threshold = 80
    const element = document.documentElement // event.target

    const atBottom =
      element.scrollHeight - element.scrollTop <=
      element.clientHeight + threshold;

    this.footer(atBottom && !this.scrolling)
  }

  footer(visible: boolean) {
    if (this.state.footer === visible) return;

    this.setState({ footer: visible });

    window.scroll({
      behavior: 'smooth',
      top: visible ? document.body.clientHeight : 0,
      left: 0
    });

    if (!visible) {
      this.scrolling = true;
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      setTimeout(() => (this.scrolling = false), 200);
    }
  }
}

export default App;
