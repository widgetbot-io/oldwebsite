import WidgetBot from '@widgetbot/react-embed';
import { css } from "emotion";
import styled  from '@emotion/styled';

export const Root = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export class Content {
  static Left = styled.div`
    width: 40%;
    margin: 0 30px;
  `;

  static Right = styled.div`
    margin: 0 30px;
    width: 60%;
  `;
}

export class Title {
  static Primary = styled.h1`
    margin: 0 0 1.0875rem;
    font-weight: 300;
    font-size: 4rem;
    text-shadow: rgba(0, 0, 0, 0.6) 0px 0px 3px;
  `;

  static Secondary = styled.h2`
    margin: 0 0 1.0875rem;
    font-weight: 300;
    font-size: 2.5rem;
    line-height: 1.2;
    padding-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
  `;

  static Tertiary = styled.h3`
    margin: 0 0 1.0875rem;
    font-weight: 300;
    font-size: 1.1rem;
    line-height: 1.2;
    padding-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.9);
  `;
}

export class Button {
  static Base = css`
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
  `;

  static Primary = styled.a`
    ${Button.Base};

    background: linear-gradient(45deg, rgb(114, 137, 218), rgb(102, 123, 193));
    box-shadow: rgba(114, 137, 218, 0.7) 0px 0px 100px;
  `;

  static Secondary = styled.a`
    ${Button.Base};

    color: rgb(114, 137, 218);
    text-shadow: rgba(114, 137, 218, 0.7) 0px 0px 50px;
  `
}

export const Embed = styled(WidgetBot)`
  height: 70vh;
  width: 100%;
  max-height: 500px;
  background: none;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

  border-radius: 8px;
  overflow: hidden;
`;
export class List {
  static Unordered = styled.ul`
    margin: 0;
  `;
}

export class Text {
  static Block = styled.div`
    margin-bottom: 10px;
    color: rgba(255, 255, 255, 0.9);
  `;
  static Heading = styled(Title.Tertiary)`
    padding: 0.3rem;
    margin: 0;
  `;
}
