import { Colors } from '../../../shared/colors';
import { Media } from '../../../shared/media';
import styled from 'styled-components';

export const SobreMimContainer = styled.div`
  height: 85vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundOverlay};

  @media ${Media.maxWidth.sm} {
    flex-direction: column;
    height: 70vh;
  }
`;

export const Fotodiv = styled.div`
  background: url(${(props) => props.theme.foto});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  width: 250px;
  height: 250px;
  border-radius: 100%;
  border: 8px solid ${(props) => props.theme.fotoBorder};

  @media ${Media.maxWidth.md} {
    width: 200px;
    height: 200px;
  }
  @media ${Media.maxWidth.ms} {
    width: 150px;
    height: 150px;
  }
`;

export const TextoContainer = styled.div`
  width: 50%;

  & h1 {
    font-weight: 700;
    font-size: 25px;
    color: ${Colors.white};
    margin-bottom: 15px;
    color: ${(props) => props.theme.sobreMimTitulo};

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
