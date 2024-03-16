import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Media } from '../../../shared/media';

export const IntroducaoContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundOverlay};

  @media ${Media.maxWidth.sm} {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding-top: 10vh;
  }
`;

export const TextoContainer = styled.div`
  margin-left: 20px;
  width: 50%;
  text-align: center;

  & p {
    font-size: 35px;

    @media ${Media.maxWidth.md} {
      font-size: 30px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 25px;
    }
  }

  & strong {
    font-weight: 600;
  }

  @media ${Media.maxWidth.sm} {
    width: 70%;
  }
`;

export const BotaoLinkedin = styled(Button)`
  &.MuiButton-root {
    margin: 30px;
    text-transform: inherit;
    background-color: ${(props) => props.theme.botaoInBackground};
    color: ${(props) => props.theme.botaoInColor};

    :hover {
      background-color: ${(props) => props.theme.botaoInBackgroundHover};
    }
  }
`;
