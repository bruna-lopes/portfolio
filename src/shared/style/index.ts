import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  color: ${(props) => props.theme.fontColor};
  background: ${(props) => props.theme.backgroundGradient};
`;
