import styled from '@emotion/styled';
import { Colors } from '../../../shared/colors';
import Foto from '../../../assets/FotoBruna.jpeg';
import { adjustComponent, adjustFont } from '../../../shared/functions';
import { Media } from '../../../shared/media';

type Props = {
  dark: string;
};

export const SobreMimContainer = styled.div<Props>`
  height: 85vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  ${({ dark }) =>
    dark === 'true'
      ? `background-color: ${Colors.whiteOverlay3};`
      : `background-color: ${Colors.blackOverlay};`}

  @media ${Media.maxWidth.sm} {
    flex-direction: column;
    height: 60vh;
  }
`;

export const Fotodiv = styled.div<Props>`
  background: url(${Foto});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: ${adjustComponent(250)}px;
  height: ${adjustComponent(250)}px;
  border-radius: 200px;

  ${({ dark }) =>
    dark === 'true'
      ? `border: 8px solid ${Colors.pink1};`
      : `border: 8px solid ${Colors.white};`}
`;

export const TextoContainer = styled.div<Props>`
  width: 50%;

  & h1 {
    font-weight: 700;
    font-size: ${adjustFont(25)}px;
    color: ${Colors.white};
    margin-bottom: 15px;

    ${({ dark }) =>
      dark === 'true' ? `color: ${Colors.pink1};` : `color: ${Colors.white};`}

    @media ${Media.maxWidth.sm} {
      margin-top: 15px;
    }
  }

  & p {
    font-size: ${adjustFont(20)}px;
    margin-bottom: 10px;
  }

  & strong {
    font-weight: 700;
  }
`;
