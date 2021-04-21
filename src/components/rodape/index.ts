import styled from '@emotion/styled';
import { Link } from '@material-ui/core';
import { Colors } from '../../shared/colors';

export const RodapeContainer = styled.footer`
  height: 10%;
  display: flex;
`;

export const StyledLink = styled(Link)`
  &.MuiLink-root {
    :hover {
      color: ${Colors.pink1};
    }
  }
`;
