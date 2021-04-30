import styled from '@emotion/styled';
import { Colors, Gradients } from '../colors';

type MainProps = {
  dark: boolean;
};

export const MainContainer = styled.div<MainProps>`
  width: 100%;
  min-height: 100vh;

  ${({ dark }) =>
    dark
      ? `background: ${Gradients.blueToPinkDark}; color: ${Colors.fontColorDark};`
      : `background: ${Gradients.blueToPink}; color: ${Colors.fontColor};`}
`;
