import styled from '@emotion/styled';
import { Card } from '@material-ui/core';
import { Colors } from '../../../shared/colors';
import { adjustAnimation, adjustFont } from '../../../shared/functions';

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
`;

export const Titulo = styled.div`
  color: ${Colors.pink2};
  font-size: ${adjustFont(40)}px;
  font-weight: 700;
`;

export const StyledCard = styled(Card)`
  width: ${adjustAnimation(150)}px;
  height: ${adjustAnimation(150)}px;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
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
