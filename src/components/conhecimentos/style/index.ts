import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import { DiCss3, DiHtml5, DiJsBadge, DiReact } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { Colors } from '../../../shared/colors';
import { Media } from '../../../shared/media';

type Props = {
  dark: string;
  width?: string;
  height?: string;
};

export const ConhecimentosContainer = styled.div<Props>`
  min-height: 85vh;
  background-color: ${Colors.blackOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ dark }) =>
    dark === 'true'
      ? `background-color: ${Colors.whiteOverlay3};`
      : `background-color: ${Colors.blackOverlay};`}

  @media ${Media.maxWidth.sm} {
    min-height: 80vh;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70%;
  justify-content: center;

  @media ${Media.maxWidth.md} {
    width: 80%;
  }
`;

export const Titulo = styled.div<Props>`
  font-size: 40px;
  font-weight: 700;

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }

  ${({ dark }) =>
    dark === 'true' ? `color: ${Colors.pink1};` : `color: ${Colors.pink2};`}
`;

export const StyledCard = styled(Card)<Props>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  @media ${Media.maxWidth.ms} {
    width: 20vw;
    height: 20vw;
  }

  &.MuiCard-root {
    backdrop-filter: blur(11.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);

    ${({ dark }) =>
      dark === 'true'
        ? `background: ${Colors.blackOverlay2}; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);`
        : `background: ${Colors.whiteOverlay2}; box-shadow: 0 8px 32px 0 rgba(255, 255, 255, 0.3);`}
  }

  & h1 {
    text-align: center;
    font-size: 16px;

    @media ${Media.maxWidth.md} {
      font-size: 14px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 12px;
    }

    ${({ dark }) =>
      dark === 'true' ? `color: ${Colors.hoverPinkDark};` : `color: ${Colors.pink3};`}
  }

  & p {
    text-align: center;
    font-size: 14px;

    @media ${Media.maxWidth.md} {
      font-size: 12px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 10px;
    }

    ${({ dark }) =>
      dark === 'true' ? `color: ${Colors.fontColorDark};` : `color: ${Colors.fontColor};`}
  }
`;

export const IconeHTML = styled(DiHtml5)`
  font-size: 38px;
  color: ${Colors.orange};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
`;

export const IconeTS = styled(SiTypescript)`
  font-size: 35px;
  color: ${Colors.blue5};

  @media ${Media.maxWidth.md} {
    font-size: 30px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 25px;
  }
`;

export const IconeCSS = styled(DiCss3)`
  font-size: 38px;
  color: ${Colors.blue4};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
`;

export const IconeJS = styled(DiJsBadge)`
  font-size: 35px;
  color: ${Colors.yellow};

  @media ${Media.maxWidth.md} {
    font-size: 30px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 25px;
  }
`;

export const IconeReact = styled(DiReact)`
  font-size: 40px;
  color: ${Colors.blue6};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
`;
