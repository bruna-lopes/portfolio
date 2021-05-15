import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
import { Colors } from '../../../shared/colors';
import { adjustFont } from '../../../shared/functions';
import { Media } from '../../../shared/media';

type Props = {
  dark: string;
};

export const IntroducaoContainer = styled.div<Props>`
  height: 100vh;
  display: flex;
  align-items: center;

  ${({ dark }) =>
    dark === 'true'
      ? `background-color: ${Colors.whiteOverlay3};`
      : `background-color: ${Colors.blackOverlay};`}

  @media ${Media.maxWidth.sm} {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
`;

export const TextoContainer = styled.div`
  margin-left: 20px;
  width: 50%;
  text-align: center;

  & p {
    font-size: ${adjustFont(35)}px;
  }

  & strong {
    font-weight: 600;
  }

  @media ${Media.maxWidth.sm} {
    width: 70%;
  }
`;

export const BotaoLinkedin = styled(Button)<Props>`
  &.MuiButton-root {
    margin: 30px;
    text-transform: inherit;

    ${({ dark }) =>
      dark === 'true'
        ? `background-color: ${Colors.fontColorDark}; color: ${Colors.fontColor};`
        : `background-color: ${Colors.fontColor}; color: ${Colors.whiteOverlay};`}

    :hover {
      ${({ dark }) =>
        dark === 'true'
          ? `background-color: ${Colors.hoverPinkDark}; `
          : `background-color: ${Colors.hoverPink}; `}
    }
  }
`;
