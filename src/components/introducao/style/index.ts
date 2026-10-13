import { Button } from '@material-ui/core';
import styled from 'styled-components';
import { Media } from '../../../shared/media';

export const IntroducaoContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  align-items: center;
  background-color: ${(props) => props.theme.backgroundOverlay};

  @media ${Media.maxWidth.sm} {
    height: 100vh;
    grid-template-columns: 1fr;
    justify-content: center;
    padding-top: 10vh;
  }
`;

export const TextoContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 20px;
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
    justify-self: center;
  }
`;

export const BotaoLinkedin = styled(Button)`
  &.MuiButton-root {
    text-transform: inherit;
    background-color: ${(props) => props.theme.botaoInBackground};
    color: ${(props) => props.theme.botaoInColor};

    :hover {
      background-color: ${(props) => props.theme.botaoInBackgroundHover};
    }
  }
`;

export const BotoesContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 30px;
`;

export const BotaoCurriculo = styled.a`
  min-width: 64px;
  min-height: 36px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px 16px;
  box-sizing: border-box;
  border-radius: 4px;
  color: ${(props) => props.theme.botaoInColor};
  background-color: ${(props) => props.theme.botaoInBackground};
  text-decoration: none;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  :hover {
    background-color: ${(props) => props.theme.botaoInBackgroundHover};
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14),
      0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  }
`;
