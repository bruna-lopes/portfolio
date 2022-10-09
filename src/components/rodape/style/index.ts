import { Link } from '@material-ui/core';
import styled from 'styled-components';
import { Media } from '../../../shared/media';

export const RodapeContainer = styled.footer`
  height: 10vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundOverlay};
`;

export const StyledLink = styled(Link)`
  &.MuiLink-root {
    margin: 10px;
  }

  .icon {
    transition-property: font-size;
    transition-duration: 0.5s;
    font-size: 30px;

    @media ${Media.maxWidth.md} {
      font-size: 25px;
    }
    @media ${Media.maxWidth.ms} {
      font-size: 20px;
    }

    :hover {
      font-size: 50px;
      color: ${(props) => props.theme.iconeHover};

      @media ${Media.maxWidth.md} {
        font-size: 40px;
      }
      @media ${Media.maxWidth.ms} {
        font-size: 35px;
      }
    }
  }
`;
