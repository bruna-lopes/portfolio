import styled from '@emotion/styled';
import { Colors } from '../../../shared/colors';
import { adjustFont } from '../../../shared/functions';

export const CabecalhoContainer = styled.div`
  background-color: ${Colors.blackOverlay};
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const TextoContainer = styled.div`
  margin-left: 20px;
  width: 50%;
  text-align: center;

  & p {
    font-size: ${adjustFont(25)}px;
  }

  & span {
    font-weight: 600;
  }
`;
