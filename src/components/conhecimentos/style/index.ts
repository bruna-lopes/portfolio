import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import { DiCss3, DiHtml5, DiJsBadge, DiReact } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { Colors } from '../../../shared/colors';
import { adjustComponent, adjustFont } from '../../../shared/functions';
import { Media } from '../../../shared/media';

type Props = {
  dark: string;
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
    min-height: 70vh;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: center;

  @media ${Media.maxWidth.md} {
    width: 70%;
  }
`;

export const Titulo = styled.div<Props>`
  font-size: ${adjustFont(40)}px;
  font-weight: 700;

  ${({ dark }) =>
    dark === 'true' ? `color: ${Colors.pink1};` : `color: ${Colors.pink2};`}
`;

export const StyledCard = styled(Card)<Props>`
  width: ${adjustComponent(150)}px;
  height: ${adjustComponent(150)}px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &.MuiCard-root {
    ${({ dark }) =>
      dark === 'true'
        ? `background-color: ${Colors.blackOverlay2};`
        : `background-color: ${Colors.whiteOverlay2};`}
  }

  & h1 {
    text-align: center;
    font-size: ${adjustFont(16)}px;

    ${({ dark }) =>
      dark === 'true' ? `color: ${Colors.hoverPinkDark};` : `color: ${Colors.pink3};`}
  }

  & p {
    text-align: center;
    font-size: ${adjustFont(14)}px;

    ${({ dark }) =>
      dark === 'true' ? `color: ${Colors.fontColorDark};` : `color: ${Colors.fontColor};`}
  }
`;

export const IconeHTML = styled(DiHtml5)`
  font-size: ${adjustFont(38)}px;
  color: ${Colors.orange};
`;

export const IconeTS = styled(SiTypescript)`
  font-size: ${adjustFont(35)}px;
  color: ${Colors.blue5};
`;

export const IconeCSS = styled(DiCss3)`
  font-size: ${adjustFont(38)}px;
  color: ${Colors.blue4};
`;

export const IconeJS = styled(DiJsBadge)`
  font-size: ${adjustFont(35)}px;
  color: ${Colors.yellow};
`;

export const IconeReact = styled(DiReact)`
  font-size: ${adjustFont(40)}px;
  color: ${Colors.blue6};
`;
