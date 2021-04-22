import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import { DiCss3, DiHtml5, DiJsBadge, DiReact } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';
import { Colors } from '../../../shared/colors';
import { adjustAnimation, adjustFont } from '../../../shared/functions';
import { Media } from '../../../shared/media';

export const ConhecimentosContainer = styled.div`
  height: 85vh;
  background-color: ${Colors.blackOverlay};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const Titulo = styled.div`
  color: ${Colors.pink2};
  font-size: ${adjustFont(40)}px;
  font-weight: 700;
`;

export const StyledCard = styled(Card)`
  width: 150px;
  height: 150px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  &.MuiCard-root {
    background-color: ${Colors.pink2};
  }

  & h1 {
    text-align: center;
    color: ${Colors.pink3};
    font-size: ${adjustFont(16)}px;
  }

  & p {
    text-align: center;
    font-size: ${adjustFont(14)}px;
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
