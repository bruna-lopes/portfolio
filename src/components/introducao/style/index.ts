import styled from '@emotion/styled';
import { Button } from '@material-ui/core';
import { Colors } from '../../../shared/colors';
import { adjustFont } from '../../../shared/functions';
import { Media } from '../../../shared/media';

export const IntroducaoContainer = styled.div`
  background-color: ${Colors.blackOverlay};
  height: 100vh;
  display: flex;
  align-items: center;

  @media ${Media.maxWidth.sm} {
    height: 80vh;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const TextoContainer = styled.div`
  margin-left: 20px;
  width: 50%;
  text-align: center;

  & p {
    font-size: ${adjustFont(30)}px;
  }

  & strong {
    font-weight: 600;
  }
`;

export const BotaoLinkedin = styled(Button)`
  &.MuiButton-root {
    margin: 30px;
    background-color: ${Colors.fontColor};
    color: ${Colors.whiteOverlay}; 
    text-transform: inherit;

    :hover {
      background-color: ${Colors.hoverPink};
    }
  }
`;
