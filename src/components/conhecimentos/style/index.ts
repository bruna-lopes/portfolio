import { Card } from '@material-ui/core';
import { DiCss3, DiHtml5, DiJava, DiJsBadge, DiNodejs, DiReact } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import styled from 'styled-components';
import { Colors } from '../../../shared/colors';
import { Media } from '../../../shared/media';

type Props = {
  width?: string;
  height?: string;
};

export const ConhecimentosContainer = styled.div<Props>`
  min-height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundOverlay};
  color: ${(props) => props.theme.conhecimentosContainerBackground};

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
  color: ${(props) => props.theme.tituloConhecimentos};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
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
    background: ${(props) => props.theme.cardBackground};
    box-shadow: 0 8px 32px 0 ${(props) => props.theme.boxShadowCard};
  }

  & h1 {
    text-align: center;
    font-size: 18px;
    color: ${(props) => props.theme.tituloCard};

    @media ${Media.maxWidth.md} {
      font-size: 14px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 12px;
    }
  }
`;

export const IconeHTML = styled(DiHtml5)`
  font-size: 45px;
  color: ${Colors.orange};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
`;

export const IconeTS = styled(SiTypescript)`
  font-size: 40px;
  color: ${Colors.blue5};

  @media ${Media.maxWidth.md} {
    font-size: 30px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 25px;
  }
`;

export const IconeCSS = styled(DiCss3)`
  font-size: 45px;
  color: ${Colors.blue4};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
`;

export const IconeJS = styled(DiJsBadge)`
  font-size: 40px;
  color: ${Colors.yellow};

  @media ${Media.maxWidth.md} {
    font-size: 30px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 25px;
  }
`;

export const IconeReact = styled(DiReact)`
  font-size: 50px;
  color: ${Colors.blue6};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
`;

export const IconeFreeMarker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }

  img {
    width: 58px;
    height: 35px;
    margin: 0;
  }
`;

export const IconeJava = styled(DiJava)`
  font-size: 55px;
  color: ${(props) => props.theme.javaIconColor};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
`;

export const IconeNode = styled(DiNodejs)`
  font-size: 65px;
  color: ${Colors.green};

  @media ${Media.maxWidth.md} {
    font-size: 35px;
  }
  @media ${Media.maxWidth.ms} {
    font-size: 30px;
  }
`;
