import WidgetBot from '@widgetbot/react-embed'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'

export const Root = styled('div')`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export namespace Content {
  export const Left = styled('div')`
    width: 40%;
    margin: 0 30px;
  `

  export const Right = styled('div')`
    margin: 0 30px;
    width: 60%;
  `
}

export namespace Title {
  export const Primary = styled('h1')`
    margin: 0 0 1.0875rem;
    font-weight: 300;
    font-size: 4rem;
    text-shadow: rgba(0, 0, 0, 0.6) 0px 0px 3px;
  `

  export const Secondary = styled('h2')`
    margin: 0 0 1.0875rem;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 1.2;
    padding-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
  `

  export const Tertiary = styled('h3')`
    margin: 0 0 1.0875rem;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.2;
    padding-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
  `
}

export namespace Button {
  const Base = css`
    display: inline-block;
    position: relative;
    font-weight: 400;
    font-size: 1.25rem;
    color: white;
    text-align: center;
    text-transform: uppercase;
    border: none;
    outline: none;
    padding: 0.75em 1.5em;
    border-radius: 4px;
    text-decoration: none;
    width: 220px;

    user-select: none;
    cursor: pointer;
  `

  export const Primary = styled('a')`
    ${Base};

    background: linear-gradient(45deg, rgb(114, 137, 218), rgb(102, 123, 193));
    box-shadow: rgba(114, 137, 218, 0.7) 0px 0px 100px;
  `

  export const Secondary = styled('a')`
    ${Base};

    color: rgb(114, 137, 218);
    text-shadow: rgba(114, 137, 218, 0.7) 0px 0px 50px;
  `
}

export const Embed = styled(WidgetBot)`
  height: 70vh;
  width: 100%;
  max-height: 400px;
  background-color: #36393e;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  border-radius: 8px;
  overflow: hidden;
`
export namespace List {
  export const Unordered = styled('ul')`
    margin: 0;
  `
}

export namespace Text {
  export const Block = styled('div')`
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.9);
  `

  export const Heading = styled(Title.Tertiary)`
    padding: 0.3rem;
    margin: 0;
  `
}
