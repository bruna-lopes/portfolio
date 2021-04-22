import styled from '@emotion/styled';
import { Colors } from '../../../shared/colors';
import Foto from '../../../assets/FotoBruna.jpeg';
import { adjustAnimation, adjustFont } from '../../../shared/functions';

export const SobreMimContainer = styled.div`
  height: 85vh;
  background-color: ${Colors.blackOverlay};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Fotodiv = styled.div`
  background: url(${Foto});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: ${adjustAnimation(250)}px;
  height: ${adjustAnimation(250)}px;
  border-radius: 200px;
  border: 8px solid ${Colors.white};
`;

export const TextoContainer = styled.div`
  width: 50%;

  & h1 {
    font-weight: 700;
    font-size: ${adjustFont(25)}px;
    color: ${Colors.white};
    margin-bottom: 15px;
  }

  & p {
    font-size: ${adjustFont(20)}px;
    margin-bottom: 10px;
  }

  & span {
    font-weight: 700;
  }
`;
