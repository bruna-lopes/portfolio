import { Colors } from '../../../shared/colors';
import Foto from '../../../assets/FotoBruna.jpeg';
import { Media } from '../../../shared/media';
import styled from 'styled-components';

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
    height: 70vh;
  }
`;

export const Fotodiv = styled.div<Props>`
  background: url(${Foto});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 250px;
  height: 250px;
  border-radius: 100%;

  ${({ dark }) =>
    dark === 'true'
      ? `border: 8px solid ${Colors.pink1};`
      : `border: 8px solid ${Colors.white};`}

  @media ${Media.maxWidth.md} {
    width: 200px;
    height: 200px;
  }
  @media ${Media.maxWidth.ms} {
    width: 150px;
    height: 150px;
  }
`;

export const TextoContainer = styled.div<Props>`
  width: 50%;

  & h1 {
    font-weight: 700;
    font-size: 25px;
    color: ${Colors.white};
    margin-bottom: 15px;

    ${({ dark }) =>
      dark === 'true' ? `color: ${Colors.pink1};` : `color: ${Colors.white};`}

    @media ${Media.maxWidth.md} {
      font-size: 20px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 18px;
    }
  }

  & p {
    font-size: 20px;
    margin-bottom: 10px;

    @media ${Media.maxWidth.md} {
      font-size: 16px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 14px;
      margin-bottom: 6px;
    }
  }

  & strong {
    font-weight: 700;
  }

  @media ${Media.maxWidth.sm} {
    width: 70%;
  }
`;
