import styled from '@emotion/styled';
import { AppBar } from '@material-ui/core';
import { Colors } from '../../../shared/colors';
import { Media } from '../../../shared/media';

type MainProps = {
  dark: string;
};
export const MenuContainer = styled(AppBar)<MainProps>`
  &.MuiAppBar-root {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 15vh;
    position: fixed;
    flex: 1;

    @media ${Media.maxWidth.sm} {
      height: 10vh;
    }

    ${({ dark }) =>
      dark === 'true'
        ? `background-color: ${Colors.blackOverlay2}; color: ${Colors.fontColorDark};`
        : `background-color: ${Colors.whiteOverlay}; color: ${Colors.fontColor};`}
  }
`;

export const AnimationContainer = styled.div`
  margin-right: 20px;
`;

export const OpcoesContainer = styled.div<MainProps>`
  width: 60%;
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 5px;

  @media ${Media.maxWidth.md} {
    width: 70%;
    margin: 4vw;
    justify-content: flex-start;
  }

  & span {
    cursor: pointer;
    margin: 1vw;
    font-size: 20px;

    @media ${Media.maxWidth.md} {
      font-size: 18px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 16px;
    }

    :hover {
      ${({ dark }) =>
        dark === 'true'
          ? `color: ${Colors.hoverPinkDark};`
          : `color: ${Colors.hoverPink};`}
    }

    @media ${Media.maxWidth.sm} {
      display: none;
    }
  }

  & strong {
    cursor: pointer;
    margin: 0.5vw;
    font-size: 25px;
    padding-left: 0.3vw;

    @media ${Media.maxWidth.md} {
      font-size: 20px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 18px;
    }

    :hover {
      ${({ dark }) =>
        dark === 'true'
          ? `color: ${Colors.hoverPinkDark};`
          : `color: ${Colors.hoverPink};`}
    }
  }
`;

export const IconeImg = styled.img`
  width: 25px;
  height: 25px;

  @media ${Media.maxWidth.md} {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  @media ${Media.maxWidth.ms} {
    width: 18px;
    height: 18px;
    margin: 0 5px;
  }
`;
