import styled from '@emotion/styled';
import { Link } from '@material-ui/core';
import { Colors } from '../../shared/colors';

export const RodapeContainer = styled.footer`
  height: 10vh;
  display: flex;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  &.MuiLink-root {
    :hover {
      color: ${Colors.pink1};
    }
  }
`;
