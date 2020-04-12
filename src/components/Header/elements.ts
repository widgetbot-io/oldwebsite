import { Link } from "react-router-dom";
import styled from "@emotion/styled";

export const Root = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  width: 100%;
  flex-shrink: 0;
  z-index: 1;
  transition: transform 0.5s ease;
`;

export class Logo {
  static Root = styled(Link)`
    display: flex;
    height: 50px;
    text-decoration: none;
    user-select: none;
    cursor: pointer;
  `;

  static Title = styled.h1`
    margin: 0;
    line-height: 50px;
    font-weight: 400;
    font-size: 1.4rem;
    margin-left: 15px;
    margin-bottom: 9px;
    text-shadow: rgba(0, 0, 0, 0.7) 0px 0px 50px;
  `;

  static Image = styled.img`
    height: 100%;
    width: 50px;
  `;
}

export class Nav {
  static Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1 1 auto;
  `;

  static Right = styled.div`
    display: flex;
    align-items: center;
  `;

  static Action = styled(Link)`
    display: inline-flex;
    align-items: center;
    font-size: 1.125rem;
    color: white;
    font-weight: 400;
    transition: color 0.2s ease;
    text-decoration: none;
    margin: 0px 1rem;

    &:hover {
      color: #6e84d2;
    }
  `;

  static Href = styled.a(Nav.Action.withComponent("a"));
}
