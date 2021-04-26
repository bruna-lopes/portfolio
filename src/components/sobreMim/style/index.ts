import styled from '@emotion/styled';
import { Colors } from '../../../shared/colors';
import Foto from '../../../assets/FotoBruna.jpeg';
import { adjustComponent, adjustFont } from '../../../shared/functions';
import { Media } from '../../../shared/media';

export const SobreMimContainer = styled.div`
  height: 85vh;
  background-color: ${Colors.blackOverlay};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  @media ${Media.maxWidth.sm} {
    flex-direction: column;
  }
`;

export const Fotodiv = styled.div`
  background: url(${Foto});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: ${adjustComponent(250)}px;
  height: ${adjustComponent(250)}px;
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

  & strong {
    font-weight: 700;
  }
`;
