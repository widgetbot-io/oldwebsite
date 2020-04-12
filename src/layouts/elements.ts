import { css } from "emotion";
import styled from '@emotion/styled';

interface Props {
    theme: {
        footer: string;
    }
}

export const Root = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 0px 1.0875rem 1.45rem;
  transition: background-color 0.2s ease;
  ${({ theme }: Props) => theme.footer && css`background-color: rgba(0, 0, 0, 0.4);`};
`;

// export const Stars = styled(Particles)`
//   width: 100%;
//   height: 99%;
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: -1;
// `;

export const Content = styled.main<Props>`
  display: flex;
  height: 100%;
  width: 100%;
  transition: box-shadow 0.1s linear, transform 0.5s ease,
    background-color 0.2s ease;

  ${({ theme }: Props) =>
    theme.footer &&
    css`
      cursor: pointer;
      transform: translateY(-150px) scale(0.8);
      box-shadow: 0px 22px 54px rgba(0, 0, 0, 0.5);
      border-radius: 10px;
      background-color: #282a2d;

      & > * {
        pointer-events: none !important;
      }
    `};
`;
