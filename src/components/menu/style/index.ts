import styled from '@emotion/styled';
import { Colors } from '../../../shared/colors';
import { Media } from '../../../shared/media';

export const MenuContainer = styled.div`
  background-color: ${Colors.whiteOverlay};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 15vh;
  position: fixed;
`;

export const AnimationContainer = styled.div`
  margin-right: 20px;
`;

export const OpcoesContainer = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 2px;

  @media ${Media.maxWidth.xl} {
    width: 40%;
  }
  @media ${Media.maxWidth.md} {
    width: 60%;
    margin: 4vw;
  }

  & span {
    cursor: pointer;
    margin: 0.5vw;
    font-size: 18px;

    :hover {
      color: ${Colors.hoverPink};
      font-weight: 700;
    }

    @media ${Media.maxWidth.xl} {
      font-size: 16px;
    }
    @media ${Media.maxWidth.md} {
      font-size: 14px;
    }
  }
`;
